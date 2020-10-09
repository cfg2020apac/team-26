import React from 'react';
import './home.css';
import { useState } from 'react';
import logo from '../../Assets/Images/HandsOn_logo.png';
// import login from '../Login/login';

class home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hideImg: false
		};
	}

	render() {
		return (
			<div>
				<img
					id="logo"
					src={logo}
					alt=""
					class="ui large image"
					style={{ display: this.state.hideImg == true ? 'none' : 'block' }}
				/>
				<div class="Enter" style={{ display: this.state.hideImg == true ? 'none' : 'block' }}>
					<button
						class="ui secondary button"
						class="massive ui button"
						class="Enter_button"
						onClick={() =>
							this.setState({
								hideImg: true
							})}
					>
						Enter
					</button>
				</div>
				{this.state.hideImg == true ? <LogIn /> : <div />}
			</div>
		);
	}
}

class LogIn extends React.Component {
	// login = () => {
	// 	return (
	// 		<div>
	// 			<form class="ui form">
	// 				<div class="field">
	// 					<label>First Name</label>
	// 					<input type="text" name="first-name" placeholder="First Name" />
	// 				</div>
	// 				<div class="field">
	// 					<label>Last Name</label>
	// 					<input type="text" name="last-name" placeholder="Last Name" />
	// 				</div>
	// 				<div class="field">
	// 					<div class="ui checkbox">
	// 						<input type="checkbox" tabindex="0" class="hidden" />
	// 						<label>I agree to the Terms and Conditions</label>
	// 					</div>
	// 				</div>
	// 				<button class="ui button" type="submit">
	// 					Submit
	// 				</button>
	// 			</form>
	// 		</div>
	// 	);
	// };

	render() {
		return (
			<div>
				<div id="logInCard" class="ui card" style={{ width: '50%' }}>
					<form class="ui form">
						<div class="content">
							<div class="header">Log In</div>
						</div>
						<div class="field">
							<label>Username</label>
							<input type="text" name="username" placeholder="Username" />
						</div>
						<div class="field">
							<label>Password</label>
							<input type="Password" name="password" placeholder="Password" />
						</div>
						<button class="ui button" type="submit">
							Log In
						</button>
					</form>
					<div>
						<button id="registerBtn" class="small ui button">
							Register as NGO{' '}
						</button>
						<button id="registerBtn" class="small ui button">
							Register as volunteer{' '}
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default home;
