import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/RootStackParamList';
import { GameHeader } from './GameHeader/GameHeader';
import { DecisionCard } from './DecisionCard/DecisionCard';
import { BottomDrawer } from '../../common/BottomDrawer';
import { Placeholder } from '../../common/Placeholder';
import { CharacterSheet } from './CharacterSheet/CharacterSheet';
import { useCharacter } from '../../../hooks/useCharacter/useCharacter';
import { useStories } from '../../../hooks/useStories/useStories';

type Props = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

export function Dashboard({ navigation }: Props): React.ReactElement {
	const [character] = useCharacter();

	const { decisions, updateDecisionsForCharacter } = useStories();
	useEffect(() => {
		updateDecisionsForCharacter(character);
	}, []);

	return (
		<View style={Styles.Wrapper}>
			<ScrollView style={Styles.Scroll}>
				<GameHeader
					illustrationLink={
						'https://cdnb.artstation.com/p/assets/images/images/002/987/601/large/mihail-bila-innsmouth-waterfront-small.jpg'
					}
					text={
						character.map.currentLocation + '/' + character.map.currentPlace
					}
				/>
				{decisions &&
					decisions.map(decision => (
						<DecisionCard
							key={decision.title}
							decision={decision}
							imageUri={
								'https://static.boredpanda.com/blog/wp-content/uploads/2015/04/cute-pet-rats-13__880.jpg'
							}
						/>
					))}
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
