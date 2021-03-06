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
						<div className='center-me'><img src={ property.image } /></div>
							<div className='title-id-number-line'>
								<div className='cabin-info-title'>{ property.title }</div>
								<div className='cabin-info-id'>{ property.id }</div>
							</div>
					</div>
				</Link>

				<div className='delete-property-div'>
				<div><button onClick={ this.deleteHandler.bind(this, property) } className='button-regular-sm center-me' id='delete-btn-cabin-property'> Delete </button></div>
				</div>

			</div>
		)
	}
				
	render(){
		let { properties } = this.state;
		return (
			<div>

				<div className='title'>
					<div id='my-dash-logo'><img src="http://i.imgur.com/2E73mBG.png" /></div>
				</div>


				<div id='my-props-subtitle'><h3><span>My Properties</span></h3></div>

				<div className='divider'></div>

				<div className='properties center-me'>
					{ this.state.properties.map(::this.createResults) }
				</div>
			</div>
		)
	}

}

//<h2>My Properties</h2>

//FIX ME 
//<Link to={`/edit-listing/${property.id}`}> Edit Listing </Link>

//<button onClick={ this.EditListing.bind(this, property) }> Edit </button>

//<div key={ property.id } className="cabin">
				//<Link to={ `/generate_new/${property.id}` }>
					//<div className='cabin-info'>
						//<div className='center-me'><img src={ property.image } /></div>
							//<div className='title-id-number-line'>
								//<div className='cabin-info-title'>{ property.title }</div>
								//<div className='cabin-info-id'>{ property.id }</div>
							//</div>
					//</div>
				//</Link>

				//<div className='delete-property-div'>
				//<div><button onClick={ this.deleteHandler.bind(this, property) } className='button-regular-sm center-me' id='delete-btn-cabin-property'> Delete </button></div>
				//</div>

			//</div>





