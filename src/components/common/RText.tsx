import React from 'react';
import { StyleSheet, Text } from 'react-native';

export function RText(props: {
	children: string | number;
	fontSize?: number;
	color?: string;
}): React.ReactElement {
	return (
		<Text
			style={[
				Styles.Text,
				{
					fontSize: props.fontSize || 20,
					color: props.color || 'white',
				},
			]}>
			{props.children}
		</Text>
	);
}

const Styles = StyleSheet.create({
	Text: {
		fontFamily: 'EBGaramond-VariableFont_wght',
	},
});
