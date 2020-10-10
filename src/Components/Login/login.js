import React from 'react';
import '../Home/home.css';
import { useState } from 'react';
import logo from '../../Assets/Images/HandsOn_logo.png';
// import login from '../Login/login';
import axios from 'axios';

var count = 0;
class home extends React.Component {
	state = {
		showInfo: false,
		getVolunteers: false
	};

	showVolunteers = () => {
		// count= count + 1
		// if(count == 1){
		// this.setState({
		// 	getVolunteers: true
		// })
		// axios.post('http://localhost:3002/findVolunteer',
		// {
		// 	interest: 'dog shelter'
		// })
		// .then(function (resp){
		// 	console.log(resp)
		// }).catch(e=>{
		// 	console.log(e)
		// })
		// console.log(result)
		return (
			<div>
				<div class="ui card" style={{ marginLeft: '25%', width: '50%' }}>
					<div class="content">
						<div class="header" style={{ color: 'white' }}>
							Volunteers
						</div>
						<table class="ui celled table">
							<thead>
								<tr>
									<th>Choose</th>
									<th>Name</th>
									<th>Age</th>
									<th>Interest</th>
									<th>Email</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<input type="checkbox" name="james" />
									</td>
									<td data-label="Name">James</td>
									<td data-label="Age">24</td>
									<td data-label="Interest">Animal Shelter</td>
									<td data-label="Email">james1@gmail.com</td>
								</tr>
								<tr>
									<td>
										<input type="checkbox" name="james" />
									</td>
									<td data-label="Name">Jill</td>
									<td data-label="Age">26</td>
									<td data-label="Interest">Environment</td>
									<td data-label="Email">jill11@gmail.com</td>
								</tr>
								<tr>
									<td>
										<input type="checkbox" name="james" />
									</td>
									<td data-label="Name">Elyse</td>
									<td data-label="Age">24</td>
									<td data-label="Interest">IT</td>
									<td data-label="Email">elyse12@gmail.com</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div style={{ width: '50%', marginLeft: '25%' }}>
					<button className="ui small button">Add to event</button>
				</div>
			</div>
		);
		// }
	};

	details = () => {
		return (
			<div>
				<div class="ui card" style={{ width: '50%', marginLeft: '25%' }}>
					<div class="content">
						<div class="header" id="prof">
							Profile
						</div>
					</div>
					<div class="content">
						<h4 class="ui sub header" style={{ color: 'white' }}>
							Activity
						</h4>
						<div class="ui small feed">
							<div class="event">
								<div class="content">
									<div class="summary">John Doe</div>
								</div>
							</div>
							<div class="event">
								<div class="content">
									<div class="summary">
										Expertise: <span style={{ color: 'blue' }}>Animal Shelter</span>
									</div>
								</div>
							</div>
							<div class="event">
								<div class="content">
									<div class="summary" />
								</div>
							</div>
						</div>
					</div>
					<div class="extra content">
						<button class="ui button">Join Project</button>
					</div>
				</div>
			</div>
		);
	};

	render() {
		return (
			<div>
				<div class="ui secondary  menu">
					<div class="item">Home</div>
					<div class="item">Schedule</div>

					<div
						class=" active item"
						onClick={() =>
							this.setState({
								showInfo: true,
								getVolunteers: false
							})}
					>
						Profile
					</div>
					<div
						class="item"
						onClick={() =>
							//this.showVolunteers()
							this.setState({
								getVolunteers: true,
								showInfo: false
							})}
					>
						Get Volunteers
					</div>
					<div class="item">
						<div class="ui icon input">
							<input type="text" placeholder="Search..." />
							<i class="search link icon" />
						</div>
					</div>
					<div class="right menu">
						{/* <div className='ui dropdown'>
						<div class='text'>Drop</div>
						<div c></div>
					</div> */}
						<div class="item">Log Out</div>
					</div>
				</div>
				<div>{this.state.getVolunteers == true ? this.showVolunteers() : <div />}</div>
				<div>{this.state.showInfo == true ? this.details() : <div />}</div>
			</div>
		);
	}
}

export default home;
