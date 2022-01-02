import React from 'react';
import { IAssetInstance } from 'lib-storyteller';
import { Image, StyleSheet, View } from 'react-native';
import { RText } from '../../../../common/RText';
import { Placeholder } from '../../../../common/Placeholder';

export function AssetBox(props: {
	assetInstance: IAssetInstance;
}): React.ReactElement {
	return (
		<View style={Styles.Wrapper}>
			<View
				style={{
					elevation: 10,
				}}>
				<Image
					style={Styles.Icon}
					source={{ uri: 'https://picsum.photos/200' }}
				/>
			</View>

			<View style={Styles.TextWrapper}>
				<RText fontSize={16}>{props.assetInstance[0].name}</RText>
				<Placeholder width={10} />
				<RText fontSize={16} color={'#BBB'}>
					{'(' + props.assetInstance[1] + ')'}
				</RText>
			</View>
		</View>
	);
}

const Styles = StyleSheet.create({
	Wrapper: {
		height: 40,
		width: '50%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		marginBottom: 20,
	},
	Icon: {
		height: 40,
		width: 40,
		borderRadius: 4,
	},
	TextWrapper: {
		marginLeft: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		alignContent: 'center',
	},
});
