import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import { ajax, ajaxSetup } from 'jquery';
import Heading from './heading';
import Main from './main';
import CreateNewListing from './create-new-listing';
import Dashboard from './dashboard';
import SimpleSerialForm from 'react-simple-serial-form';
import Cookies from 'js-cookie';

export default class LoginModal extends Component {

	dataHandler(loginInfo){
		ajax({
			url: 'https://cabinfever.herokuapp.com/login',
			type: 'POST',
			data: loginInfo,
			cache: false,
			dataType: 'json',
		}).then((response)=>{
			// successs
			console.log('login response--->', response);
			// if (response.user.email) {
				Cookies.set('currentUser', response.user.auth_token, {expires: 1});
				ajaxSetup({
					headers: { 'X-Auth-Token': response.user.auth_token }
				})
				console.log('auth-token--->', response.user.auth_token);
				hashHistory.push('/dashboard');
			// } else {
			// 	console.log('unsuccessful login--->', response);
			// 	// alert("Log-in failed. Please try again.");
			// 	// hashHistory.push('/');
			// }
		}).fail(error => {
			console.log('failed to log in');
		});
	}

	render(){
		return(
			    <div className="modal-back">
					<div className="modal">
						
						<SimpleSerialForm onData={::this.dataHandler}>
							<input type="email" 	name="email"      placeholder="Email"    />
							<input type="password"  name="password"   placeholder="Password" />
							<button>Log In</button>
						</SimpleSerialForm>

						<Link to="/">Cancel</Link>
					
					</div>
				</div>
		)	   
	}
}

// 'Auth-token'