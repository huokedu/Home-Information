import React, { Component } from 'react';

import CalendarView from "./CalendarView";
import Crypto 		from "./Crypto";
// import CryptoNew 		from "./CryptoNew";
import Quotes 		from "./Quotes";

class BottomTwo extends Component{
	
  render(){
    return(
		<div id="BottomTwo">
			<div className="BottomTwo-Item BottomTwo-ItemOne">
				<CalendarView />
			</div>
			<div className="BottomTwo-Item">
				{/* <CryptoNew header="Show me the money!"/> */}
				<Crypto header="Show me the money!"/>
				<Quotes />
			</div>
		</div>
    );
  }
}

export default BottomTwo;