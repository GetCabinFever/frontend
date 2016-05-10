import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import { ajax } from 'jquery';
import editHandler from './edit-listing';

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
		}).then( response => {
			console.log('property listing ajax response===>', response);
			this.setState( {properties: response});
		});
	}

	deleteHandler(property){
		console.log('deleteHandler running +')
		ajax({
			url: `https://cabinfever.herokuapp.com/residences/${property.id}`,
			type: 'DELETE'
		}).then (resp => {
			console.log('response', resp);
			let { properties } = this.state;
			properties.splice(properties.indexOf(property), 1);
			this.setState({properties: properties});
		})
	}

	createResults(property){
		// let { property }
		console.log('property object param < create results ===>', property)
		return(
			<div key={ property.id } className="cabin">
				<Link to={ `/generate_new/${property.id}` }>
					<div className='cabin-info'>
						<div className='cabin-info-title'>{ property.title }</div>
						<div className='cabin-info-id'>{ property.id }</div>
						<div className='center-me'><img src={ property.image } /></div>
					</div>
				</Link>

				<div>
				<button onClick={ this.deleteHandler.bind(this, property) } className='button-regular-sm center-me'> Delete </button>
				</div>

			</div>
		)
	}
				
	render(){
		let { properties } = this.state;
		return (
			<div>

				<div className='title'>
					<h2>My Properties</h2>
				</div>

				<div className='properties center-me'>
					{ this.state.properties.map(::this.createResults) }
				</div>
			</div>
		)
	}

}
//FIX ME 
//<Link to={`/edit-listing/${property.id}`}> Edit Listing </Link>

//<button onClick={ this.EditListing.bind(this, property) }> Edit </button>