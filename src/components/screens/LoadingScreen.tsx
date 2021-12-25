import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export function LoadingScreen() {
	const navigation = useNavigation();

	return (
		<View style={Style.View}>
			<Text style={Style.Text}>Loading</Text>
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

		backgroundColor: '#000',
	},
	Text: {
		color: '#fff',
		fontSize: 30,
		fontFamily: 'TwinkleStar-Regular',
	},
});
