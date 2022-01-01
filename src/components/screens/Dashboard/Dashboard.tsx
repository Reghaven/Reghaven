import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/RootStackParamList';
import { GameHeader } from './GameHeader/GameHeader';
import { DecisionCard } from './DecisionCard/DecisionCard';
import { AssetType, Decision } from 'lib-storyteller';
import { BottomDrawer } from '../../common/BottomDrawer';
import { Placeholder } from '../../common/Placeholder';
import { CharacterSheet } from './CharacterSheet/CharacterSheet';
import { useCharacter } from '../../../hooks/useCharacter/useCharacter';

type Props = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

const DemoDecision: Decision = {
	attribute: {
		attributeToActivate: 'Strength',
		attributeLevelFor100Percent: 1,
	},
	conditionsToUse: {
		characterHasNotAssets: [],
		characterHasAssets: [
			[
				{
					name: 'Money',
					type: AssetType.Normal,
				},
				1,
			],
		],
	},
	conditionsToShow: {
		characterHasAssets: [],
		characterHasNotAssets: [],
		characterIsAtLocation: 'Bus To Reghaven',
	},
	title: 'My Decision',
	text: 'This is just a demo with no consequences, but the text is very long this time :)',
	onWin: {
		characterGainsAssetInstances: [],
		characterLoosesAssetInstances: [],
		providesAttributePoints: 1,
		characterGoesToPlace: undefined,
		characterGoesToLocation: undefined,
		text: 'Yay, you won!',
		characterWins: true,
	},
	onFail: {
		characterGainsAssetInstances: [],
		characterLoosesAssetInstances: [],
		characterGoesToLocation: undefined,
		characterGoesToPlace: undefined,
		text: 'Oh no! You lost!',
		characterWins: false,
		providesAttributePoints: 0,
	},
};

export function Dashboard({ navigation }: Props): React.ReactElement {
	const [character] = useCharacter();

	return (
		<View style={Styles.Wrapper}>
			<ScrollView style={Styles.Scroll}>
				<GameHeader
					illustrationLink={
						'https://cdnb.artstation.com/p/assets/images/images/002/987/601/large/mihail-bila-innsmouth-waterfront-small.jpg'
					}
					text={
						'Lorem Ipsum Dolor Sit Amet Constitueur Lorem Ipsum Dolor Sit Amet Constitueur Lorem Ipsum Dolor Sit Amet Constitueur'
					}
				/>
				<DecisionCard
					decision={DemoDecision}
					imageUri={
						'https://static.boredpanda.com/blog/wp-content/uploads/2015/04/cute-pet-rats-13__880.jpg'
					}
				/>
				<Placeholder height={70} />
			</ScrollView>
			<BottomDrawer title={'Character'}>
				<CharacterSheet character={character} />
			</BottomDrawer>
		</View>
	);
}

const Styles = StyleSheet.create({
	Wrapper: {
		backgroundColor: '#202020',
		flex: 1,
		flexDirection: 'column',
	},
	Scroll: {
		flex: 1,
	},
});
