import { Listener, Result } from '@sapphire/framework';
import { Stopwatch } from '@sapphire/stopwatch';
import { PatternCommandEvents } from '../lib/utils/PatternCommandEvents';
import type { PatternCommandAcceptedPayload } from '../lib/utils/PatternCommandInterfaces';

export class PluginListener extends Listener<typeof PatternCommandEvents.CommandAccepted> {
	public constructor(context: Listener.LoaderContext) {
		super(context, { event: PatternCommandEvents.CommandAccepted });
	}

	public override async run(payload: PatternCommandAcceptedPayload) {
		const { message, command } = payload;

		const result = await Result.fromAsync(async () => {
			message.client.emit(PatternCommandEvents.CommandRun, message, command, payload);

			const stopwatch = new Stopwatch();
			const result = await command.messageRun(message);
			const { duration } = stopwatch.stop();

			message.client.emit(PatternCommandEvents.CommandSuccess, { ...payload, result, duration });

			return duration;
		});

		result.inspectErr((error) => message.client.emit(PatternCommandEvents.CommandError, error, { ...payload, duration: -1 }));

		message.client.emit(PatternCommandEvents.CommandFinished, message, command, {
			...payload,
			success: result.isOk(),
			duration: result.unwrapOr(-1)
		});
	}
}
