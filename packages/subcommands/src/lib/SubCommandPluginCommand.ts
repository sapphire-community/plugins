import { Args, Awaitable, Command, PieceContext } from '@sapphire/framework';
import type { Message } from 'discord.js';
import { SubCommandManager } from './SubCommandManager';

export class SubCommandPluginCommand<ArgType extends Args = Args, CommandType extends Command<ArgType> = Command<ArgType>> extends Command<ArgType> {
	public readonly subCommands: SubCommandManager<ArgType, CommandType> | null;

	public constructor(context: PieceContext, options: SubCommandPluginCommandOptions<ArgType>) {
		super(context, options);

		this.subCommands = options.subCommands ? new SubCommandManager(options.subCommands) : null;
	}

	public messageRun(message: Message, args: ArgType, context: Command.Context): Awaitable<unknown> {
		if (!this.subCommands) throw new Error(`The command ${this.name} does not have a 'messageRun' method and does not support sub-commands.`);
		return this.subCommands.messageRun({ message, args, context, command: this as unknown as CommandType });
	}
}

export interface SubCommandPluginCommandOptions<ArgType extends Args = Args, CommandType extends Command<ArgType> = Command<ArgType>>
	extends Command.Options {
	subCommands?: SubCommandManager.RawEntries<ArgType, CommandType>;
}

export namespace SubCommandPluginCommand {
	/**
	 * The SubCommandPluginCommand Options
	 */
	export type Options = SubCommandPluginCommandOptions;
}
