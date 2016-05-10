// Javascript Entry Point
import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import SimpleSerialForm from 'react-simple-serial-form';

export default class Main extends Component {

	render(){
		return(
			<div className="main">

				<div className="main-hero-img">
					<div className='logo-header'>
						<div><img src="http://i.imgur.com/FErJOC5.png" /></div>
					</div>

					<div className='get-started-title'>
					<h2>Get started today</h2>
					</div>
				</div>

				<div className="aboutme-top">
					<div className='info-section'>
						<div className='get-started-title'>
						
						</div>
						
						<div className='three-box-section'>
							<div className='blue-box'>
							<span>Cabin owners list personal property for rent.</span>
							</div>

							<div className='blue-box'>
							<span>Travelers book a long weekend in beautiful North Georgia.</span>
							</div>

							<div className='blue-box'>
							<span>Share your experiences and adventures in a virtual guestbook.</span>
							</div>
						</div>
					</div>
				</div>

				<div className="aboutme-middle">
				</div>
				
				<div className="aboutme-bottom">
				</div>
				
			</div>
		)
	}

}

//<div className='lower_form_header'>
//<div className='nav-ul'>
//<div className='nav-li'>
//<span>Cabin Fever</span>
//</div>
//</div>
//</div>

// replaced inside of heading.js/////

		
						// <Link className="login-link" to="/login"> Log In </Link>
						
						// <Link className="register-link"to="/register"> Register </Link>
