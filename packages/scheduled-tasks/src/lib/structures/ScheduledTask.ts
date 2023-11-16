import { Piece } from '@sapphire/pieces';
import type { Awaitable } from '@sapphire/utilities';
import type { JobsOptions } from 'bullmq';

/**
 * Represents a scheduled task that can be run at a specified interval or pattern.
 * @abstract
 */
export abstract class ScheduledTask<Options extends ScheduledTask.Options = ScheduledTask.Options> extends Piece<Options, 'scheduled-tasks'> {
	public readonly interval: number | null;
	public readonly pattern: string | null;
	public readonly customJobOptions?: ScheduledTaskCustomJobOptions;

	public constructor(context: ScheduledTask.LoaderContext, options: ScheduledTaskOptions) {
		super(context, options);
		this.interval = options.interval ?? null;
		this.pattern = options.pattern ?? null;
		this.customJobOptions = options.customJobOptions;
	}

	public abstract run(payload: unknown): Awaitable<unknown>;
}

/**
 * Options for configuring a scheduled task.
 */
export interface ScheduledTaskOptions extends Piece.Options {
	/**
	 * The interval (in milliseconds) at which the task should run.
	 */
	interval?: number | null;
	/**
	 * A cron pattern specifying when the task should run.
	 */
	pattern?: string | null;
	/**
	 * Custom options to pass to the job scheduler.
	 */
	customJobOptions?: ScheduledTaskCustomJobOptions;
}

/**
 * Custom options for a job in a scheduled task.
 */
export type ScheduledTaskCustomJobOptions = Omit<JobsOptions, 'repeat'>;

/**
 * The namespace for {@link ScheduledTask}.
 */
export namespace ScheduledTask {
	/**
	 * The options for a {@link ScheduledTask}.
	 */
	export type Options = ScheduledTaskOptions;

	/**
	 * The context for a {@link ScheduledTask}.
	 * @deprecated Use {@linkcode LoaderContext} instead.
	 */
	export type Context = LoaderContext;
	export type LoaderContext = Piece.LoaderContext<'scheduled-tasks'>;
	export type JSON = Piece.JSON;
	export type LocationJSON = Piece.LocationJSON;
}
