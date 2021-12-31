import React from 'react';
import { Character } from 'lib-storyteller';
import { StyleSheet, ScrollView } from 'react-native';
import { Title, TitleType } from '../../../common/Title';
import { AttributeBox } from './Attribute/Attribute';

export function CharacterSheet(props: {
	character: Character;
}): React.ReactElement {
	return (
		<ScrollView style={Styles.Wrapper}>
			<Title text={props.character.name} size={TitleType.Primary} />

			{/* attribute list */}
			<Title text={'Attributes'} size={TitleType.Secondary} />
			{Array.from(props.character.attributes).map(attribute => (
				<AttributeBox key={attribute[0]} attribute={attribute[1]} />
			))}
		</ScrollView>
	);
}

const Styles = StyleSheet.create({
	Wrapper: {},
});
