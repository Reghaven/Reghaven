import React from 'react';
import { Character } from 'lib-storyteller';
import { StyleSheet, ScrollView } from 'react-native';
import { Title, TitleType } from '../../../common/Title';
import { AttributeBox } from './Attribute/Attribute';
import { Placeholder } from '../../../common/Placeholder';
import { AssetBoxList } from './AssetBox/AssetBoxList';

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
			<Placeholder height={20} />

			{/* asset list */}
			<Title text={'Posessions'} size={TitleType.Secondary} />
			<AssetBoxList
				assetInstances={Array.from(props.character.assets).map(
					asset => asset[1],
				)}
			/>
			<Placeholder height={20} />
		</ScrollView>
	);
}

const Styles = StyleSheet.create({
	Wrapper: {},
});
