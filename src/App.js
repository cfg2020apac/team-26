import React from 'react';
import './App.css';
import logo from './Assets/Images/HandsOn_favicon.png';
import Home from './Components/Home/home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import login from './Components/Login/login';

function App() {
	return (
		<div>
			<img class="logo" className="ui tiny image" src={logo} />;
			<div>
				<Router>
					<div>
						<Switch>
							<Route path="/" component={Home} />
							<Route path="/login" component={login} />
						</Switch>
					</div>
				</Router>
				{/* <Home /> */}
			</div>
		</div>
	);
}

export default App;
