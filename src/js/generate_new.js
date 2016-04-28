import React, { Component, PropTypes }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import { ajax } from 'jquery';

export default class GenerateNew extends Component {
	constructor(...props){
		super(...props);
		this.state={ cabininfo:{} };
	}

	// componentWillMount(data){
	// 		ajax({
	// 			url: 'https://cabinfever.heroku.com/residences',
	// 			type: 'GET',
	// 			data: data,
	// 			cache: false,
	// 			dataType: 'json'
	// 		}).then(response=>{ 
	// 			console.log(response) 
	// 			this.setState({response})
	// 		})
	// 	}

	componentWillMount(){
		let { cabininfo } = this.props.params;
		console.log(this.props.params)
		ajax(`https://cabinfever.herokuapp.com/residences/${cabininfo}`).then(data => { 
			// console.log(data);
			this.setState({cabininfo: data});
		}).then({

			console.log('cabininfo amenities fireplace?--->', cabininfo.amenities.fireplace);
		})
	}

	render() {
		let { cabininfo } = this.state;
		let residenceObj = this.state.cabininfo.residence;
		// console.log('cabin info response --->', cabininfo);
		// console.log('cabiddn info residence object -->', residenceObj);
		// console.log('cabin safeties object--->', cabininfo.safeties);
		return (
			<div>
				<div className="top">
					<div className="hero-image"></div>
					<div className="title"></div>	
					<div className="property-description"></div>
					<div className="property-link"></div>	
				</div>
				
				<div className="middle">
					<div className="basic-property-info">

						<h1>All Cabins Info</h1>
						<img src={cabininfo.image_url} />
					</div>
					<div className="prices"></div>
				</div>

				<div className="bottom">
					<div className="host-image"></div>
					<div className="host-name"></div>
					<div className="host-email"></div>
					<div className="additional-prop-info"></div>
					<div className="guestbook"></div>
				</div>
			</div>
		);
	}
}

// componentWillMount(){
// 		ajax({
// 			url: 'https://cabinfever.heroku.com/residences',
// 			type: 'GET',
// 			data: data,
// 			cache: false,
// 			dataType: 'json'
// 		}).then(response=>{ 
// 			console.log(response) 
// 			this.setState({response})
// 		})
// 	}