import { Decision, IAssetInstance } from 'lib-storyteller';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

export function AssetList(props: { decision: Decision }): React.ReactElement {
	return (
		<View style={Styles.AttributeList}>
			{props.decision.conditionsToUse.characterHasAssets.map(assetInstance => (
				<AssetEntry
					key={assetInstance[0].name}
					assetInstance={assetInstance}
					imageUri={
						'https://i.pinimg.com/originals/bf/3a/fd/bf3afd9576212371897e10694c078855.jpg'
					}
				/>
			))}
		</View>
	);
}

function AssetEntry(props: {
	imageUri: string;
	assetInstance: IAssetInstance;
}): React.ReactElement {
	return (
		<Pressable style={Styles.AssetIcon}>
			<Image style={Styles.AssetIconImage} source={{ uri: props.imageUri }} />
		</Pressable>
	);
}

const Styles = StyleSheet.create({
	AssetIcon: {
		width: 50,
		height: 50,
		margin: 5,
	},
	AssetIconImage: {
		width: '100%',
		height: '100%',
		borderRadius: 10,
	},
	AttributeList: {
		display: 'flex',
		flexDirection: 'row',
	},
});
