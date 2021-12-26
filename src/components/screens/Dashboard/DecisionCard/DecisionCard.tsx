import { Card } from '../../../common/Card';
import { Decision } from 'lib-storyteller';
import { View, Text, StyleSheet, Image, ToastAndroid } from 'react-native';
import React from 'react';
import { RButton } from '../../../common/RButton';
import { AssetList } from './AssetList/AssetList';

export function DecisionCard(props: {
	decision: Decision;
	imageUri: string;
}): React.ReactElement {
	return (
		<Card>
			<View style={Styles.Wrapper}>
				<View style={Styles.Row}>
					<View>
						<Image source={{ uri: props.imageUri }} style={Styles.Image} />
					</View>
					<View>
						<Text style={Styles.Title}>{props.decision.title}</Text>
						<Text style={Styles.Text}>{props.decision.text}</Text>
						{props.decision.attribute && (
							<Text style={Styles.Text}>
								Attribute: {props.decision.attribute.attributeToActivate}
							</Text>
						)}
					</View>
				</View>
				<View style={Styles.StretchedRow}>
					<AssetList decision={props.decision} />
					<RButton
						text={'Go'}
						onPress={() => {
							ToastAndroid.show('Selected Decision', 1000);
						}}
					/>
				</View>
			</View>
		</Card>
	);
}

const Styles = StyleSheet.create({
	Wrapper: {
		display: 'flex',
		flexDirection: 'column',
	},
	Row: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-start',
		alignContent: 'flex-start',
		justifyContent: 'flex-start',
		marginBottom: 10,
	},
	StretchedRow: {
		display: 'flex',
		flexDirection: 'row',
		alignContent: 'space-between',
		justifyContent: 'space-between',
		marginBottom: 10,
	},
	Title: {
		color: 'white',
		fontFamily: 'TwinkleStar-Regular',
		fontSize: 20,
	},
	Text: {
		color: 'white',
		fontFamily: 'EBGaramond-VariableFont_wght',
		fontSize: 20,
		width: '50%',
	},
	Image: {
		height: 100,
		width: 100,
		marginLeft: 10,
		marginRight: 10,
		borderRadius: 20,
	},
});
