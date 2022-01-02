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
		height: 50,
		borderRadius: 30,
		backgroundColor: 'transparent',
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		minWidth: 80,
		borderColor: 'white',
		borderStyle: 'solid',
		borderWidth: 1,
	},
	Text: {
		color: 'white',
		marginLeft: 10,
		marginRight: 10,
		fontSize: 30,
		fontFamily: 'TwinkleStar-Regular',
	},
});
