import React, { Component, PropTypes } from 'react';
import { hashHistory, Link } from 'react-router';
import Icon from './icon';
import { ajax } from 'jquery';


export default class GuestBook extends Component {
	constructor(...props) {
		super(...props);
		this.state = {
			entryNo: 0,
			// def_image: {},
			// def_entry: {}
		}
	}

			// def_image: 'http://getuikit.com/docs/images/placeholder_600x400.svg',
			// def_entry: 'Click Sign My Guestbook to add a nice image and entry about your visited location!'
	componentWillMount(){
		if(this.props.cabininfo.guest_book.length < 1){
			this.props.cabininfo.guest_book[0] = {image: 'http://fillmurray.com/100/100', entry: 'Click Sign My Guestbook to add a nice image and entry about your visited location!' }
		}
	}

	rightClickHandler() {
		let { cabininfo } = this.props;
		let upperLim = cabininfo.guest_book.length - 1;
		// console.log(upperLim);
		if (this.state.entryNo === upperLim) {
			// console.log('this is your last entry')
			this.state.entryNo = 0;
			this.setState(this.state);

		} else {
			this.state.entryNo = this.state.entryNo + 1;
			this.setState(this.state);
		}
		// forceUpdate(this.entryNo);
		// console.log('right-cabininfo.guest_book', cabininfo.guest_book)
	}

	leftClickHandler() {
		let { cabininfo } = this.props;
		let upperLim = cabininfo.guest_book.length - 1;
		if (this.state.entryNo === 0) {
			// console.log('this is the first image');
			this.state.entryNo = upperLim;
			this.setState(this.state);
		} else {
			this.state.entryNo = this.state.entryNo - 1;
			console.log(this.state.entryNo);
			this.setState(this.state);
		}
		// forceUpdate(this.entryNo);
		// console.log('left-cabininfo.guest_book', cabininfo.guest_book)
	}


// if (cabininfo.guest_book === []) {
// 	cabininfo.guest_book.image = 'http://getuikit.com/docs/images/placeholder_600x400.svg';
// 	cabininfo.guest_book.entry = 'Click Sign My Guestbook to add a nice image and entry about your visited location!';
// }




	render() {
		// let entryNo = 0;
		// let { gbinfo } = this.state;
		let { cabininfo } = this.props;
		console.log('cabininfo', cabininfo);
		console.log('this.state.entryNo', this.state.entryNo);
		return (
			
			<div className="gb-main-wrapper">
				<div className="gb-and-entry">
					<img className="gb-img" src={cabininfo.guest_book[this.state.entryNo].image}/>
					<div className="gb-entry">{cabininfo.guest_book[this.state.entryNo].entry}</div>
						<div className="gb-btns">
							<button onClick={::this.leftClickHandler}className="gb-left-btn"><Icon type="arrow-left"/></button>				
							<button onClick={::this.rightClickHandler}className="gb-right-btn"><Icon type="arrow-right"/></button>
						</div>
				<Link to={`/guest-book-builder/${cabininfo.residence.id}`}><button className="gb-sign-btn">Sign My Guestbook</button></Link>	
				</div>
			</div>

		);
	}
}

