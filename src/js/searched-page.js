import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import { ajax } from 'jquery';

export default class SearchedPage extends Component {
	constructor(...props) {
		super(...props);
		this.state = {
			searchinfo: []
		}
	}

	componentWillMount() {

		let { search_input, property_type}  = this.props.params;

		ajax({
			url: 'https://cabinfever.herokuapp.com/residences/search',
			type: 'GET',
			data: { search_input, property_type}, 
			dataType: 'json'
		}).then(response => {
			console.log('response =>', response);
			// set state from response to show results
			this.setState({searchinfo: response})
		})

	}


	createResults(response) {
		return (
			<div>
					<div className="searched-img-div"> 
						<img className="searched-img" src={response.image}/>
					</div>

					<div className="searched-title">{response.title}</div> 
					<div className="searched-price">{response.price}</div>
					<div className="searched-property">{response.property_type}</div>
			</div>
			
		);
	}

	render() {

		return (
			<div className="searched-page-wrapper">

				<h3> Search Results </h3> 

				<div>
					{this.state.searchinfo.map(::this.createResults)}
				</div>


			</div>
		)
	}

}

		// let { searchinfo } = this.props.params;
		// ajax({
		// 	url: 'https://cabinfever.herokuapp.com/residences',
		// 	type: 'GET',
		// 	data: data, 
		// 	dataType: 'json'
		// }).then(response => {
		// 	console.log('response =>', response);
		// })