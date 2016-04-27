import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { ajax, ajaxSetup } from 'jquery';
import Cookies from 'js-cookie';
import Heading from './heading';
import Main from './main';
import CreateNewListing from './create-new-listing';
import Dashboard from './dashboard';
import SimpleSerialForm from 'react-simple-serial-form';

export default class RegisterModal extends Component {
	
	// var currentUser = null;

	dataHandler(data){
		console.log('data', data);
		ajax({
			url: 'https://cabinfever.herokuapp.com/register',
			type: 'POST',
			data: data,
			cache: false,
			dataType: 'json',
			// processData: false,
			// contentType: false
		}).then( (response) => {
			console.log('register response--->', response);
			// if (response.email) { 
				Cookies.set('currentUser', response.auth_token, { expires: 1 });
				ajaxSetup({
					headers: { 'X-Auth-Token': response.auth_token }
				})
				// console.log('currentUser cookies--->', currentUser);
				hashHistory.push('/dashboard');
			// } else {
			// 	hashHistory.push('/');
			}).fail(error => {
				alert("Register failed. Check that all information is entered correctly.")
				hashHistory.push('/');
			});
		};

	onBack(){
		hashHistory.push('/')
	}

	render(){
		return(
			<div>
				<SimpleSerialForm onData={this.dataHandler}>
					<input type="text"     name="first_name" placeholder="First name"                   />
					<input type="text"     name="last_name"  placeholder="Last name"                    />
					<input type="text"     name="address"    placeholder="Street"                       />
					<input type="text"     name="city"       placeholder="City"                         />
					<input type="text"     name="state"      placeholder="State ex. GA"                 />
					<input type="text"     name="zip"        placeholder="ZIP ex. 30303"                />
					<input type="email"    name="email"      placeholder="Email ex. cabin404@gmail.com" />
					<input type="tel"      name="phone"      placeholder="Phone number"                 />
					<input type="date"     name="dob"        placeholder=" "                            />
					<input type="password" name="password"   placeholder="Password"                     />

					<button>Register</button>
				</SimpleSerialForm>

				<button onClick={this.onBack}>Cancel</button>
			</div>
		)
	}
}