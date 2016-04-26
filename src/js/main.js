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
	
					<Link to="/login"> Log In </Link>
					
					<Link to="/register"> Register </Link>

				</nav>
			</div>
		)
	}

}


