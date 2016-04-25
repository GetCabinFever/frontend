// Javascript Entry Point
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link  } from 'react-router';

export default class Dashboard extends Component {

	render(){
		return(
			<div>
				<h3>*****Dashboard*****</h3>
				<h5>View: </h5>
				<button>Account</button>
				<button>Profile Information</button>
				<button>All Property Listings</button>
				<button>Contact Us</button>
				<Link to="/">Log Out</Link>
			</div>
		)
	}

}