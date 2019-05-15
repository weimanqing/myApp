import React, { useState, useEffect } from 'react';
import './style.module.less';
const divStyle = {
	color: 'blue',
	fontSize: 20,
	WebkitTransition: 'all',
	msTransition: 'all'
};
function World(props) {
	console.log('----World--', props.match);
	console.log('routeer---');
	const [ name, setName ] = useState(props.match.params.name);
	const [ count, setCount ] = useState(0);

	useEffect(() => {
		return () => {
			// effect;
			document.title = `world ${count}`;
		};
	});
	const addCount = () => {
		setCount(count + 1);
	};
	return (
		// <div style={divStyle}>
		<div>
			<h1>hello {name} world</h1>
			<p>You clicked {count} times</p>
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

export default World;
