import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { ajax } from 'jquery';
import Heading from './heading';
import Main from './main';
import CreateNewListing from './create-new-listing';
import Dashboard from './dashboard';
import SimpleSerialForm from 'react-simple-serial-form';


export default class RegisterModal extends Component {
	
	dataHandler(data){
		console.log('data', data);
		ajax({
			url: 'https://www.cabinfever.herokuapp.com/register',
			type: 'POST',
			data: data,
			cache: false,
			dataType: 'json',
			processData: false,
			contentType: false
		}).then( (resp) => {
			
			console.log('response', resp);
			
			if (resp.email) { 
				hashHistory.push('/dashboard');
			} else {
				hashHistory.push('/');
			}
		})
	}

	onBack(){
		hashHistory.push('/')
	}

	render(){
		return(
			<div>
				<SimpleSerialForm onData={this.dataHandler}>
					<input type="text" name="first-name" placeholder="First name" />
					<input type="text" name="last-name" placeholder="Last name" />
					<input type="text" name="street-address" placeholder="Street" />
					<input type="text" name="city" placeholder="City" />
					<input type="text" name="state" placeholder="State ex. GA" />
					<input type="text" name="zip" placeholder="ZIP ex. 30303" />
					<input type="email" name="email" placeholder="Email ex. cabin404@gmail.com" />
					<input type="tel" name="phone" placeholder="Phone number" />
					<input type="date" name="dob" />
					<input type="password" name="password" placeholder="Password" />

					<button>Register</button>
				</SimpleSerialForm>

				<button onClick={this.onBack}>Cancel</button>
			</div>
		)
	}
}