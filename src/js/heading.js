// Javascript Entry Point
import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';

export default class Heading extends Component {

	render(){
		return(
			<div className="heading">

			<Link to="/"><div className="home-logo"></div></Link>
				
				<input className="search-bar" type="text" placeholder="Search | Cabin Fever"/>
				
				{this.props.children}
			</div>
		)
	}
}
