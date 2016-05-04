import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import { ajax } from 'jquery';

export default class AllPropertiesView extends Component {
	constructor(...args){
		super(...args);
		this.state = { properties: [] }
	}

	componentWillMount(){
		ajax({
			url: 'https://cabinfever.herokuapp.com/user/dashboard',
			type: 'GET',
			cache: false,
			dataType: 'json',
			// processData: false,
			// contentType: false
		}).then( response => {
			console.log('response===>', response) 
			// console.log('residences response===>', response.residences) 
			this.setState( {properties: response});
			// this.setState // to new array from response
		});
	}

	deleteHandler(response){
		console.log('bruo')
		ajax({
			url: `https://cabinfever.herokuapp.com/residences/${response}`,
			type: 'DELETE'
		}).then (resp => {
			console.log('response', resp)
		// let { properties } = this.state;
		// console.log('before delete====>', properties);
		// properties.splice(properties.indexOf(response), 1);
		// console.log('new array====>', properties);
		// hashHistory.push("/dashboard");
		})
	}

	createResults(response){
		return(
			<div key={ response.id }>
				<Link to={ `/generate_new/${response.id}` }>
					<div className='cabin'>
						<div>{ response.title }</div>
						<div><img src={ response.image } /></div>
						<div>{ response.id }</div>
					</div>
				</Link>
				<button onClick={ this.deleteHandler.bind(null, response.id) }> Delete </button>
			</div>
		)
	}

	render(){
		// this.state.properties.map( ::this.getProperty  )
		let { properties } = this.state;
		return (
			<div>
				<h1>*** My Properties ***</h1>
				<div>{ this.state.properties.map(::this.createResults) }</div>
			</div>
		)
	}

}

	// deleteHandler(response){
	// 	let { properties } = this.state;
	// 	console.log('before delete====>', properties);
	// 	properties.splice(properties.indexOf(response), 1);
	// 	console.log('new array====>', properties);
	// 	hashHistory.push("/dashboard");
	// }