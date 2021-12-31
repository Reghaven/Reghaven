import React from 'react';
import { Character } from 'lib-storyteller';
import { StyleSheet, ScrollView } from 'react-native';
import { Title, TitleType } from '../../../common/Title';

export function CharacterSheet(props: {
	character: Character;
}): React.ReactElement {
	return (
		<ScrollView style={Styles.Wrapper}>
			<Title text={props.character.name} size={TitleType.Primary} />
		</ScrollView>
	);
}

const Styles = StyleSheet.create({
	Wrapper: {
		backgroundColor: 'red',
	},
});
