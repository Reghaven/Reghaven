import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

export function GameHeader(props: { illustrationLink: string; text: string }) {
	return (
		<View style={Styles.Wrapper}>
			<View style={Styles.Illustration}>
				<Image source={{ uri: props.illustrationLink }} style={Styles.Image} />
			</View>
			<View style={Styles.TextWrapper}>
				<Text style={Styles.Text}>{props.text}</Text>
			</View>
		</View>
	);
}

const Styles = StyleSheet.create({
	Wrapper: {
		backgroundColor: '#303030',
		shadowColor: 'black',
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.5,
		marginBottom: 10,
	},
	Illustration: {
		height: 150,
		width: '100%',
	},
	Image: {
		width: '100%',
		height: '100%',
		backgroundColor: 'black',
		resizeMode: 'cover',
	},
	TextWrapper: {
		padding: 20,
	},
	Text: {
		color: 'white',
		fontSize: 20,
		fontFamily: 'EBGaramond-VariableFont_wght',
	},
});
