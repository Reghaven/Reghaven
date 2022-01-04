import React from 'react';
import { StyleSheet, Text } from 'react-native';

export enum TitleType {
	Primary,
	Secondary,
	Tertiary,
}

export function Title(props: {
	text: string;
	size: number;
}): React.ReactElement {
	return (
		<Text
			style={[
				Styles.Text,
				{
					fontSize: ((): number => {
						switch (props.size) {
							case TitleType.Primary:
								return 28;
							case TitleType.Secondary:
								return 24;
							case TitleType.Tertiary:
								return 20;
							default:
								return 28;
						}
					})(),
					textAlign: props.size === TitleType.Primary ? 'center' : 'left',
				},
			]}>
			{props.text}
		</Text>
	);
}

const Styles = StyleSheet.create({
	Text: {
		color: 'white',
		fontFamily: 'TwinkleStar-Regular',
		fontSize: 28,
		marginBottom: 10,
	},
});
