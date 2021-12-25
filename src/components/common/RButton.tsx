import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';

export function RButton(props: {
	text: string;
	onPress: () => unknown;
}): React.ReactElement {
	return (
		<Pressable onPress={props.onPress} style={styles.Button}>
			<Text style={styles.Text}>{props.text}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	Button: {
		height: 60,
		borderRadius: 30,
		backgroundColor: '#fff',
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		minWidth: 100,
	},
	Text: {
		color: '#000',
		marginLeft: 20,
		marginRight: 20,
		fontSize: 30,
		fontFamily: 'TwinkleStar-Regular',
	},
});
