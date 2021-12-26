import { Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/RootStackParamList';
import { GameHeader } from './GameHeader/GameHeader';

type Props = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

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
		</ScrollView>
	);
}

const Styles = StyleSheet.create({
	Wrapper: {
		backgroundColor: '#202020',
	},
});
