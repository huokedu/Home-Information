import React, { Component } from 'react';
import Clock from './parts/Clock';

class BottomImage extends Component{
	constructor(props) {
		super(props);
		this.state = { 
			deadline: 'January 08, 2018',
		};
	}
	render(){
    return(
		<div className="SchoolStarts BottomCountDown" id="BottomImage">
			 <Clock deadline={ this.state.deadline }/>
		</div>
    );
  }
}

export default BottomImage;