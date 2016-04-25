// Javascript Entry Point
import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';

export default class Main extends Component {

	render(){
		return(
			<div className="main">
				<nav>
					<h3>Log In</h3>
					<h3>Register</h3>
					<Link to="/create-new-listing">Create New Listing</Link>
					<h3>About</h3>
				</nav>
			</div>
		)
	}

}