import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import SimpleSerialForm from 'react-simple-serial-form';
import Dropzone	from 'react-dropzone';
import Icon from './icon';
import { ajax } from 'jquery';

export default class EditListing extends Component {

	render(){
		return(

			<div>
				<SimpleSerialForm onData={::this.dataHandler}>

					<div className="main-info-title">
						<label className="main-label">
							Title of Page<br/>
							<input className="form-inputs" type="text" name="title_of_page" defaultValue={  } />
						</label>
					</div>

					<div className="description_of_listing">
						<span className="main-label">Description Of Listing</span><br/>
						<textarea className="form-textarea" name="description_of_listing" placeholder="Paint a picture with your words." defaultValue={  }> 
						</textarea>
					</div>

					<div className="email_input">
						<label className="main-label">
							Best Contact Email<br/>
							<input className="form-inputs" type="email" name="contact_host_email" defaultValue={  }/>
						</label>
					</div>

				</SimpleSerialForm>
			</div>

		)
	}

}