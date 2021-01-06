import type { Server, ServerOptions } from './lib/structures/http/Server';

export * from './lib/structures/api/ApiRequest';
export * from './lib/structures/api/ApiResponse';
export * from './lib/structures/api/CookieStore';
export * from './lib/structures/http/Auth';
export * from './lib/structures/http/HttpCodes';
export * from './lib/structures/http/HttpMethods';
export * from './lib/structures/http/Server';
export * from './lib/structures/MediaParser';
export * from './lib/structures/MediaParserStore';
export * from './lib/structures/Middleware';
export * from './lib/structures/MiddlewareStore';
export * from './lib/structures/Route';
export * from './lib/structures/RouteStore';
export * from './lib/utils/MimeTypes';
export * from './lib/utils/RouteData';

declare module 'discord.js' {
	export interface Client {
		server: Server;
	}

	export interface ClientOptions {
		api?: ServerOptions;
	}
}
