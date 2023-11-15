import { Store } from '@sapphire/pieces';
import { Utility } from './Utility';

/**
 * @since 1.0.0
 */
export class UtilitiesStore extends Store<Utility, 'utilities'> {
	public constructor() {
		super(Utility, { name: 'utilities' });
	}
}
