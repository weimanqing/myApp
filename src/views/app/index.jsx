import React from 'react';
import './styles.module.less';
import { Switch, Route, withRouter, BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../../routes';

// import { AnimatedSwitch } from 'react-router-transition';
import Hello from '../hello';
import World from '../world';
import Header from '../../component/header';

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

// function App(props) {
// 	return (
// 		<div className="App">
// 			<BrowserRouter forceRefresh={false} getUserConfirmation={getConfirmation}>
// 				<Header />
// 				<Main />
// 			</BrowserRouter>
// 		</div>
// 	);
// }

class App extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			username: 'wmq'
		};
	}
	render() {
		console.log(routes);
		return (
			<div className="App">
				<BrowserRouter forceRefresh={false} getUserConfirmation={getConfirmation}>
					<Header />
					{/* <Main /> */}
					{renderRoutes(routes)}
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
