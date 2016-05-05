import React, { Component, PropTypes } from 'react';
import { hashHistory, Link } from 'react-router';
import Icon from './icon';
import { ajax } from 'jquery';


export default class GuestBook extends Component {
	constructor(...props) {
		super(...props);
		// this.state = { gbinfo: 'http://getuikit.com/docs/images/placeholder_600x400.svg'};
	}

	// componentWillMount() {
	// 	let { gbinfo } = this.state;
	// 	ajax(`https://cabinfever.herokuapp.com/residences/${this.props.residence_id}`).then(gbinfo => {
	// 		this.setState({gbinfo});
	// 		console.log('gbinfo after ajax', gbinfo)
	// 	});
	// }



	render() {

		// let { gbinfo } = this.state;
		let { cabininfo } = this.props;
		console.log('cabininfo', cabininfo);
		
		return (
			
			<div className="gb-main-wrapper">
				<div className="gb-and-entry">
					<button className="gb-left-btn"><Icon type="arrow-left"/></button>				
					<button className="gb-right-btn"><Icon type="arrow-right"/></button>
				</div>
				<Link to={`/guest-book-builder/${cabininfo.residence.id}`}><button className="gb-sign-btn">Sign My Guestbook</button></Link>	
			</div>

		);
	}
}

