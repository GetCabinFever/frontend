import React, { Component, PropTypes }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import { ajax } from 'jquery';

export default class GenerateNew extends Component {

	ajax({


	})
	render() {

		return (
			<div>
				<div className="top">
					<div className="hero-image"></div>
					<div className="title"></div>	
					<div className="property-description"></div>
					<div className="property-link"></div>	
				</div>
				
				<div className="middle">
					<div className="basic-property-info"></div>
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