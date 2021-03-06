import React, { Component } from 'react';
import CryptoItemBit from './CryptoItemBit';

const urlForUsername = cryptocoin => `https://api.coinmarketcap.com/v1/ticker/${cryptocoin}/`

class CryptoItem extends Component {

	constructor(props){
		super(props)
		this.state = {
			requestFailed: false
		}
		
		this.fetchResult = this.fetchResult.bind(this);
	}

	fetchResult = () => {
		fetch(urlForUsername(this.props.cryptocoin))
		.then(response =>{
			if(!response.ok){
				throw Error("Network request failed")
			}
			return response
		})
		.then(data => data.json())
		.then(data => {
			this.setState({
				cryptoData: data[0]
			})
		},() => {
			this.setState({
				requestFailed: true
			})
		})
	}

	componentDidMount(){
		this.fetchResult()
		setInterval(this.fetchResult, 30000)		
	}

    render() {
    	if(this.state.requestFailed) return <p>Failed...</p>
    	if(!this.state.cryptoData) return <p>Loading...</p>
   	
        return(
			<ul className="CryptoItem" data-sort={ `${this.state.cryptoData.percent_change_24h}` } id={ `${this.state.cryptoData.symbol}PriceChangeID` }>
				<CryptoItemBit CryptoItemInfoBit={this.state.cryptoData}/>
				<li>
					$ <span id={ `${this.state.cryptoData.symbol}Price` }>{this.state.cryptoData.price_usd} </span>
				</li>
				<li className="PreCentChange">
					<span id={ `${this.state.cryptoData.symbol}PriceChange` }>{this.state.cryptoData.percent_change_24h}</span><b>%</b>
				</li>
			</ul>
        );
    }
}
export default CryptoItem;