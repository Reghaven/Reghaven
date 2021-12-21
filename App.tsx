/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Component, ComponentType, ReactElement} from 'react';
import {
	StyleSheet,
	Text,
	useColorScheme,
	View,
} from 'react-native';

import {NavigationContainer, useNavigation} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export function LoadingScreen() {
	const navigation = useNavigation();
	
	return (
		<View>
			<Text>Loading</Text>
		</View>
	);
}

const App = () => {
	const isDarkMode = useColorScheme() === 'dark';

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen 
					name={'Loading'} 
					component={LoadingScreen}
					options={{title: 'Loading'}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
