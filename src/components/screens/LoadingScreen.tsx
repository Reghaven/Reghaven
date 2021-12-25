import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, ToastAndroid, View } from 'react-native';
import React from 'react';
import { RButton } from '../common/RButton';

export function LoadingScreen() {
	const navigation = useNavigation();

	function onFinishLoad() {
		ToastAndroid.show('done loading', 2000);
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
