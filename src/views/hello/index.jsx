import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './styles.module.less';
import { testStore } from '@store/todo/index';

// 组件化样式
const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`;
function Hello() {
	const [ count, setCount ] = useState(0);
	testStore();
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
		<div className="hello">
			<Title>You clicked {count} times</Title>
			<p className="ctx">use less </p>
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
