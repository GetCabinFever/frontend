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

		console.log('fuck all the things');
		console.log('cabininfo.residence ===>', cabininfo.residence);
		// console.log('cabininfo.residence.bathrooms ===>', cabininfo.residence.bathrooms);
		return (
			<div>
				<div className="top">
					<div className="hero-image">
						<img src={cabininfo.image_url}/>
					</div>
					<div className="title">
						<h1></h1>
					</div>	
					<div className="property-description">
						<div>{cabininfo.residence.address}</div>
					</div>
					<div className="property-link">
					</div>	
				</div>
				
				<div className="middle">
					<div className="basic-property-info">

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

	

renderLoading(){
	return (<div> Loading... </div>)
}

	render() {
		let { loading } = this.state;
		return loading ? this.renderLoading() : this.renderPage()
	}
}
