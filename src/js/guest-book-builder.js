import React, { Component } from 'react';
import { hashHistory, Link } from 'react-router';
import SimpleSerialForm from 'react-simple-serial-form';
import Dropzone	from 'react-dropzone';
import { ajax } from 'jquery';

export default class GuestBookBuilder extends Component {

	constructor(){
		super();
		this.state = {
			preview: 'http://www.martinezcreativegroup.com/wp-content/uploads/2014/05/img-placeholder.png'
		}
	}

	dropHandler([file]){
		this.setState({
			preview: file.preview
		})
		this.file = file;
	}

	dataHandler(gbdata){
		let data = new FormData();
		console.log('gbdata', gbdata);

		data.append('image', this.file);
		data.append('entry', gbdata.entry);

		ajax({
			url: `https://cabinfever.herokuapp.com/residences/${this.props.params.residence_id}/guest_books`,
			type: 'POST',
			data: data,
			cache: false,
			dataType: 'json',
			processData: false,
			contentType: false
		}).then ( response => {
			console.log('response before hashpush', response)
			hashHistory.push(`/generate_new/${response.guest_book.residence_id}`)
		})

	}

	render() {
		
		return (

			<SimpleSerialForm onData={::this.dataHandler}>
			<div className="gb-form-wrapper">

				<Dropzone className="dropzone" onDrop={::this.dropHandler}>
					<label className="main-label"> Guest Book Photo <br/> </label>
					<input type="hidden" value={this.state.preview} name="image"/>
					<img className="dropzone-img" src={this.state.preview}/>
				</Dropzone> 


				<div className="gb_note">
					<span className="main-label">Guest Book Entry</span><br/>
					<textarea className="form-textarea" name="entry" placeholder="Thank the host with some kind words."> 
						
					</textarea>
				</div>
				<button className="save-btn-gb">Save</button>
			</div>
			</SimpleSerialForm>
		);
	}
}