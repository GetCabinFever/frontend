import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { ajax, ajaxSetup } from 'jquery';
import Heading from './heading';
import Main from './main';
import CreateNewListing from './create-new-listing';
import Dashboard from './dashboard';
import SimpleSerialForm from 'react-simple-serial-form';

export default class LoginModal extends Component {

	//Declares the user to be on the logged in page
	let currentUser = null;

	dataHandler(){

		ajax({
			url: ' B A C K - E N D  U R L ',
			type: 'POST',
			data: user,
			cache: false,
			dataType: 'json',
		}).then((resp)=>{

			console.log('response', resp);
			console.log('user email', resp.email);

			if (resp.email){
				currentUser = resp.email;
				const password = resp.password;

				ajaxSetup({

					headers: {
						'Auth-token': currentUser.auth_token;
					}

				})

			}else{
				hashHistory.push('/');
				console.log('unsuccessful login', resp);
			}
		})

	}

	render(){
		return(
			<div>
				<SimpleSerialForm onData={this.dataHandler}>
					<input value="email" placeholder="Email" />
					<input value="password" placeholder="Password" />
					<button>Log In</button>
				</SimpleSerialForm>

				<button onClick={this.onBack}>Cancel</button>
			</div>
		)
	}
}