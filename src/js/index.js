// Javascript Entry Point
import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Heading from './heading';
import Main from './main';
import CreateNewListing from './create-new-listing';
import Dashboard from './dashboard';
import RegisterModal from './register-modal';
import LoginModal from './login-modal';
import GenerateNew from './generate_new';

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={Heading}>
			<IndexRoute component={Main} />
			<Route path="/register" component={RegisterModal} />
			<Route path="/login" component={LoginModal} />
			<Route path="/create-new-listing" component={CreateNewListing} />
			<Route path="/dashboard" component={Dashboard} />
			<Route path="/generate_new/:cabininfo" component={GenerateNew} />
		</Route>
	</Router>
	), document.querySelector('.app'));
