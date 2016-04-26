// Javascript Entry Point
import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import SimpleSerialForm from 'react-simple-serial-form';
import Dropzone	from 'react-dropzone';
import Icon from './icon';
import { ajax } from 'jquery';

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

	dataHandler(newRegister) {
		let data = new FormData();
		

		Object.keys(newRegister).forEach(key => {
			let val = newRegister[key];
			data.append(key, val);
		})

		// data.append('title_of_page', newRegister.title_of_page);
		// data.append('address', newRegister.address);
		// data.append('city', newRegister.city);
		// data.append('state', newRegister.state);
		// data.append('zip', newRegister.zip);
		// data.append('description_of_listing', newRegister.description_of_listing);
		// data.append('contact_host_email', newRegister.contact_host_email);
		// data.append('booking_url', newRegister.booking_url);
		// data.append('image', this.file);
		// data.append('accommodates', newRegister.accommodates);
		// data.append('bedrooms', newRegister.bedrooms);
		// data.append('beds', newRegister.beds);
		// data.append('bathrooms', newRegister.bathrooms);
		// data.append('check_in', newRegister.check_in);
		// data.append('check_out', newRegister.check_out);
		// data.append('property_type', newRegister.property_type);
		// data.append('house_rules', newRegister.house_rules);
		// // --------- ammeneties start ---------
		// data.append('kitchen', newRegister.kitchen);
		// data.append('internet', newRegister.internet);
		// data.append('tv', newRegister.tv);
		// data.append('essentials', newRegister.essentials);
		// data.append('shower_essentials', newRegister.shower_essentials);
		// data.append('heating', newRegister.heating);
		// data.append('airconditioning', newRegister.airconditioning);
		// data.append('washer', newRegister.washer);
		// data.append('dryer', newRegister.dryer);
		// data.append('dishwasher', newRegister.dishwasher);
		// data.append('free_parking', newRegister.free_parking);
		// data.append('cable', newRegister.cable);
		// data.append('satellite', newRegister.satellite);
		// data.append('pets', newRegister.pets);
		// data.append('kid_friendly', newRegister.kid_friendly);
		// data.append('events', newRegister.events);
		// data.append('smoking', newRegister.smoking);
		// data.append('wheelchair_accessible', newRegister.wheelchair_accessible);
		// data.append('elevator', newRegister.elevator);
		// data.append('fireplace', newRegister.fireplace);
		// data.append('intercom', newRegister.intercom);
		// data.append('doorman', newRegister.doorman);
		// data.append('pool', newRegister.pool);
		// data.append('hottub', newRegister.hottub);
		// data.append('gym', newRegister.gym);
		// data.append('hangers', newRegister.hangers);
		// data.append('iron', newRegister.iron);
		// data.append('hair_dryer', newRegister.hair_dryer);
		// data.append('workstation', newRegister.workstation);
		// data.append('billiards', newRegister.billiards);
		// // --------- ammeneties end ---------
		// data.append('the_space', newRegister.the_space);
		// data.append('guest_access', newRegister.guest_access);
		// data.append('interaction_with_guests', newRegister.interaction_with_guests);
		// data.append('interaction_with_guests', newRegister.interaction_with_guests);
		// data.append('the_area', newRegister.the_area);
		// data.append('other_things_to_note', newRegister.other_things_to_note);
		// data.append('base_price', newRegister.base_price);

		ajax({
			url: 'blah blah blah',
			type: 'POST',
			data: data, 
			cache: false,
			dataType: 'json',
			processData: false,
			contentType: false
		}).then ( response => { console.log(response)
		});
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

						<SimpleSerialForm onData={::this.dataHandler}>

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

							<div className="description_of_listing">
								<span>Description Of Listing</span>
								<textarea name="description_of_listing"> 
									Paint a picture with words about your location. 
								</textarea>
							</div>

							<div className="email_input">
								<label>
									Best Contact Email
									<input type="email" name="contact_host_email" />
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
									<input type="time" name="check_in" />
								</label>
							</div>

							<div className="check_out_input">
								<label>
									Check-Out Time
									<input type="time" name="check_out" />
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

								<div className="house_rules">
									<span>House Rules</span>
									<textarea name="house_rules"> 
										
									</textarea>
								</div>

							<div className="ameneties_wrapper">

								<h3> Ameneties </h3>

								<form action="">
									<input type="checkbox" name="kitchen" value="true"><Icon type="cutlery"/>Kitchen</input>
									<input type="checkbox" name="internet" value="true"><Icon type="wifi"/>Internet</input>
									<input type="checkbox" name="tv" value="true"><Icon type="television"/>Television</input>
									<input type="checkbox" name="essentials" value="true"><Icon type="star"/>Essentials</input>
									<input type="checkbox" name="shower_essentials" value="true"><Icon type="tint"/>Shower Essentials</input>
									<input type="checkbox" name="heating" value="true"><Icon type="fire"/>Heating</input>
									<input type="checkbox" name="airconditioning" value="true"><Icon type="refresh"/>Air Conditioning</input>
									<input type="checkbox" name="washer" value="true"><Icon type="square"/>Washer</input>
									<input type="checkbox" name="dryer" value="true"><Icon type="square-o"/>Dryer</input>
									<input type="checkbox" name="dishwasher" value="true"><Icon type="database"/>Dishwasher</input>
									<input type="checkbox" name="free_parking" value="true"><Icon type="hand-o-right"/>Free Parking</input>
									<input type="checkbox" name="cable" value="true"><Icon type="hdd-o"/>Cable</input>
									<input type="checkbox" name="satellite" value="true"><Icon type="hdd-o"/>Satellite</input>
									<input type="checkbox" name="breakfast" value="true"><Icon type="spoon"/>Breakfast</input>
									<input type="checkbox" name="pets" value="true"><Icon type="paw"/>Pets</input>
									<input type="checkbox" name="kid_friendly" value="true"><Icon type="child"/>Kid Friendly</input>
									<input type="checkbox" name="events" value="true"><Icon type="sun-o"/>Events</input>
									<input type="checkbox" name="smoking" value="true"><Icon type="ban"/>Smoking</input>
									<input type="checkbox" name="wheelchair_accessible" value="true"><Icon type="wheelchair"/>Wheelchair Accessible</input>
									<input type="checkbox" name="elevator" value="true"><Icon type="building-o"/>Elevator</input>
									<input type="checkbox" name="fireplace" value="true"><Icon type="home"/>Fireplace</input>
									<input type="checkbox" name="intercom" value="true"><Icon type="circle-o"/>Intercom</input>
									<input type="checkbox" name="doorman" value="true"><Icon type="bell"/>Doorman</input>
									<input type="checkbox" name="pool" value="true"><Icon type="life-ring"/>Pool</input>
									<input type="checkbox" name="hottub" value="true"><Icon type="heart-o"/>Hot Tub</input>
									<input type="checkbox" name="gym" value="true"><Icon type="futbol-o"/>Gym</input>
									<input type="checkbox" name="hangers" value="true"><Icon type="filter"/>Hangers</input>
									<input type="checkbox" name="iron" value="true"><Icon type="eject"/>Iron</input>
									<input type="checkbox" name="hair_dryer" value="true"><Icon type="cloud"/>Hair Dryer</input>
									<input type="checkbox" name="workstation" value="true"><Icon type="briefcase"/>Workstation</input>
									<input type="checkbox" name="billiards" value="true"><Icon type="circle"/>Billiards</input>
									<input type="checkbox" name="billiards" value="true"><Icon type="circle"/>Billiards</input>
									</form>

							</div>

							<div className="description_of_area">

								<h3> Description of Area </h3>

								<div className="description_of_space">
									<span>Description Of The Space</span>
									<textarea name="the_space"> 
										
									</textarea>
								</div>

								<div className="guest_access">
									<span>Guest Access Instructions</span>
									<textarea name="guest_access"> 
										
									</textarea>
								</div>

								<div className="interaction_with_guests">
									<span>Interaction With Guests</span>
									<textarea name="interaction_with_guests"> 
										
									</textarea>
								</div>

								<div className="the_area">
									<span>What's going on in the area?</span>
									<textarea name="the_area"> 
										
									</textarea>
								</div>

								<div className="other_things_to_note">
									<span>Other Things To Note</span>
									<textarea name="other_things_to_note"> 
										
									</textarea>
								</div>


								<div className="base_price">
									<label>
										Base Price
										<input type="text" name="base_price" />
									</label>
								</div>

							</div>

							<button>Submit</button>

						</SimpleSerialForm>
					</div>

				<Link to="/dashboard">Cancel</Link>
			</div>
		)
	}

}
