// Javascript Entry Point
import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import SimpleSerialForm from 'react-simple-serial-form';
import { ajax } from 'jquery';



export default class Heading extends Component {

	dataHandler(data){
		hashHistory.push(`/search/${data.property_type}/${data.search_input}`);
	}

	render(){

		return(

			<div>
					<div className="heading">
					
						<div className="logo-login-reg">
						<Link to="/"><div className="home-logo"></div></Link>

						<Link className="login-link" to="/login"> Login </Link>
								
						<Link className="register-link"to="/register"> Register </Link>
						</div>
							

						<div className="search-select-submit">
							<SimpleSerialForm onData={::this.dataHandler} autoComplete="off">
							
								<input className="search-bar" type="text" name="search_input" placeholder="Search by city"/>

						
										<div className="heading_property_wrapper">

											<select className="heading-select-btn" name="property_type">

												<option value={'Cabin'}>Cabin</option>
												<option value={'Cottage'}>Cottage</option>
												<option value={'House'}>House</option>
												<option value={'Apartment'}>Apartment</option>

											</select>

											<button className='button-regular-sm' id='head-submit-btn'> Submit </button>

										</div>
							
							</SimpleSerialForm>
						</div>
					</div>

				{this.props.children}

			</div>

		)
	}
}

// <div className="heading">
			
// 				<div className="heading-flex">
		
// 					<Link to="/"><div className="home-logo"></div></Link>

// 					<Link className="login-link" to="/login"> Login </Link>
							
// 					<Link className="register-link"to="/register"> Register </Link>

// 						<SimpleSerialForm>
						
// 							<input className="search-bar" type="text" placeholder="Search | Cabin Fever"/>

// 								<div className="right-btns-wrapper">

// 									<div className="heading_property_wrapper">

// 										<select className="heading-select-btn" name="property_type">

// 											<option value={'Cabin'}>Cabin</option>
// 											<option value={'Cottage'}>Cottage</option>
// 											<option value={'House'}>House</option>
// 											<option value={'Apartment'}>Apartment</option>

// 										</select>

// 										<button> Submit </button>

// 									</div>
						
// 								</div>

// 						</SimpleSerialForm>

// 				</div>

// 				{this.props.children}

// 			</div>