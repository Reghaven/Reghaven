import { useState } from 'react';
import { Character } from 'lib-storyteller';
import { createNewCharacter } from './InitialCharacter.object';

export function useCharacter() {
	const [character] = useState<Character>(createNewCharacter());

	return [character];
}
