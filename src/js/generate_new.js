import React, { Component, PropTypes }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import { ajax } from 'jquery';

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

					<div className="basic-property-info">
					</div>

					<div className="prices">
					</div>

				</div>

				<div className="bottom">

					<div className="host-image">
					</div>

					<div className="host-name">
					</div>

					<div className="host-email">
						<h5>{cabininfo.residence.contact_host_email}</h5>
					</div>

					<div className="additional-prop-info">
					</div>

					<div className="guestbook">
					</div>

				</div>

			</div>
		);
	}

	

renderLoading(){
	return (<div> Loading... </div>)
}

	render() {
		let { loading } = this.state;
		return loading ? this.renderLoading() : this.renderPage()
	}
}
