import React from 'react';
import { Attribute, CharacterController } from 'lib-storyteller';
import { View, StyleSheet } from 'react-native';
import { RText } from '../../../../common/RText';
import { CircledNumber } from '../../../../common/CircledNumber';

export function AttributeBox(props: {
	attribute: Attribute;
}): React.ReactElement {
	return (
		<View style={Styles.Wrapper}>
			<CircledNumber>
				{CharacterController.calculateAttributeLevel(
					props.attribute.pointsCollected,
				)}
			</CircledNumber>
			<RText>{props.attribute.name}</RText>
		</View>
	);
}

const Styles = StyleSheet.create({
	Wrapper: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignContent: 'center',
		alignItems: 'center',
	},
});
