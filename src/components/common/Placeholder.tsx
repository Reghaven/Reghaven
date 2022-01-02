import { View } from 'react-native';
import React from 'react';

export function Placeholder(props: {
	height?: number;
	width?: number;
}): React.ReactElement {
	return (
		<View
			style={{
				height: props.height || 0,
				width: props.width || 0,
			}}
		/>
	);
}
