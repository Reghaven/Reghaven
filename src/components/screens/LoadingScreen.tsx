import { StyleSheet, Text, ToastAndroid, View } from 'react-native';
import React from 'react';
import { RButton } from '../common/RButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/RootStackParamList';

type Props = NativeStackScreenProps<RootStackParamList, 'LoadingScreen'>;

export function LoadingScreen({ navigation }: Props) {
	function onFinishLoad() {
		ToastAndroid.show('done loading', 2000);
		navigation.navigate('Dashboard');
	}

	return (
		<View style={Style.View}>
			<Text style={Style.Text}>Loading</Text>
			<RButton text={'Go'} onPress={onFinishLoad} />
		</View>
	);
}

const Style = StyleSheet.create({
	View: {
		display: 'flex',
		flexDirection: 'column',
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',

		backgroundColor: '#202020',
	},
	Text: {
		color: '#fff',
		fontSize: 30,
		fontFamily: 'TwinkleStar-Regular',
	},
});
