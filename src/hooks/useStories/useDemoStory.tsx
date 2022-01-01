import { Asset, AssetType, Place, Story } from 'lib-storyteller';

export function useDemoStory() {
	const reghaven: Place = {
		name: 'Reghaven',
		locations: [
			{
				name: 'Bus to Reghaven',
				isUnlockedFromBeginning: true,
				characterCanLeaveAnytime: false,
				isVisibleOnMap: false,
			},
		],
	};

	const researchAsset: Asset = {
		name: 'Research',
		type: AssetType.Normal,
	};

	const demoStory: Story = {
		title: 'The Arrival',
		text: 'The Bus has seen better days. Dusty seats and windows so dirty you barely can see through hind your sight.',
		conditionsToShow: {
			characterHasAssets: [],
			characterHasNotAssets: [],
			characterIsAtPlace: reghaven,
		},
		decisions: [
			{
				title: 'Read Todays Newspaper',
				text: 'You found it on another seat',
				attribute: {
					attributeToActivate: 'Intelligence',
					attributeLevelFor100Percent: 1,
				},
				onWin: {
					text: "Next to the funnies and some local news about topics you don't understand, there are some interesting title stories.",
					characterLoosesAssetInstances: [],
					characterGainsAssetInstances: [[researchAsset, 1]],
					providesAttributePoints: 1,
					characterWins: true,
				},
				onFail: {
					text: 'You remember that you cannot read',
					characterGainsAssetInstances: [],
					characterLoosesAssetInstances: [],
					providesAttributePoints: 0,
					characterWins: false,
				},
				conditionsToUse: {
					characterHasAssets: [],
					characterHasNotAssets: [],
				},
				conditionsToShow: {
					characterHasAssets: [],
					characterHasNotAssets: [],
					characterIsAtLocation: 'Bus to Reghaven',
				},
			},
		],
	};

	return demoStory;
}
