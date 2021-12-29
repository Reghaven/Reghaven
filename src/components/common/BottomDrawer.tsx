import React, { ReactElement, useRef, useState } from 'react';
import {
	Pressable,
	StyleSheet,
	Animated,
	Easing,
	Dimensions,
	View,
	Text,
} from 'react-native';

export function BottomDrawer(props: {
	children?: React.ReactElement | React.ReactElement[];
	title?: string;
}): ReactElement {
	const [open, setOpen] = useState(false);
	const height =
		Dimensions.get('window').height - Dimensions.get('window').height / 10;
	const slideAnim = useRef(new Animated.Value(height - 50)).current;

	function toggle() {
		setOpen(current => !current);
		Animated.timing(slideAnim, {
			toValue: open ? 0 : height - 50,
			duration: 500,
			useNativeDriver: true,
			easing: Easing.bounce,
		}).start();
	}

	return (
		<Animated.View
			style={[
				Styles.Wrapper,
				{
					height: height,
					translateY: slideAnim,
				},
			]}>
			<Pressable style={Styles.Toggler} onPress={toggle}>
				{props.title && <Text style={Styles.Text}>{props.title}</Text>}
			</Pressable>
			<View style={Styles.Content}>{props.children}</View>
		</Animated.View>
	);
}

const Styles = StyleSheet.create({
	Wrapper: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		backgroundColor: '#606060',
		alignItems: 'center',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
	Toggler: {
		height: 50,
		width: '100%',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},
	Content: {
		flexDirection: 'column',
		width: '100%',
		padding: 20,
		flex: 1,
	},
	Text: {
		fontSize: 26,
		fontFamily: 'TwinkleStar-Regular',
		color: 'white',
	},
});
