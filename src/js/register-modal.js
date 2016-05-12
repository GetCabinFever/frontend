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
			preview: 'http://www.martinezcreativegroup.com/wp-content/uploads/2014/05/img-placeholder.png'
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
			<div className='main'>

				<div className='main-hero-img' id='main-hero-img-reg'>

				  <div className="login-dark-bg"></div>
	

					<div  className="register-form-div" id='register-form'>


						<SimpleSerialForm onData={::this.dataHandler}>

							<div id='title register'>
							<h1>Register New User</h1>
							</div>

							<div>
							<input className="reg-inputs" type="text"     name="first_name" placeholder="First name"                   />
							</div>

							<div>
							<input className="reg-inputs" type="text"     name="last_name"  placeholder="Last name"                    />
							</div>

							<div>
							<input className="reg-inputs" type="text"     name="address"    placeholder="Street"                       />
							</div>

							<div>
							<input className="reg-inputs" type="text"     name="city"       placeholder="City"                         />
							</div>

							<div>
							<input className="reg-inputs" type="text"     name="state"      placeholder="State"                 />
							</div>

							<div>
							<input className="reg-inputs" type="text"     name="zip"        placeholder="ZIP"                />
							</div>

							<div>
							<input className="reg-inputs" type="email"    name="email"      placeholder="Email" />
							</div>

							<div>
							<input className="reg-inputs" type="tel"      name="phone"      placeholder="Phone number"                 />
							</div>

							<div>
							<input className="reg-inputs" type="date"     name="dob"        placeholder=" "                            />
							</div>

							<div>
							<input className="reg-inputs" type="password" name="password"   placeholder="Password"                     />
							</div>

							<div id='dropzone-img'>
							<Dropzone onDrop={ ::this.dropHandler } >
								<img src={ this.state.preview } height='200px' width='200px' />
								<input type='hidden' name='avatar' value= { this.state } />
							</Dropzone>
							</div>

							<div>
							<button className='button-regular' id='reg-page'>Register</button>
							</div>
						</SimpleSerialForm>

						
					</div>

				</div>

				<div className='aboutme-top-register'></div>

			</div>
		)
	}
}
//****************Remove Cancel Button***********************
//<div>
//<button onClick={this.onBack} className='button-regular' id='reg-page'>Cancel</button>
//</div>







