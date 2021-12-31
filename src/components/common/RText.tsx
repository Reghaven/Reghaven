import React from 'react';
import { StyleSheet, Text } from 'react-native';

export function RText(props: {
	children: string | number;
}): React.ReactElement {
	return <Text style={Styles.Text}>{props.children}</Text>;
}

const Styles = StyleSheet.create({
	Text: {
		color: 'white',
		fontFamily: 'EBGaramond-VariableFont_wght',
		fontSize: 20,
	},
});
