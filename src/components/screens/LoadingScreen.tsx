import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import React from 'react';

export function LoadingScreen() {
	const navigation = useNavigation();

	return (
		<View>
			<Text>Loading</Text>
		</View>
	);
}
