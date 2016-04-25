// Javascript Entry Point
import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

export default class Heading extends Component {

	render(){
		return(
			<div>
				<h1>Cabin Fever Heading</h1>
				{this.props.children}
				<footer>Footer</footer>
			</div>
		)
	}

}
