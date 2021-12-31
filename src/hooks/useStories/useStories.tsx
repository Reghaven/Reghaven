import { useState } from 'react';
import { Character, Decision, Story } from 'lib-storyteller';
import { useDemoStory } from './useDemoStory';

export function useStories() {
	const demoStory = useDemoStory();
	const [decisions] = useState<Decision[]>();

	function updateDecisionsForCharacter(character: Character): void {}

	return {
		decisions,
		updateDecisionsForCharacter,
	};
}
