import React, { Component } from 'react';
import { hashHistory, Link } from 'react-router';
import SimpleSerialForm from 'react-simple-serial-form';
import Dropzone	from 'react-dropzone';

export default class GuestBook extends Component {

	render() {
		
		return (

			<div className="dropzone-wrapper">

				<Dropzone className="dropzone" onDrop={::this.dropHandler}>
					<label className="main-label"> Property Photo <br/> </label>
					<input type="hidden" value={this.state.preview} name="image"/>
					<img className="dropzone-img" src={this.state.preview}/>
				</Dropzone> 

			</div>

		);
	}
}