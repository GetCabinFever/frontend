// Javascript Entry Point
import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import SimpleSerialForm from 'react-simple-serial-form';

export default class CreateNewListing extends Component {

	render(){
		return(
			<div>
				<SimpleSerialForm>
					<label>
						Property Type
						<input type="text" />
					</label>

					<label>
						Bedrooms
						<input type="text" />
					</label>

					<label>
						Bathrooms
						<input type="text" />
					</label>

					<label>
						Other Features
						<input type="text" />
					</label>

					<label>
						Zip Code
						<input type="text" />
					</label>

					<label>
						Pets
						<input type="text" />
					</label>

					<label>
						Other Notes
						<input type="text" />
					</label>

					<Link to="/dashboard">Create New Listing</Link>
				</SimpleSerialForm>

				<Link to="/dashboard">Cancel</Link>
			</div>
		)
	}

}