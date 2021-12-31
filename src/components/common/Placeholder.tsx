import { View } from 'react-native';
import React from 'react';

export function Placeholder(props: { height: number }): React.ReactElement {
	return (
		<View
			style={{
				height: props.height,
			}}
		/>
	);
}
