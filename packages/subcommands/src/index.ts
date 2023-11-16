import { CooldownOptions } from '@sapphire/framework';
import { PluginPrecondition as SubcommandCooldown, type SubcommandCooldownPreconditionContext } from './preconditions/PluginSubcommandCooldown';

export * from './lib/Subcommand';
export * as SubcommandPreconditionResolvers from './lib/precondition-resolvers/subcommandCooldown';
export * from './lib/types/Enums';
export * from './lib/types/Events';
export * from './lib/types/SubcommandMappings';

declare module 'discord.js' {
	interface ClientOptions {
		/**
		 * If Plugin-subcommand to load pre-included subcommand error event listeners that log any encountered errors to the {@link SapphireClient.logger} instance
		 * @since 3.1.2
		 * @default true
		 */
		loadSubcommandErrorListeners?: boolean;
		/**
		 * Sets the default cooldown time for all subcommands.
		 * @remark This is separate from {@link ClientOptions.defaultCooldown} as it is only used for subcommands
		 * @remark Note that for the `filteredCommands` option you have to provide it as
		 * - For a subcommand without a group: `commandName.subcommandName` (e.g. `config.show`).
		 * - For a subcommand with a group: `commandName.groupName.subcommandName` (e.g. `config.set.prefix`).
		 * @since 5.1.0
		 * @default "No cooldown options"
		 */
		subcommandDefaultCooldown?: CooldownOptions;
	}
}

declare module '@sapphire/framework' {
	interface Preconditions {
		SubcommandCooldown: SubcommandPreconditions.SubcommandCooldownContext;
	}
}

/**
 * The preconditions specific to subcommands
 * @since 5.1.0
 */
export const SubcommandPreconditions = {
	SubcommandCooldown
};

/**
 * The preconditions specific to subcommands
 * @since 5.1.0
 */
export namespace SubcommandPreconditions {
	/** The context for the subcommand cooldown precondition */
	export type SubcommandCooldownContext = SubcommandCooldownPreconditionContext;
}
