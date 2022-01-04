import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card } from '../../common/Card';
import { Title, TitleType } from '../../common/Title';
import { RButton } from '../../common/RButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/RootStackParamList';
import { RText } from '../../common/RText';
import { Placeholder } from '../../common/Placeholder';

type Props = NativeStackScreenProps<RootStackParamList, 'Results'>;

export function DecisionResults({
	navigation,
	route,
}: Props): React.ReactElement {
	const { decision } = route.params;

	return (
		<ScrollView style={Styles.Background}>
			<Card>
				<Title text={'Results'} size={TitleType.Primary} />
				<Title text={decision.title} size={TitleType.Secondary} />
				<RText>{decision.text}</RText>
				<Placeholder height={20} />
				<RButton text={'Okay'} onPress={() => navigation.goBack()} />
			</Card>
		</ScrollView>
	);
}

const Styles = StyleSheet.create({
	Background: {
		backgroundColor: '#202020',
	},
});
