import { Plugin, postInitialization, preLogin, SapphireClient } from '@sapphire/framework';
import type { ClientOptions } from 'discord.js';
import { join } from 'path';
import { Server, ServerOptions } from './lib/structures/http/Server';

/**
 * @since 1.0.0
 */
export class Api extends Plugin {
	/**
	 * @since 1.0.0
	 */
	public static [postInitialization](this: SapphireClient, options: ClientOptions): void {
		this.server = new Server(options.api);
		this.registerStore(this.server.routes) //
			.registerStore(this.server.mediaParsers)
			.registerStore(this.server.middlewares);

		this.events.registerPath(join(__dirname, 'events'));
		this.server.routes.registerPath(join(__dirname, 'routes'));
		this.server.middlewares.registerPath(join(__dirname, 'middlewares'));
		this.server.mediaParsers.registerPath(join(__dirname, 'mediaParsers'));
	}

	/**
	 * @since 1.0.0
	 */
	public static async [preLogin](this: SapphireClient): Promise<void> {
		await this.server.connect();
	}
}

declare module 'discord.js' {
	export interface Client {
		server: Server;
	}

	export interface ClientOptions {
		api?: ServerOptions;
	}
}

SapphireClient.plugins.registerPostInitializationHook(Api[postInitialization], 'API-PostInitialization');
SapphireClient.plugins.registerPreLoginHook(Api[preLogin], 'API-PreLogin');
