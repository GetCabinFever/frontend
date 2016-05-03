import React, { Component } from 'react';
import { ajax } from 'jquery';

export default allPropertiesView extends Component {
			//LOGIC
			
			//this component injects property listings into the user dashboard
			
			//make an ajax call to GET residence by ID
			
			//create a list item for the property

			//append new property to the component

			//last step: inject component into Dashboard

	//retrieve all residences
	getCabins(){
		ajax({
			url: 'https://cabinfever.herokuapp.com/residences/:id    request all cabins by USER (email) in this get',
			type: 'GET';
			data: data,
			cache: false,
			dataType: 'json',
			// processData: false,
			// contentType: false
		}).then( response => {
			console.log(response) 
		)}
	}

	//create a listing for each residence
	makeListing(cabin){
		return (
			<div>
				<li>{ cabin .... N A M E }</li>
				<li>{ cabin . . . P I C }</li>
			</div>
		)
	}

	render(){
		return (
			<div> { getCabins.map(::this.makeListing) } </div>
		)
	}

}