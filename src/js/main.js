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
				</div>

				<div className="aboutme-top">
					<div>
						<div>
						Get started today
						</div>
						
						<div>
						Cabin owners list personal property for rent.
						</div>

						<div>
						Travelers book a long weekend in beautiful North Georgia.
						</div>

						<div>
						Share your experiences and adventures in a virtual guestbook.
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
