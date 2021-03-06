import {
	AssetType,
	Attribute,
	Character,
	IAssetInstance,
} from 'lib-storyteller';
import { CharacterMapEntry } from 'lib-storyteller/dist/model/character.interface';
import * as _ from 'lodash';

const InitialCharacter: Character = {
	name: 'Leonardo',
	assets: new Map<string, IAssetInstance>([
		['Money', [{ name: 'Money', type: AssetType.Normal }, 20]],
		[
			'Fathers Pocket Watch',
			[{ name: 'Fathers Pocket Watch', type: AssetType.Normal }, 1],
		],
		['Fathers Letter', [{ name: 'Fathers Letter', type: AssetType.Normal }, 1]],
	]),
	attributes: new Map<string, Attribute>([
		[
			'Strength',
			{
				name: 'Strength',
				type: AssetType.Attribute,
				pointsCollected: 1,
			},
		],
		[
			'Stealth',
			{
				name: 'Stealth',
				type: AssetType.Attribute,
				pointsCollected: 1,
			},
		],
		[
			'Intelligence',
			{
				name: 'Intelligence',
				type: AssetType.Attribute,
				pointsCollected: 1,
			},
		],
	]),
	equipment: {
		head: undefined,
		body: undefined,
		wrist: undefined,
		necklace: undefined,
		shoes: undefined,
	},
	map: {
		currentPlace: 'Reghaven',
		currentLocation: 'Bus To Reghaven',
		unlockedLocations: new Map<string, CharacterMapEntry[]>(),
	},
};

export function createNewCharacter(): Character {
	return _.cloneDeep(InitialCharacter);
}
