import React from 'react';
import { RText } from './RText';
import { StyleSheet, View } from 'react-native';

export function CircledNumber(props: { children: number }): React.ReactElement {
	return (
		<View style={Styles.View}>
			<RText>{props.children}</RText>
		</View>
	);
}

const Styles = StyleSheet.create({
	View: {
		backgroundColor: 'black',
		height: 40,
		width: 40,
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		borderRadius: 10,
		margin: 5,
	},
});
