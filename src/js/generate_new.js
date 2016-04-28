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
						<a href={cabininfo.residence.booking_url}> Click here to book your ideal destination</a>
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

					<div className="amenities">
						<h3> Amenities </h3>
							<ul>
								<li value={cabininfo.amenities.kitchen}><Icon type="cutlery"/>Kitchen</li>
								<li value={cabininfo.amenities.internet}><Icon type="wifi"/>Internet</li>
								<li value={cabininfo.amenities.tv}><Icon type="television"/>Television</li>
								<li value={cabininfo.amenities.essentials}><Icon type="star"/>Essentials</li>
								<li value={cabininfo.amenities.shower_essentials}><Icon type="tint"/>Shower Essentials</li>
								<li value={cabininfo.amenities.heating}><Icon type="fire"/>Heating</li>
								<li value={cabininfo.amenities.airconditioning}><Icon type="refresh"/>Air Conditioning</li>
								<li value={cabininfo.amenities.washer}><Icon type="square"/>Washer</li>
								<li value={cabininfo.amenities.dryer}><Icon type="square-o"/>Dryer</li>
								<li value={cabininfo.amenities.dishwasher}><Icon type="database"/>Dishwasher</li>
								<li value={cabininfo.amenities.free_parking}><Icon type="hand-o-right"/>Free Parking</li>
								<li value={cabininfo.amenities.cable}><Icon type="hdd-o"/>Cable</li>
								<li value={cabininfo.amenities.satellite}><Icon type="hdd-o"/>Satellite</li>
								<li value={cabininfo.amenities.breakfast}><Icon type="spoon"/>Breakfast</li>
								<li value={cabininfo.amenities.pets}><Icon type="paw"/>Pets</li>
								<li value={cabininfo.amenities.kid_friendly}><Icon type="child"/>Kid Friendly</li>
								<li value={cabininfo.amenities.events} ><Icon type="sun-o"/>Events</li>
								<li value={cabininfo.amenities.smoking}><Icon type="ban"/>Smoking</li>
								<li value={cabininfo.amenities.wheelchair_accessible}><Icon type="wheelchair"/>Wheelchair Accessible</li>
								<li value={cabininfo.amenities.elevator}><Icon type="building-o"/>Elevator</li>
								<li value={cabininfo.amenities.fireplace}><Icon type="home"/>Fireplace</li>
								<li value={cabininfo.amenities.intercom}><Icon type="circle-o"/>Intercom</li>
								<li value={cabininfo.amenities.doorman}><Icon type="bell"/>Doorman</li>
								<li value={cabininfo.amenities.pool}><Icon type="life-ring"/>Pool</li>
								<li value={cabininfo.amenities.hottub}><Icon type="heart-o"/>Hot Tub</li>
								<li value={cabininfo.amenities.gym}><Icon type="futbol-o"/>Gym</li>
								<li value={cabininfo.amenities.hangers}><Icon type="filter"/>Hangers</li>
								<li value={cabininfo.amenities.iron}><Icon type="eject"/> Iron</li>
								<li value={cabininfo.amenities.hair_dryer}><Icon type="cloud"/>Hair Dryer</li>
								<li value={cabininfo.amenities.workstation}><Icon type="briefcase"/>Workstation</li>
								<li value={cabininfo.amenities.billiards}><Icon type="circle"/>Billiards</li>
							</ul>
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
