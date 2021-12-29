import type { Message } from 'discord.js';
import type { PatternCommand } from '../structures/PatternCommand';

export interface PatternCommandPayload {
	/** The message that triggered this PatternCommand */
	message: Message;
	/** The command that is triggered by this PatternCommand */
	command: PatternCommand;
	/** The alias of this pattern command */
	alias: string;
}

export interface PatternPreCommandRunPayload extends PatternCommandDeniedPayload {}

export interface PatternCommandDeniedPayload extends PatternCommandPayload {
	parameters: string;
	context: PatternCommand.RunContext;
}

export interface PatternCommandAcceptedPayload extends PatternCommandPayload {
	parameters: string;
	context: PatternCommand.RunContext;
}
