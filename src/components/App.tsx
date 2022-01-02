/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoadingScreen } from './screens/LoadingScreen/LoadingScreen';
import { Dashboard } from './screens/Dashboard/Dashboard';
import { DecisionResults } from './screens/DecisionResults/DecisionResults';

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name={'Loading'}
					component={LoadingScreen}
					options={{
						title: 'Loading',
						headerShown: false,
						statusBarHidden: true,
					}}
				/>
				<Stack.Screen
					name={'Dashboard'}
					component={Dashboard}
					options={{ title: 'Dashboard', headerShown: false }}
				/>
				<Stack.Screen
					name={'Results'}
					component={DecisionResults}
					options={{ title: 'Results', headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
