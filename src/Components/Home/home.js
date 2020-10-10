import React from 'react';
import './home.css';
import { useState } from 'react';
import logo from '../../Assets/Images/HandsOn_logo.png';
// import login from '../Login/login';
// import logo from '../../Assets/Images/HandsOn_favicon.png';

import { axios } from 'axios';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
// import { browserHistory } from 'react-router';

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
				{/* <div>
					<Header />
				</div> */}
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

// const Header = () => {
// 	return <img class="logo" className="ui tiny image" src={logo} />;
// };

class LogIn extends React.Component {
	state = {
		showRegNgo: false,
		showRegVol: false,
		username: null,
		showLogIn: false
	};
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

	registerNgo = () => {
		return (
			<div id="registerNgo" class="ui card" style={{ width: '50%' }}>
				<form class="ui form">
					<div class="content">
						<div class="header">Please Register:</div>
					</div>
					<div class="field">
						<label>Username</label>
						<input type="text" name="username" placeholder="Username" />
					</div>
					<div class="field">
						<label>Password</label>
						<input type="Password" name="password" placeholder="Password" />
					</div>
					<div class="field">
						<label>Description</label>
						<input type="text" name="username" placeholder="Please add the description" />
					</div>
					<button class="ui button" type="submit">
						Register
					</button>
				</form>
			</div>
		);
	};

	registerVolunteer = () => {
		return (
			<div id="registerNgo" class="ui card" style={{ width: '50%' }}>
				<form class="ui form">
					<div class="content">
						<div class="header">Please Register:</div>
					</div>
					<div class="field">
						<label>Username</label>
						<input type="text" name="username" placeholder="Username" />
					</div>
					<div class="field">
						<label>Password</label>
						<input type="Password" name="password" placeholder="Password" />
					</div>
					<div class="field">
						<label>Description</label>
						<input type="text" name="username" placeholder="Please add the description" />
					</div>
					<button class="ui button" type="submit">
						Register
					</button>
				</form>
			</div>
		);
	};

	checkout = () => {
		// let result = await axios.get(`http://localhost:3002/findVolunteer`)
		// console.log(result)
		// browserHistory.push('/login');
		// if (this.state.username == 'Animal Shelter') {
		return (
			<div>
				<div class="ui secondary menu" />
				{console.log('check')}
			</div>
		);
		// }
	};
	render() {
		return (
			<div>
				<div
					id="logInCard"
					class="ui card"
					style={{
						width: '50%',
						display:
							this.state.showRegNgo == true ||
							this.state.showRegVol == true ||
							this.state.showLogIn == true
								? 'none'
								: 'block'
					}}
				>
					<form class="ui form" style={{ padding: '20px' }}>
						<div class="content">
							<div class="header">Log In</div>
						</div>
						<div class="field">
							<label class="labelName">Username</label>
							<input
								type="text"
								name="username"
								placeholder="Username"
								class="in"
								value={this.state.username}
								onChange={(e) =>
									this.setState({
										username: e.target.value
									})}
							/>
						</div>
						<div class="field">
							<label>Password</label>
							<input type="Password" class="in" name="password" placeholder="Password" />
						</div>
						<button
							class="ui button"
							// type="submit"
							onClick={() =>
								this.setState({
									showLogIn: true
								})}
						>
							Log In
						</button>
					</form>
					<div style={{ paddingTop: '100px' }}>
						<button
							id="registerBtn"
							class="small ui button"
							onClick={() =>
								this.setState({
									showRegNgo: true,
									showRegVol: false
								})}
						>
							Register as NGO
						</button>
						<button
							id="registerBtn"
							class="small ui button"
							onClick={() =>
								this.setState({
									showRegVol: true,
									showRegNgo: false
								})}
						>
							Register as volunteer
						</button>
					</div>
				</div>
				<div>{this.state.showLogIn == true ? this.checkout() : <div />}</div>
				<div>{this.state.showRegNgo == true ? this.registerNgo() : <div />}</div>
				<div>{this.state.showRegVol == true ? this.registerVolunteer() : <div />}</div>
			</div>
		);
	}
}

// class checkout extends React.Component{
// 	// let result = await axios.get(`http://localhost:3002/findVolunteer`)
// 	// console.log(result)
// 	// browserHistory.push('/login');
// 	if (this.state.username == 'Animal Shelter') {
// 		return (
// 			<div>
// 				<div class="ui secondary menu" />
// 			</div>
// 		);
// 	}
// 	render
// };

export default home;
