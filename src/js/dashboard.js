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
				<div className='dash-background'>
					<div className='title'>
						<h1> My Dashboard </h1>
					</div>

					<AllPropertiesView/>

					<div className='center-me'>
						<Link to='/create-new-listing' className='new-listing' id='link'> 
							Create New Listing 
						</Link>
					</div>

					<button onClick={::this.logoutHandler} className='button-regular'>Log Out</button>
				</div>

				<div className='aboutme-top-dash'></div>
			</div>
		)
	}

}