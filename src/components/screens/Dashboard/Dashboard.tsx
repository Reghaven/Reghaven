import { ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/RootStackParamList';
import { GameHeader } from './GameHeader/GameHeader';
import { DecisionCard } from './DecisionCard/DecisionCard';
import { AssetType, Decision } from 'lib-storyteller';

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
		winResolveAssets: [],
		winDissolvesAssets: [],
		grantedAttributePoints: 1,
		leadsToPlace: undefined,
		leadsToLocation: undefined,
		text: 'Yay, you won!',
	},
	onFail: {
		failResolveAssets: [],
		failDissolvesAssets: [],
		leadsToLocation: undefined,
		leadsToPlace: undefined,
		text: 'Oh no! You lost!',
	},
};

export function Dashboard({ navigation }: Props): React.ReactElement {
	return (
		<ScrollView style={Styles.Wrapper}>
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
			<DecisionCard
				decision={DemoDecision}
				imageUri={
					'https://static.boredpanda.com/blog/wp-content/uploads/2015/04/cute-pet-rats-13__880.jpg'
				}
			/>
		</ScrollView>
	);
}

const Styles = StyleSheet.create({
	Wrapper: {
		backgroundColor: '#202020',
	},
});
