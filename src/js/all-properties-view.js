import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ajax } from 'jquery';


 // loose function
export default class AllPropertiesView extends Component {
	
	// constructor - this.state = { properties: [] }

	componentWillMount(){
		ajax({
			url: 'https://cabinfever.herokuapp.com/user/dashboard',
			type: 'GET',
			cache: false,
			dataType: 'json',
			// processData: false,
			// contentType: false
		}).then( response => {
			console.log('response===>', response) 
			// this.setState // to new array from response
		});
	}

	// makeListing(){x=>x}

	getProperty(propertDetails) {
		// just use the details you want
	}

	render(){
		// this.state.properties.map( ::this.getProperty  )
		return (
			<h1>hello</h1>
		)
	}

}

// <div> { this.getCabins.map(::this.makeListing) } </div>