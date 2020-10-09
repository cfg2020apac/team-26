import React from 'react';
import './App.css';
import logo from './Assets/Images/HandsOn_favicon.png';
import Home from './Components/Home/home';

function App() {
	return (
		<div>
			{/* <Header/> */}
			<img class="ui tiny image" src={logo} />
			<Home />
		</div>
	);
}

export default App;
