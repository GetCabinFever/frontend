import React, { Component, PropTypes }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import { ajax } from 'jquery';
import Icon from './icon';

export default class GenerateNew extends Component {
	constructor(...props){
		super(...props);
		this.state={ cabininfo:{},
			loading: true  
		};
	}

	componentWillMount(){
		let { cabininfo } = this.props.params;
		// console.log(this.props.params)
		ajax(`https://cabinfever.herokuapp.com/residences/${cabininfo}`).then(cabininfo => { 
			// console.log(data);

			this.setState({cabininfo, loading: false});
		})
	}

	renderPage(){
		let { cabininfo } = this.state;
		console.log('cabininfo.residence ===>', cabininfo.residence);
		// console.log('cabininfo.residence.bathrooms ===>', cabininfo.residence.bathrooms);

		console.log('kitchen', cabininfo.amenities.kitchen);

		return (

			<div>
				<div className="top">

					<div className="hero-image">
						<img src={cabininfo.image_url}/>
					</div>

					<div className="title">
						<h1>{cabininfo.residence.title_of_page}</h1>
					</div>

					<div className="property-description">
						<p>{cabininfo.residence.description_of_listing}</p>
					</div>

					<div className="property-link">
						<a target="_blank" href={cabininfo.residence.booking_url}>Click Here To Book This Destination</a>
					</div>	


				</div>
				
				<div className="middle">

					<h3>Basic Property Info</h3>

					<h4> Base Price: {cabininfo.residence.base_price} </h4>

					<div className="basic-property-info">
						<ul>
							<li> Property Type: {cabininfo.residence.property_type} </li>
							<li> Accomodates: {cabininfo.residence.accommodates} </li>
							<li> Bedrooms: {cabininfo.residence.bedrooms} </li>
							<li> Beds: {cabininfo.residence.beds} </li>
							<li> Bathrooms: {cabininfo.residence.bathrooms} </li>
						</ul>
					</div>

					<div className="schedule-info">
						<ul>
							<li> Check-In Time: {cabininfo.residence.check_in} </li>
							<li> Check-Out Time: {cabininfo.residence.check_out} </li>
							<li> House Rules: {cabininfo.residence.house_rules} </li>
						</ul>
					</div>


					<div className="amenities">
						<h3> Amenities </h3>
							<ul>
								<li className={cabininfo.amenities.kitchen}><Icon type="cutlery"/>Kitchen</li>
								<li className={cabininfo.amenities.internet}><Icon type="wifi"/>Internet</li>
								<li className={cabininfo.amenities.tv}><Icon type="television"/>Television</li>
								<li className={cabininfo.amenities.essentials}><Icon type="star"/>Essentials</li>
								<li className={cabininfo.amenities.shower_essentials}><Icon type="tint"/>Shower Essentials</li>
								<li className={cabininfo.amenities.heating}><Icon type="fire"/>Heating</li>
								<li className={cabininfo.amenities.airconditioning}><Icon type="refresh"/>Air Conditioning</li>
								<li className={cabininfo.amenities.washer}><Icon type="square"/>Washer</li>
								<li className={cabininfo.amenities.dryer}><Icon type="square-o"/>Dryer</li>
								<li className={cabininfo.amenities.dishwasher}><Icon type="database"/>Dishwasher</li>
								<li className={cabininfo.amenities.free_parking}><Icon type="hand-o-right"/>Free Parking</li>
								<li className={cabininfo.amenities.cable}><Icon type="hdd-o"/>Cable</li>
								<li className={cabininfo.amenities.satellite}><Icon type="hdd-o"/>Satellite</li>
								<li className={cabininfo.amenities.breakfast}><Icon type="spoon"/>Breakfast</li>
								<li className={cabininfo.amenities.pets}><Icon type="paw"/>Pets</li>
								<li className={cabininfo.amenities.kid_friendly}><Icon type="child"/>Kid Friendly</li>
								<li className={cabininfo.amenities.events} ><Icon type="sun-o"/>Events</li>
								<li className={cabininfo.amenities.smoking}><Icon type="ban"/>Smoking</li>
								<li className={cabininfo.amenities.wheelchair_accessible}><Icon type="wheelchair"/>Wheelchair Accessible</li>
								<li className={cabininfo.amenities.elevator}><Icon type="building-o"/>Elevator</li>
								<li className={cabininfo.amenities.fireplace}><Icon type="home"/>Fireplace</li>
								<li className={cabininfo.amenities.intercom}><Icon type="circle-o"/>Intercom</li>
								<li className={cabininfo.amenities.doorman}><Icon type="bell"/>Doorman</li>
								<li className={cabininfo.amenities.pool}><Icon type="life-ring"/>Pool</li>
								<li className={cabininfo.amenities.hottub}><Icon type="heart-o"/>Hot Tub</li>
								<li className={cabininfo.amenities.gym}><Icon type="futbol-o"/>Gym</li>
								<li className={cabininfo.amenities.hangers}><Icon type="filter"/>Hangers</li>
								<li className={cabininfo.amenities.iron}><Icon type="eject"/> Iron</li>
								<li className={cabininfo.amenities.hair_dryer}><Icon type="cloud"/>Hair Dryer</li>
								<li className={cabininfo.amenities.workstation}><Icon type="briefcase"/>Workstation</li>
								<li className={cabininfo.amenities.billiards}><Icon type="circle"/>Billiards</li>
							</ul>
					</div>

					<h4> Description Of Area </h4>

					<div className="gen_description_area">
						<p>Description Of The Space: {cabininfo.residence.the_space}</p>
					</div>					

					<div className="gen_guest_instructions">
						<p>Guest Access Instructions: {cabininfo.residence.guest_access}</p>
					</div>					

					<div className="gen_interaction_guest">
						<p>Interaction With Guests: {cabininfo.residence.interaction_with_guests}</p>
					</div>					

					<div className="gen_the_area">
						<p>What's Going On In The Area? {cabininfo.residence.the_area}</p>
					</div>					

					<div className="gen_other_things_note">
						<p>Other Things To Note {cabininfo.residence.other_things_to_note}</p>
					</div>



				</div>

				<div className="bottom">

					<div className="host-image">
						<img src={cabininfo.avatar_url}/>
					</div>

					<div className="host-name">
						<h5>{cabininfo.owner.first_name}</h5>
						<h5>{cabininfo.owner.last_name}</h5>
					</div>

					<div className="host-email">
						<h5>{cabininfo.residence.contact_host_email}</h5>
					</div>

					<div className="host-address">
						<h5>{cabininfo.residence.address}</h5>
						<h5>{cabininfo.residence.city}</h5>
						<h5>{cabininfo.residence.state}</h5>
						<h5>{cabininfo.residence.zip}</h5>
					</div>

					<div className="guestbook">
					</div>


				</div>

			</div>
		);
	}

	

renderLoading(){
	return (<div className="generate_loading"></div>)
}

	render() {
		let { loading } = this.state;
		return loading ? this.renderLoading() : this.renderPage()
	}
}

