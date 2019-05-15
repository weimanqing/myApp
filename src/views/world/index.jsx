import React, { useState, useEffect } from 'react';
const divStyle = {
	color: 'blue',
	fontSize: 20,
	WebkitTransition: 'all',
	msTransition: 'all'
};
function World(props) {
	console.log('----World--', props);
	// const [ world, setWorld ] = useState('world');
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
		<div style={divStyle}>
			<h1>world----</h1>
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
