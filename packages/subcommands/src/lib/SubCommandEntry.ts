import type { Args, Awaited, Command, CommandContext } from '@sapphire/framework';
import type { Message } from 'discord.js';
import { isFunction } from '@sapphire/utilities';

/**
 * @since 1.0.0
 * SubCommandEntry represents a basic subcommand entry. Methods and command names are supported in core.
 * @see {@link SubCommandEntryCommand}
 * @see {@link SubCommandEntryMethod}
 */
export abstract class SubCommandEntry<T extends Args> {
	public readonly input: string | ((context: SubCommandEntry.RunContext<T>) => Awaited<string>);
	public readonly output: string;

	public constructor(options: SubCommandEntry.Options<T>) {
		this.input = options.input;
		if (!options.output && typeof options.input !== 'string') throw new ReferenceError('No output provided.');
		this.output = options.output ?? (options.input as string);
	}

	public async match(value: string, context: SubCommandEntry.RunContext<T>): Promise<boolean> {
		return (isFunction(this.input) ? await this.input(context) : this.input) === value;
	}

	public abstract run(context: SubCommandEntry.RunContext<T>): unknown;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace SubCommandEntry {
	/**
	 * The options for a SubCommandEntry.
	 * @property input Input represents the subcommand that the user will type in.
	 * @property output Output represents the method/command called for the subcommand.
	 * @example
	 * ```ts
	 * subCommands: [{
	 * 	input: ({ message }) => message.resolveKey('subcommands:set'),
	 * 	output: 'set'
	 * }]
	 * ```
	 */
	export interface Options<T extends Args> {
		input: string | ((context: RunContext<T>) => Awaited<string>);
		output?: string;
	}

	/**
	 * RunContext is passed to SubCommandManager.run() and to input (if it is a function)
	 * @see {@link SubCommandEntry.Options}
	 */
	export interface RunContext<T extends Args> {
		command: Command;
		message: Message;
		args: T;
		context: CommandContext;
	}
}
