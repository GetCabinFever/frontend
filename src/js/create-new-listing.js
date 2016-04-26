// Javascript Entry Point
import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import SimpleSerialForm from 'react-simple-serial-form';
import Dropzone	from 'react-dropzone';

export default class CreateNewListing extends Component {

	constructor() {
		super();
		this.state={
			preview: 'http://www.martinezcreativegroup.com/wp-content/uploads/2014/05/img-placeholder.png',
			value: 2
		}
	}

	dropHandler([file]){
		console.log('file in drophandler', file);
		this.setState({
			preview: file.preview
		});
		this.file = file;
		console.log('file attached to this.file drophandler', this.file);
	}



	render(){
		return(
			<div className="form_page_wrapper">

				<div className="top_form_header"> 
					<h1>Fill Out the Forms Below</h1> 
					<h2>And Thank You For Your Contribution</h2>
				</div>

					<div className="lower_form_header">
						<ul>
							<li>Basics</li>
							<li>Description</li>
							<li>Location</li>
							<li>Ameneties</li>
							<li>Photos</li>
							<li>Home Safety</li>
							<li>Pricing</li>
							<li>Availability</li>
							<li>Booking</li>
						</ul>
					</div>

					<div className="ssf_wrapper">

						<SimpleSerialForm>

							<h3>Main Info</h3>

							<div className="title_input">
								<label>
									Title of Page
									<input type="text" name="title_of_page" />
								</label>
							</div>

							<div className="address_input">
								<label>
									Address
									<input type="text" name="address" />
								</label>
							</div>

							<div className="city_input">
								<label>
									City
									<input type="text" name="city" />
								</label>
							</div>

							<div className="state_input">
								<label>
									State
									<input type="text" name="state" />
								</label>
							</div>

							<div className="zip_input">
								<label>
									State
									<input type="text" name="zip" />
								</label>
							</div>

							<div className="description_textarea">
								<span>Description Of Listing</span>
								<textarea name="desctiption_of_listing"> 
									Paint a picture with words about your location. 
								</textarea>
							</div>

							<div className="email_input">
								<label>
									Best Contact Email
									<input type="email" name="email" />
								</label>
							</div>

							<div className="booking_url_input">
								<label>
									Direct Link To Book Space
									<input type="url" name="booking_url" />
								</label>
							</div>


							<h3>Property Info</h3>

							<Dropzone className="dropzone" onDrop={::this.dropHandler}>
								<label> Property Cover Photo </label>
								<input type="hidden" value={this.state.preview} name="image"/>
								<img className="dropzone-img" src={this.state.preview}/>
							</Dropzone> 

							<div className="accommodates-wrapper">

								<span> Accommodates </span>

								<select className="select-btn" name="accommodates">

									<option value={1}>1</option>
									<option value={2}>2</option>
									<option value={3}>3</option>
									<option value={4}>4</option>
									<option value={5}>5</option>
									<option value={6}>6</option>
									<option value={7}>7</option>
									<option value={8}>8+</option>

								</select>

							</div>

							<div className="bedrooms-wrapper">

								<span> Bedrooms </span>

								<select className="select-btn" name="bedrooms">

									<option value={1}>1</option>
									<option value={2}>2</option>
									<option value={3}>3</option>
									<option value={4}>4</option>
									<option value={5}>5</option>
									<option value={6}>6</option>
									<option value={7}>7</option>
									<option value={8}>8+</option>

								</select>

							</div>

							<div className="beds-wrapper">

								<span> Beds </span>

								<select className="select-btn" name="beds">

									<option value={1}>1</option>
									<option value={2}>2</option>
									<option value={3}>3</option>
									<option value={4}>4</option>
									<option value={5}>5</option>
									<option value={6}>6</option>
									<option value={7}>7</option>
									<option value={8}>8+</option>

								</select>

							</div>

							<div className="bathrooms-wrapper">

								<span> Bathrooms </span>

								<select className="select-btn" name="bathrooms">

									<option value={1}>1</option>
									<option value={2}>2</option>
									<option value={3}>3</option>
									<option value={4}>4</option>
									<option value={5}>5</option>
									<option value={6}>6</option>
									<option value={7}>7</option>
									<option value={8}>8+</option>

								</select>

							</div>

							<div className="check_in_input">
								<label>
									Check-In Time
									<input type="time" name="check_in_time" />
								</label>
							</div>

							<div className="check_out_input">
								<label>
									Check-Out Time
									<input type="time" name="check_out_time" />
								</label>
							</div>

							<div className="property_type_wrapper">

								<span> Property Type </span>

								<select className="select-btn" name="property_type">

									<option value={'Cabin'}>Cabin</option>
									<option value={'Cottage'}>Cotage</option>
									<option value={'House'}>House</option>
									<option value={'Apartment'}>Apartment</option>

								</select>

							</div>



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
					</div>

				<Link to="/dashboard">Cancel</Link>
			</div>
		)
	}

}
