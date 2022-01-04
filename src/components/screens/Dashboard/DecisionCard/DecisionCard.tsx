import { Card } from '../../../common/Card';
import { CharacterController, Decision } from 'lib-storyteller';
import { View, Text, StyleSheet, Image, ToastAndroid } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { RButton } from '../../../common/RButton';
import { AssetList } from './AssetList/AssetList';
import { Placeholder } from '../../../common/Placeholder';
import { at } from 'lodash';

export function DecisionCard(props: {
	key?: string;
	decision: Decision;
	imageUri: string;
	onPressGo?: (decision: Decision) => unknown;
	attrPointsChar?: number;
}): React.ReactElement {
	const [probability, setProbability] = useState<number>(0);

	const calculateProbability = useCallback(() => {
		const attrPointsChar = props.attrPointsChar;
		const attrLevelDecision =
			props.decision.attribute?.attributeLevelFor100Percent;
		if (attrPointsChar && attrLevelDecision) {
			const characterLevel =
				CharacterController.calculateAttributeLevel(attrPointsChar);
			if (characterLevel >= attrLevelDecision) {
				setProbability(1.0);
				return;
			}
			setProbability(characterLevel / attrLevelDecision);
		}
	}, [props]);
	useEffect(() => calculateProbability(), [calculateProbability]);

	return (
		<Card>
			<View style={Styles.Wrapper}>
				<View style={Styles.Row}>
					<View style={Styles.ImageWrapper}>
						<Image source={{ uri: props.imageUri }} style={Styles.Image} />
					</View>
					<View style={Styles.TextWrapper}>
						<Text style={Styles.Title}>{props.decision.title}</Text>
						<Text style={Styles.Text}>{props.decision.text}</Text>
						<Placeholder height={20} />
						{props.decision.attribute && (
							<Text style={Styles.Text}>
								Attr: {props.decision.attribute.attributeToActivate} -{' '}
								{Math.floor(probability * 100)}%
							</Text>
						)}
					</View>
				</View>
				<View style={Styles.StretchedRow}>
					<AssetList decision={props.decision} />
					<RButton
						text={'Go'}
						onPress={() =>
							props.onPressGo ? props.onPressGo(props.decision) : undefined
						}
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
		alignContent: 'space-between',
		justifyContent: 'space-between',
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
	TextWrapper: {
		flex: 1,
	},
	Text: {
		color: 'white',
		fontFamily: 'EBGaramond-VariableFont_wght',
		fontSize: 20,
	},
	ImageWrapper: {
		marginLeft: 10,
		marginRight: 10,
	},
	Image: {
		height: 80,
		width: 80,
		borderRadius: 20,
	},
});
