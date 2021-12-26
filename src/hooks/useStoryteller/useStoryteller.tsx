import { useState } from 'react';
import { Character } from 'lib-storyteller';
import { createNewCharacter } from './InitialCharacter.object';

export function useStoryteller() {
	const [character, setCharacter] = useState<Character>(createNewCharacter());

	return { character };
}
