import React from 'react';
// import logo from '../../assets/logo.svg';
import './App.css';
import { Switch, Route, withRouter, BrowserRouter } from 'react-router-dom';
// import { AnimatedSwitch } from 'react-router-transition';
import Hello from '../hello';
import World from '../world';
import Header from '../../component/header';

// const Header = (props) => {
// 	return (
// 		<div>
// 			<h1>App</h1>
// 			<ul>
// 				<li>
// 					<Link to="/hello">hello</Link>
// 				</li>
// 				<li>
// 					<Link to="/world">jumb from world to hello </Link>
// 				</li>
// 				<li>
// 					<Link to="/two">use render to render component </Link>
// 				</li>
// 				<li>
// 					<Link to="/world/2/wmq">world</Link>
// 				</li>
// 			</ul>
// 		</div>
// 	);
// };
const Content = (props) => {
	return <div className="content">I am default component</div>;
};
const Two = (props) => {
	return <div className="content">Two</div>;
};
const Main = withRouter((props) => {
	console.log(props);
	return (
		<div className="main">
			{/* <AnimatedSwitch> */}
			<Switch>
				{/* <Fade> */}

				<Route exact path="/" component={Content} />
				<Route exact path="/hello" component={Hello} />
				<Route path="/two" render={() => <Two />} />
				{/* 路由传递参数 */}
				{/* <Redirect exact from="/world" to="/hello" /> */}
				<Route exact path="/world/:id/:name" component={World} />
			</Switch>
			{/* </Fade> */}
			{/* </AnimatedSwitch> */}
		</div>
	);
});

// 导航确认功能
const getConfirmation = (message, callback) => {
	const allowTransition = window.confirm('leave');
	callback(allowTransition);
};

function App(props) {
	return (
		<div className="App">
			<BrowserRouter forceRefresh={false} getUserConfirmation={getConfirmation}>
				<Header />
				<Main />
			</BrowserRouter>
		</div>
	);
}

export default App;
