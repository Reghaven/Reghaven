import { useState } from 'react';
import { Attribute, Character, IAssetInstance } from 'lib-storyteller';
import { CharacterMapEntry } from 'lib-storyteller/dist/model/character.interface';

const initialCharacter: Character = {
	name: 'Leonardo',
	assets: new Map<string, IAssetInstance>(),
	attributes: new Map<string, Attribute>(),
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

export function useStoryteller() {
	const [character, setCharacter] = useState<Character>(initialCharacter);

	return { character };
}
