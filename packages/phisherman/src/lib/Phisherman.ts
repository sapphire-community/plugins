import { fetch, FetchMethods, FetchResultTypes } from '@sapphire/fetch';
import { fromAsync, isErr } from '@sapphire/framework';

export class Phisherman {
	/**
	 * The options for phisherman
	 */
	public options;
	public constructor(options: PhishermanOptions | undefined) {
		this.options = options;
	}

	/**
	 * Check if a link is scam
	 * @param domain The link to check
	 * @since 1.0.0
	 */
	public async check(domain: string) {
		const result = await fromAsync(async () => {
			const check = fetch<PhishermanReturnType>(`https://api.phisherman.gg/v2/domains/check/${domain}`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${this.options?.apiKey}`
				}
			});
			return check;
		});
		if (isErr(result)) throw result.error;
		return result.value;
	}

	/**
	 * Report a scam domain to phisherman
	 * @param domain The domain to report
	 * @since 1.0.0
	 */
	public async report(domain: string) {
		const result = await fromAsync(async () => {
			const report = await fetch<PhishermanReportType>(
				`https://api.phisherman.gg/v2/phish/report/${domain}`,
				{
					method: FetchMethods.Put,
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${this.options?.apiKey}`
					}
				},
				FetchResultTypes.JSON
			);
			return report;
		});
		if (isErr(result)) throw result.error;
		return result.value;
	}
}

export interface PhishermanOptions {
	apiKey: string;
}

export interface PhishermanReturnType {
	isSafe: boolean;
	verified: boolean;
	classification: string;
}

export interface PhishermanReportType {
	success: boolean;
	message: string;
}
