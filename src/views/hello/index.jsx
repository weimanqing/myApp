import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// 组件化样式
const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`;
function Hello() {
	const [ count, setCount ] = useState(0);
	useEffect(
		() => {
			return () => {
				// effect;
				document.title = count;
			};
		}
		// [ count ]
	);
	const addCount = () => {
		setCount(count + 1);
	};
	return (
		<div>
			<Title>You clicked {count} times</Title>
			<button
				onClick={() => {
					addCount();
				}}
			>
				Click me
			</button>
		</div>
	);
}

export default Hello;
