import { Store } from '@sapphire/pieces';
import { UtilityFunction } from './UtilityFunction';

/**
 * @since 1.0.0
 */
export class UtilitiesStore extends Store<UtilityFunction> {
	public constructor() {
		super(UtilityFunction, { name: 'utilities' });

		// for (const [method] of methodEntries) this.table.set(method, new Collection());
	}
}
