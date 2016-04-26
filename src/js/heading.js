// Javascript Entry Point
import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

export default class Heading extends Component {

	render(){
		return(
			<div className="heading">

				<h1>*****CabinFever*****</h1>
				
				<h1>*****MAIN PAGE*****</h1>
				
				{this.props.children}
				
				<footer>*****Footer*****</footer>
				
			</div>
		)
	}
}
