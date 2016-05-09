import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import { ajax } from 'jquery';

export default class SearchedPage extends Component {
	constructor(...props) {
		super(...props);
		this.state = {
			listings: []
		}
	}

	componentWillMount() {

		let { search_input, property_type}  = this.props.params;
		ajax({
			url: 'https://cabinfever.herokuapp.com/residences/search',
			type: 'GET',
			data: { search_input: search_input, property_type: property_type}, 
			dataType: 'json',
			cache: false
			}).then(response => {
				console.log('response =>', response);
				// set state from response to show results
				this.setState({listings: response.listings})
			})
		}

	componentWillReceiveProps(props) {
		let { search_input, property_type}  = props.params;
		console.log('one', search_input);
		console.log('two', property_type);
		ajax({
			url: 'https://cabinfever.herokuapp.com/residences/search',
			type: 'GET',
			data: { search_input, property_type}, 
			dataType: 'json',
			cache: false
			}).then(response => {
				console.log('response =>', response);
				// set state from response to show results
				this.setState({listings: response.listings})
			})
		}

	createResults(response) {
		return (
			<Link key={response.id} to={`/generate_new/${response.id}`}>
			<div className="searched-wrapper">
					<div className="searched-img-div"> 
						<img className="searched-img" src={response.image}/>
						<div className="searched-title">{response.title}</div> 
						<div className="searched-price">Price: ${response.price}</div>
						<div className="searched-property">Property Type: {response.property_type}</div>
					</div>
			</div>	
			</Link>
		);
	}


	getResults() {
		console.log('this.state.searchinfo.listings===>', this.state.listings);
		if ( this.state.listings.length ) {
			return this.state.listings.map(::this.createResults);
		} else {
			return (
			<div> Nothing Was Found </div> )
		}
	}

	render() {

		return (

			<div className="searched-page-wrapper">

				<h3 className="search-title"> Search Results </h3> 

				<div className="searched-flexme">
					{this.getResults()}
				</div>


			</div>
		)
	}

}
