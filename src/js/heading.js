// Javascript Entry Point
import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import SimpleSerialForm from 'react-simple-serial-form';


export default class Heading extends Component {

	render(){

		return(

			<div className="heading">
			
				<div className="heading-flex">
		
					<Link to="/"><div className="home-logo"></div></Link>

					<Link className="login-link" to="/login"> Login </Link>
							
					<Link className="register-link"to="/register"> Register </Link>

						<SimpleSerialForm>
						
							<input className="search-bar" type="text" placeholder="Search | Cabin Fever"/>

								<div className="heading_property_wrapper">

									<select className="heading-select-btn" name="property_type">

										<option value={'Cabin'}>Cabin</option>
										<option value={'Cottage'}>Cottage</option>
										<option value={'House'}>House</option>
										<option value={'Apartment'}>Apartment</option>

									</select>

									<button> Submit </button>
						
								</div>

						</SimpleSerialForm>

				</div>

				{this.props.children}

			</div>
		)
	}
}
