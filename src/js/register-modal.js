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
import Dropzone from 'react-dropzone';

export default class RegisterModal extends Component {
	constructor(){
		super();
		this.state = {
			preview: 'http://ecx.images-amazon.com/images/I/81mQERthQjL._SL1500_.jpg'
		}
	}

	dataHandler(data){
		console.log('data', data);

		let register = new FormData();

		register.append('first_name', data.first_name);
		register.append('last_name', data.last_name);
		register.append('address', data.address);
		register.append('city', data.city);
		register.append('state', data.state);
		register.append('zip', data.zip);
		register.append('email', data.email);
		register.append('phone', data.phone);
		register.append('dob', data.dob);
		register.append('password', data.password);
		register.append('avatar', this.file);

		console.log('formdata----->', FormData);

		ajax({
			url: 'https://cabinfever.herokuapp.com/register',
			type: 'POST',
			data: register,
			cache: false,
			dataType: 'json',
			processData: false,
			contentType: false
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

	dropHandler([file]){
		console.log(file);
		this.setState({ preview: file.preview });
		this.file=file;

		console.log("file", this.file);
	}

	onBack(){
		hashHistory.push('/')
	}

	render(){
		// console.log( )
		return(
			<div>
				<SimpleSerialForm onData={::this.dataHandler}>
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

					<Dropzone onDrop={ ::this.dropHandler } >
						<img src={ this.state.preview } height='200px' width='200px' />
						<input type='hidden' name='avatar' value= { this.state } />
					</Dropzone>

					<button>Register</button>
				</SimpleSerialForm>

				<button onClick={this.onBack}>Cancel</button>
			</div>
		)
	}
}