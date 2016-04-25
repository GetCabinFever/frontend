// Javascript Entry Point
import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import SimpleSerialForm from 'react-simple-serial-form';

export default class Main extends Component {

	render(){
		return(
			<div className="main">
				<nav>
					
					<SimpleSerialForm>
						<h3>Log In</h3>

					</SimpleSerialForm>
					
					<h3>Register</h3>
					<Link to="/create-new-listing">Create New Listing</Link>
					<h3>About</h3>
				</nav>
			</div>
		)
	}

}


