import { Character, Decision } from 'lib-storyteller';

export type RootStackParamList = {
	LoadingScreen: undefined;
	Dashboard: undefined;
	Results: {
		decision: Decision;
		character: Character;
	};
};
