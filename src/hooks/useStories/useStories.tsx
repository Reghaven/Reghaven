import { useState } from 'react';
import { Character, Decision, GameController } from 'lib-storyteller';
import { useDemoStory } from './useDemoStory';

export function useStories() {
	const demoStory = useDemoStory();
	const [decisions, setDecisions] = useState<Decision[]>();

	function updateDecisionsForCharacter(character: Character): void {
		GameController.retrievePossibleDecisions({
			stories: [demoStory],
			character: character,
		});
		setDecisions(decisions);
	}

	return {
		decisions,
		updateDecisionsForCharacter,
	};
}
