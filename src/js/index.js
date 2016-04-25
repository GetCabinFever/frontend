// Javascript Entry Point
import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Heading from './heading';
import Main from './main';
import CreateNewListing from './create-new-listing';
import Dashboard from './dashboard';

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={Heading} >
			<IndexRoute component={Main} />
			<Route path="/create-new-listing" component={CreateNewListing} />
			<Route path="/dashboard" component={Dashboard} />
		</Route>
	</Router>
	), document.querySelector('.app'));
