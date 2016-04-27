import React, { Component, PropTypes }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import { ajax } from 'jquery';

export default class GenerateNew extends Component {
	constructor(...args){
		super(...args);
		this.state={ CabinInfo:[] };
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

//When we post a request to the bakcend to create the new cabin listing, the BE responds with 
//a response that includes the id # of that property.
//Each response has an id # 
//make the property id 
	componentWillMount(){
		ajax('https://cabinfever.heroku.com/residences/{id# of listing}').then(response=>{ 
			console.log(response);
			// this.setState({CabinInfo});
		})
	}

	// {CabinInfo[0].id} 

	render() {
		let { CabinInfo } = this.state;
		// console.log({CabinInfo});
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