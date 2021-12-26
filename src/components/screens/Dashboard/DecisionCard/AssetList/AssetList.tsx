import { Decision, IAssetInstance } from 'lib-storyteller';
import React, { useState } from 'react';
import { Image, Modal, Pressable, StyleSheet, View, Text } from 'react-native';
import { RButton } from '../../../../common/RButton';

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
	const [visible, setVisible] = useState(false);

	return (
		<Pressable style={Styles.AssetIcon} onPress={() => setVisible(true)}>
			<Image style={Styles.AssetIconImage} source={{ uri: props.imageUri }} />
			<Modal
				animationType={'slide'}
				visible={visible}
				style={StylesModal.Modal}
				transparent>
				<View style={StylesModal.ModalWrapper}>
					<View style={StylesModal.ModalContent}>
						<Text style={StylesModal.Title}>{props.assetInstance[0].name}</Text>
						<Text style={StylesModal.Text}>
							Required: {props.assetInstance[1]}
						</Text>
						<RButton text={'Close'} onPress={() => setVisible(false)} />
					</View>
				</View>
			</Modal>
		</Pressable>
	);
}

const StylesModal = StyleSheet.create({
	Modal: {
		display: 'flex',
		alignContent: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#111',
	},
	ModalWrapper: {
		height: '100%',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		alignContent: 'center',
		backfaceVisibility: 'hidden',
	},
	ModalContent: {
		padding: 20,
		backgroundColor: '#303030',
		borderRadius: 16,
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#606060',
		shadowRadius: 1,
		shadowColor: 'black',
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.5,
	},
	Title: {
		color: 'white',
		fontSize: 30,
		fontFamily: 'TwinkleStar-Regular',
	},
	Text: {
		color: 'white',
		fontSize: 24,
		fontFamily: 'EBGaramond-VariableFont_wgth',
	},
});

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
