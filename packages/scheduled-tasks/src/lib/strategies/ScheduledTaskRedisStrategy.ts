import { container, from, isErr } from '@sapphire/framework';
import Bull, { Job, JobOptions, Queue, QueueOptions, JobStatus, JobId } from 'bull';
import type { ScheduledTaskCreateRepeatedTask, ScheduledTasksTaskOptions } from '../types';
import type { ScheduledTaskBaseStrategy } from '../types/ScheduledTaskBaseStrategy';
import { ScheduledTaskEvents } from '../types/ScheduledTaskEvents';

export interface ScheduledTaskRedisStrategyOptions {
	queue?: string;
	bull?: QueueOptions;
}

export interface ScheduledTaskRedisStrategyJob {
	task: string;
	payload?: unknown;
}

export class ScheduledTaskRedisStrategy implements ScheduledTaskBaseStrategy {
	public readonly options: QueueOptions;
	public readonly queue: string;

	private bullClient!: Queue;

	public constructor(options?: ScheduledTaskRedisStrategyOptions) {
		this.queue = options?.queue ?? 'scheduled-tasks';
		this.options = options?.bull ?? {};
	}

	public connect() {
		const connectResult = from(() => {
			this.bullClient = new Bull(this.queue, this.options);
			void this.bullClient.process((job: Job<ScheduledTaskRedisStrategyJob>) => this.run(job?.data?.task, job?.data?.payload));
		});

		if (isErr(connectResult)) {
			container.client.emit(ScheduledTaskEvents.ScheduledTaskStrategyConnectError, connectResult.error);
		}
	}

	public create(task: string, payload?: unknown, options?: ScheduledTasksTaskOptions) {
		if (!this.bullClient) {
			return;
		}

		let bullOptions: JobOptions = { delay: options?.delay };

		if (options?.type === 'repeated') {
			bullOptions = {
				repeat: options?.interval
					? {
							every: options.interval!
					  }
					: {
							cron: options.cron!
					  }
			};
		}

		return this.bullClient.add(
			{
				task,
				payload
			},
			bullOptions
		);
	}

	public async createRepeated(tasks: ScheduledTaskCreateRepeatedTask[]) {
		for (const task of tasks) {
			await this.create(task.name, null, task.options);
		}
	}

	public async delete(id: JobId) {
		if (!this.bullClient) {
			return;
		}

		const job = await this.bullClient.getJob(id);
		return job?.remove();
	}

	public list(types: JobStatus[], start?: number, end?: number, asc?: boolean) {
		if (!this.bullClient) {
			return;
		}

		return this.bullClient.getJobs(types, start, end, asc);
	}

	public listRepeated(start?: number, end?: number, asc?: boolean) {
		if (!this.bullClient) {
			return;
		}

		return this.bullClient.getRepeatableJobs(start, end, asc);
	}

	public get(id: JobId) {
		if (!this.bullClient) {
			return;
		}

		return this.bullClient.getJob(id);
	}

	public run(task: string, payload: unknown) {
		return container.tasks.run(task, payload);
	}
}
