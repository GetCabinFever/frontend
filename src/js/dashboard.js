// Javascript Entry Point
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ajaxSetup from 'jquery';
import { Router, Route, hashHistory, IndexRoute, Link  } from 'react-router';
import Cookies from 'js-cookie';
import AllPropertiesView from './all-properties-view';

let currentUser;

export default class Dashboard extends Component {

	logoutHandler(){
		Cookies.remove('currentUser');
		ajaxSetup({
			headers: { 'auth-token': ' ' }
		});
		hashHistory.push('/');
	}

	render(){
		return(
			<div>
				<h3>*****Dashboard*****</h3>
				<Link to="/create-new-listing">Create New Listing</Link>
				<AllPropertiesView/>
				<h5>View: </h5>
				<button>Account</button>
				<button>Profile Information</button>
				<button>All Property Listings</button>
				<button>Contact Us</button>
				<button onClick={::this.logoutHandler}>Log Out</button>
			</div>
		)
	}

}