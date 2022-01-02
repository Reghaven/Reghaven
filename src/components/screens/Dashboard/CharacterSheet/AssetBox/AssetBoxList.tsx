import React, { ReactElement } from 'react';
import { IAssetInstance } from 'lib-storyteller';
import { StyleSheet, View } from 'react-native';
import { AssetBox } from './AssetBox';

export function AssetBoxList(props: {
	assetInstances: IAssetInstance[];
}): ReactElement {
	return (
		<View style={Styles.List}>
			{props.assetInstances.map(asset => (
				<AssetBox key={asset[0].name} assetInstance={asset} />
			))}
		</View>
	);
}

const Styles = StyleSheet.create({
	List: {
		flexDirection: 'column',
	},
});
