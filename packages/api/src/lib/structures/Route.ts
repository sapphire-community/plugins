import { Piece } from '@sapphire/pieces';
import type { Awaitable } from '@sapphire/utilities';
import { Collection } from 'discord.js';
import { RouteData } from '../utils/RouteData';
import type { MethodCallback, RouteStore } from './RouteStore';
import type { ApiRequest } from './api/ApiRequest';
import type { ApiResponse } from './api/ApiResponse';
import { methodEntries, type Methods } from './http/HttpMethods';
import type { MimeTypeWithoutParameters } from './http/Server';

/**
 * @since 1.0.0
 */
export abstract class Route<Options extends Route.Options = Route.Options> extends Piece<Options, 'routes'> {
	/**
	 * (RFC 7230 3.3.2) The maximum decimal number of octets.
	 */
	public readonly maximumBodyLength: number;

	/**
	 * The accepted content types.
	 */
	public readonly acceptedContentMimeTypes: readonly MimeTypeWithoutParameters[] | null;

	/**
	 * The route information.
	 */
	public readonly router: RouteData;

	/**
	 * The methods this route accepts.
	 */
	public readonly methods = new Collection<Methods, MethodCallback>();

	public constructor(context: Route.LoaderContext, options: Options = {} as Options) {
		super(context, options);

		const api = this.container.server.options;
		// Concat a `/` to the prefix if it does not end with it
		const prefix = api.prefix ? (api.prefix.endsWith('/') ? api.prefix : `${api.prefix}/`) : '';
		// Use the defined route, otherwise:
		// - If the location is virtual, use the name.
		// - Otherwise, use the directories and the name.
		const path = options.route ?? (this.location.virtual ? this.name : this.location.directories.concat(this.name).join('/'));
		this.router = new RouteData(`${prefix}${path}`);

		for (const [method, symbol] of methodEntries) {
			const value = Reflect.get(this, symbol) as MethodCallback;
			if (typeof value === 'function') this.methods.set(method, value);
		}

		this.maximumBodyLength = options.maximumBodyLength ?? api.maximumBodyLength ?? 1024 * 1024 * 50;
		this.acceptedContentMimeTypes = options.acceptedContentMimeTypes ?? api.acceptedContentMimeTypes ?? null;
	}

	/**
	 * Per-piece listener that is called when the piece is loaded into the store.
	 * Useful to set-up asynchronous initialization tasks.
	 */
	public override onLoad(): Awaitable<unknown> {
		const store = this.store as unknown as RouteStore;

		for (const [method, cb] of this.methods) {
			store.table.get(method)!.set(this, cb.bind(this));
		}

		return undefined;
	}

	/**
	 * Per-piece listener that is called when the piece is unloaded from the store.
	 * Useful to set-up clean-up tasks.
	 */
	public override onUnload(): Awaitable<unknown> {
		const store = this.store as unknown as RouteStore;

		for (const [method] of this.methods) {
			store.table.get(method)!.delete(this);
		}

		return undefined;
	}
}

export interface RouteOptions extends Piece.Options {
	/**
	 * The route the piece should represent.
	 * @since 1.0.0
	 * @default ''
	 * @example
	 * ```typescript
	 * '/users'
	 * // request.params -> {}
	 * ```
	 * @example
	 * ```typescript
	 * '/guilds/[guild]/members/[member]'
	 * // request.params -> { guild: '...', member: '...' }
	 * ```
	 */
	route?: string;

	/**
	 * (RFC 7230 3.3.2) The maximum decimal number of octets.
	 * @since 1.0.0
	 * @default this.context.server.options.maximumBodyLength ?? 1024 * 1024 * 50
	 */
	maximumBodyLength?: number;

	/**
	 * The accepted content types for this route. If set to null, the route will accept any data.
	 * @since 1.3.0
	 * @default this.context.server.options.acceptedContentMimeTypes ?? null
	 */
	acceptedContentMimeTypes?: MimeTypeWithoutParameters[] | null;
}

export namespace Route {
	/** @deprecated Use {@linkcode LoaderContext} instead. */
	export type Context = LoaderContext;
	export type LoaderContext = Piece.LoaderContext<'routes'>;
	export type Options = RouteOptions;
	export type JSON = Piece.JSON;
	export type LocationJSON = Piece.LocationJSON;

	export type Request = ApiRequest;
	export type Response = ApiResponse;
}
