import React from 'react';
import { StyleSheet, View } from 'react-native';

export function Card(props: {
	children: React.ReactElement | React.ReactElement[];
}) {
	return <View style={Styles.Wrapper}>{props.children}</View>;
}

const Styles = StyleSheet.create({
	Wrapper: {
		minHeight: 50,
		backgroundColor: '#303030',
		margin: 20,
		marginBottom: 10,
		marginTop: 10,
		padding: 10,
		borderRadius: 16,
		borderColor: '#505050',
		borderStyle: 'solid',
		borderWidth: 1,
		shadowOffset: { width: 1, height: 1 },
		shadowColor: 'black',
		shadowRadius: 1,
	},
});
