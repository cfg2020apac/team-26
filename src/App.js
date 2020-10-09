import React from 'react';
import './App.css';
import logo from './Assets/Images/HandsOn_favicon.png';
import Home from './Components/Home/home';
import {Router, Route} from 'react-router'
// import login from './Components/Login'

function App() {
	return (
		<div>
			{/* <Header/> */}
			{/* <Router >
				<Route exact path='/login' component={login} />
			</Router> */}
			<img className="ui tiny image" src={logo} />
			<Home />
		</div>
	);
}

export default App;
