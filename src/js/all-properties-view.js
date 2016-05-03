import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ajax } from 'jquery';

export default class AllPropertiesView extends Component {
	constructor(...args){
		super(...args);
		this.state = { properties: [] }
	}

	componentWillMount(){
		ajax({
			url: 'https://cabinfever.herokuapp.com/user/dashboard',
			type: 'GET',
			cache: false,
			dataType: 'json',
			// processData: false,
			// contentType: false
		}).then( response => {
			console.log('residences response===>', response.residences) 
			this.setState( {properties: response.residences});
			// this.setState // to new array from response
		});
	}

	createResults(response){
		return(
			<div className='cabin'>
				<div>{ response.title_of_page }</div>
				<div>{ response.image_file_name }</div>
				<div>{ response.user_id }</div>
			</div>
		)
	}

	render(){
		// this.state.properties.map( ::this.getProperty  )
		return (
			<div>
				<h1>halooooooooooo</h1>
				<div>{ this.state.properties.map(::this.createResults) }</div>
			</div>
		)
	}

}