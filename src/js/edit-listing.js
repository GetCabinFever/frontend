import React, { Component, PropTypes }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import SimpleSerialForm from 'react-simple-serial-form';
import Dropzone	from 'react-dropzone';
import Icon from './icon';
import { ajax } from 'jquery';

//is property.id being passed in here from ./all-properties-view? NO

//change properties of property object: image, property_type and title

// let property = {};
// let property = null;

export default class EditListing extends Component {


	constructor(...args){
		super(...args);
		this.state = {
			property: {property: property}
		}
	}



	render(){

		console.log('property obj param passed into edit-listing.js ====>', property)
		
		return(

			<div>
				<SimpleSerialForm onData={::this.dataHandler}>

					<div className="main-info-title">
						<label className="main-label">
							Title of Page<br/>
							<input className="form-inputs" type="text" name="title_of_page"  />
						</label>
					</div>

					<div className="description_of_listing">
						<span className="main-label">Description Of Listing</span><br/>
						<textarea className="form-textarea" name="description_of_listing" placeholder="Paint a picture with your words." > 
						</textarea>
					</div>

					<div className="email_input">
						<label className="main-label">
							Best Contact Email<br/>
							<input className="form-inputs" type="email" name="contact_host_email" />
						</label>
					</div>

				</SimpleSerialForm>
			</div>

		)
	}

}