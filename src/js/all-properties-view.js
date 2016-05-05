import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import { ajax } from 'jquery';

//loose function here 

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

	deleteHandler(property){
		console.log('bruo')
		ajax({
			url: `https://cabinfever.herokuapp.com/residences/${property.id}`,
			type: 'DELETE'
		}).then (resp => {
			console.log('response', resp);
			let { properties } = this.state;
			properties.splice(properties.indexOf(property), 1);
			this.setState({properties: properties});
			// let { properties } = this.state;
			// console.log('before delete====>', properties);
			// properties.splice(properties.indexOf(response), 1);
			// console.log('new array====>', properties);
			// hashHistory.push("/dashboard");
		})
	}

	createResults(property){
		return(
			<div key={ property.id }>
				<Link to={ `/generate_new/${property.id}` }>
					<div className='cabin'>
						<div>{ property.title }</div>
						<div><img src={ property.image } /></div>
						<div>{ property.id }</div>
					</div>
				</Link>
				<button onClick={ this.deleteHandler.bind(this, property) }> Delete </button>
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

//alternate code to onClick
// <button onClick={ () => this.deleteHandler(property) }> Delete </button>

	// deleteHandler(response){
	// 	let { properties } = this.state;
	// 	console.log('before delete====>', properties);
	// 	properties.splice(properties.indexOf(response), 1);
	// 	console.log('new array====>', properties);
	// 	hashHistory.push("/dashboard");
	// }