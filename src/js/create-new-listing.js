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
		}
	}

	dropHandler([file]){
		// console.log('file in drophandler', file);
		this.setState({
			preview: file.preview
		});
		this.file = file;
		// console.log('file attached to this.file drophandler', this.file);
	}

	dataHandler(newRegister) {
		let data = new FormData();

		Object.keys(newRegister).forEach(key => {
			let val = newRegister[key];
			data.append(key, val);
			data.append('image', this.file);
		})


		ajax({
			url: 'https://cabinfever.herokuapp.com/residences',
			type: 'POST',
			data: data, 
			cache: false,
			// header: {"auth_token", Cookies.auth_token},
			dataType: 'json',
			processData: false,
			contentType: false
		}).then ( response => { 
			hashHistory.push(`/generate_new/${response.residence.id}`)
		});
	}


	render(){
		return(
			<div className="form_page_wrapper">

					<div className="lower_form_header">
						<ul className="nav-ul">
							<li className="nav-li">Main Info</li>
						</ul>
					</div>

					<div className="ssf_wrapper">

						<SimpleSerialForm onData={::this.dataHandler}>

							<div className="main-info-div">

								<div className="main-info-div-paralax">

									<div className="main-info-title">
										<label className="main-label">
											Title of Page<br/>
											<input className="form-inputs" type="text" name="title_of_page" />
										</label>
									</div>

									<div className="address_input">
										<label className="main-label">
											Address<br/>
											<input className="form-inputs" type="text" name="address" />
										</label>
									</div>

									<div className="city_input">
										<label className="main-label">
											City<br/>
											<input className="form-inputs" type="text" name="city" />
										</label>
									</div>

									<div className="state_input">
										<label className="main-label">
											State<br/>
											<input className="form-inputs" type="text" name="state" />
										</label>
									</div>

									<div className="zip_input">
										<label className="main-label">
											Zip Code<br/>
											<input className="form-inputs" type="text" name="zip" />
										</label>
									</div>

								</div>

								<div className="main-info-right">

									<div className="description_of_listing">
										<span className="main-label">Description Of Listing</span><br/>
										<textarea className="form-textarea" name="description_of_listing" placeholder="Paint a picture with your words."> 
											
										</textarea>
									</div>

									<div className="email_input">
										<label className="main-label">
											Best Contact Email<br/>
											<input className="form-inputs" type="email" name="contact_host_email" />
										</label>
									</div>

									<div className="booking_url_input">
										<label className="main-label">
											Direct Link To Book Space<br/>
											<input className="form-inputs" type="url" name="booking_url" />
										</label>
									</div>

								</div>

							</div>

									<div className="lower_form_header">
										<ul className="nav-ul">
											<li className="nav-li">Property Info</li>
										</ul>
									</div>

							<div className="property-wrapper">

								<div className="property-div-paralax">

									<div className="left-side-property">

										<div className="dropzone-wrapper">

											<Dropzone className="dropzone" onDrop={::this.dropHandler}>
												<label className="main-label"> Property Photo <br/> </label>
												<input type="hidden" value={this.state.preview} name="image"/>
												<img className="dropzone-img" src={this.state.preview}/>
											</Dropzone> 

										</div>

										<div className="accommodates-wrapper">

											<span className="main-label"> Accommodates<br/> </span>

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

											<span className="main-label"> Bedrooms<br/> </span>

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

											<span className="main-label"> Beds<br/> </span>

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

									</div>

									<div className="right-side-property">

										<div className="bathrooms-wrapper">

											<span className="main-label"> Bathrooms<br/> </span>

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
											<label className="main-label">
												Check-In Time<br/>
												<input className="select-btn" type="time" name="check_in" />
											</label>
										</div>

										<div className="check_out_input">
											<label className="main-label">
												Check-Out Time<br/>
												<input className="select-btn" type="time" name="check_out" />
											</label>
										</div>

										<div className="property_type_wrapper">

											<span className="main-label"> Property Type<br/> </span>

											<select className="select-btn" name="property_type">

												<option value={'Cabin'}>Cabin</option>
												<option value={'Cottage'}>Cottage</option>
												<option value={'House'}>House</option>
												<option value={'Apartment'}>Apartment</option>

											</select>

										</div>

										<div className="house_rules">
											<span className="main-label">House Rules<br/></span>
											<textarea className="rules-textarea" name="house_rules" defaultValue="How do they take care of the space?"> 
											</textarea>
										</div>

									</div>

								</div>

							</div>

								<div className="lower_form_header">
									<ul className="nav-ul">
										<li className="nav-li">Amenities</li>
									</ul>
								</div>

							<div className="ameneties_wrapper">

								<div className="main-list-wrapper">
										<label>
											<input type="checkbox" name="kitchen" value="true"/><Icon type="cutlery"/>Kitchen
										</label>

										<label>
											<input type="checkbox" name="internet" value="true"/><Icon type="wifi"/>Internet 
										</label>

										<label>
										<input type="checkbox" name="tv" value="true"/><Icon type="television"/>Television 
										</label>

										<label>
										<input type="checkbox" name="essentials" value="true"/><Icon type="star"/>Essentials
										</label>

										<label>
										<input type="checkbox" name="shower_essentials" value="true"/><Icon type="tint"/>Shower Essentials 
										</label>

										<label>
										<input type="checkbox" name="heating" value="true"/><Icon type="fire"/>Heating 
										</label>

										<label>
										<input type="checkbox" name="airconditioning" value="true"/><Icon type="refresh"/>Air Conditioning 
										</label>

										<label>
										<input type="checkbox" name="washer" value="true"/><Icon type="square"/>Washer 
										</label>

										<label>
										<input type="checkbox" name="dryer" value="true"/><Icon type="square-o"/>Dryer 
										</label>

										<label>
										<input type="checkbox" name="dishwasher" value="true"/><Icon type="database"/>Dishwasher 
										</label>

										<label>
										<input type="checkbox" name="free_parking" value="true"/><Icon type="hand-o-right"/>Free Parking 
										</label>

										<label>
										<input type="checkbox" name="cable" value="true"/><Icon type="hdd-o"/>Cable 
										</label>

										<label>
										<input type="checkbox" name="satellite" value="true"/><Icon type="hdd-o"/>Satellite
										</label>

										<label>
										<input type="checkbox" name="breakfast" value="true"/><Icon type="spoon"/>Breakfast 
										</label>

										<label>
										<input type="checkbox" name="pets" value="true"/><Icon type="paw"/>Pets
										</label>

										<label>
										<input type="checkbox" name="kid_friendly" value="true"/><Icon type="child"/>Kid Friendly 
										</label>

										<label>
										<input type="checkbox" name="events" value="true"/><Icon type="sun-o"/>Events 
										</label>

										<label>
										<input type="checkbox" name="smoking" value="true"/><Icon type="ban"/>Smoking
										</label>

										<label>
										<input type="checkbox" name="wheelchair_accessible" value="true"/><Icon type="wheelchair"/>Wheelchair Accessible 
										</label>

										<label>
										<input type="checkbox" name="elevator" value="true"/><Icon type="building-o"/>Elevator 
										</label>

										<label>
										<input type="checkbox" name="fireplace" value="true"/><Icon type="home"/>Fireplace 
										</label>

										<label>
										<input type="checkbox" name="intercom" value="true"/><Icon type="circle-o"/>Intercom 
										</label>

										<label>
										<input type="checkbox" name="doorman" value="true"/><Icon type="bell"/>Doorman 
										</label>

										<label>
										<input type="checkbox" name="pool" value="true"/><Icon type="life-ring"/>Pool 
										</label>

										<label>
										<input type="checkbox" name="hottub" value="true"/><Icon type="heart-o"/>Hot Tub 
										</label>

										<label>
										<input type="checkbox" name="gym" value="true"/><Icon type="futbol-o"/>Gym 
										</label>

										<label>
										<input type="checkbox" name="hangers" value="true"/><Icon type="filter"/>Hangers 
										</label>

										<label>
										<input type="checkbox" name="iron" value="true"/><Icon type="eject"/> Iron
										</label>

										<label>
										<input type="checkbox" name="hair_dryer" value="true"/><Icon type="cloud"/>Hair Dryer 
										</label>

										<label>
										<input type="checkbox" name="workstation" value="true"/><Icon type="briefcase"/>Workstation 
										</label>

										<label>
										<input type="checkbox" name="billiards" value="true"/><Icon type="circle"/>Billiards 
										</label>
						
								</div>

							</div>

								<div className="lower_form_header">
									<ul className="nav-ul">
										<li className="nav-li">Description Of Area</li>
									</ul>
								</div>

							<div className="description_of_area">

								<div className="description_of_space">
									<span>Description Of The Space</span>
									<textarea name="the_space" defaultValue="What is it like to be there?"> 
										
									</textarea>
								</div>

								<div className="guest_access">
									<span>Guest Access Instructions</span>
									<textarea name="guest_access" defaultValue="How do your guests get in the space?"> 
										
									</textarea>
								</div>

								<div className="interaction_with_guests">
									<span>Interaction With Guests</span>
									<textarea name="interaction_with_guests" defaultValue="Will you interact with your guests?"> 
										
									</textarea>
								</div>

								<div className="the_area">
									<span>What's going on in the area?</span>
									<textarea name="the_area" defaultValue="Any recommendations?"> 
										
									</textarea>
								</div>

								<div className="other_things_to_note">
									<span>Other Things To Note</span>
									<textarea name="other_things_to_note" defaultValue="Safety Notes, Special Instructions, A nice message"> 
										
									</textarea>
								</div>


								<div className="base_price">
									<label>
										Base Price
										<input type="number" name="base_price" />
									</label>
								</div>


							</div>

							<button type="submit">Submit</button>

						</SimpleSerialForm>
					</div>

				<Link to="/dashboard">Cancel</Link>
			</div>
		)
	}

}


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




