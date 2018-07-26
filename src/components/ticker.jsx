import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";
import { react } from "@nosplatform/api-functions";
import axios from 'axios';
import { api, wallet } from '@cityofzion/neon-js';
import Neon from '@cityofzion/neon-js'


import {sc} from "@cityofzion/neon-js";

//import { Button } from 'reactstrap';
import './ticker.css';

const { injectNOS, nosProps } = react.default;


const neo = "c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b";
const gas = "602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7";

const assetid_ont = "ceab719b8baa2310f232ee0d277c061704541cfb";
const assetid_kky = "132947096727c84c7f9e076c90f08fec3bc17f18";
const assetid_eds = "81c089ab996fc89c468a26c0a88d23ae2f34b5c0";
const assetid_efx = "acbc532904b6b51b5ea6d19b803d78af70e7e6f9";
const assetid_nnc = "fc732edee1efdf968c23c20a9628eaa5a6ccb934";
const assetid_mct = "a87cc2a513f5d8b4a42432343687c2127c60bc3f";
const assetid_rpx = "ecc6b20d3ccac1ee9ef109af5a7cdb85706b1df9";
const assetid_soul = "ed07cffad18f1308db51920d99a2af60ac66a7b3";

//const 无忧宝 = "7f48028c38117ac9e42c8e1f6f06ae027cdbb904eaf1a0bdc30c9d81694e045c";
//const wwb = "40bb36a54bf28872b6ffdfa7fbc6480900e58448";


const styles = {
  button: {
    margin: "16px",
    fontSize: "14px"
  }
};

class Ticker extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      address: "222",
      
      neoprice: 100,
      gasprice: 5,
      price_soul: 0.1135,
      price_tky: 0.0093,
      price_efx: 0.0259,
      price_rpx: 0.033,

      neocap: "99999",
      gascap: "1",
      neobalance: 0,
      gasbalance: 0,

      balance_ont: 0,
      balance_soul: 0,
      balance_tky: 0,
      balance_eds: 0,
      balance_efx: 0,
      balance_nnc: 0,
      balance_mct: 0,
      balance_rpx: 0,

      neovalue: 1,
      gasvalue: 1,
      rpxvalue: 1,
      neovalue: 3.5,

      value_soul: 0,
      value_efx: 0,
      value_ont: 0,
      value_tky: 0,
      value_rpx: 0,
      gassupply: "33",

      asset_soul: {}
     
    }
  }

  componentDidMount() {
    //alert("did mount");

  }

  setBalanceAsset(assetid, symbol){

  }

  setValue() {
    this.setState({
      value_soul: -this.state.price_soul*this.state.balance_soul,
      value_efx: this.state.price_efx*this.state.balance_efx
    }
    );
  }

  setBalance(){

    var endpoint = 'http://seed0.bridgeprotocol.io:10332/';
    //'https://seed1.neo.org:10331';
    // Neon.CONST.DEFAULT_RPC.MAIN;
    //'https://seed1.neo.org:20331';

    var myaddr = 'ASEc4jQvAEji5Y87hrhyBB9UCGbNLLzNK2';
    const assetid_soul = 'ed07cffad18f1308db51920d99a2af60ac66a7b3';


    /*
    result.name
    result.symbol
    result.decimals
    result.totalSupply
    result.balance*/  

     api.nep5.getToken(endpoint, assetid_rpx, myaddr)
        .then(result => {
          this.setState({
            rpxbalance: result.balance            
          })
          this.setState({
            value_rpx: this.state.price_rpx*this.state.balance_rpx,                       
          })
          
        }).catch(function (error) {
          alert("error fetchin rpx " + error);
        });

      api.nep5.getToken(endpoint, assetid_soul, myaddr)
      .then(result => {      
          this.setState({
            balance_soul: result.balance,               
          })
          this.setState({
            value_soul: this.state.price_soul*this.state.balance_soul,                       
          })          
      }).catch(function (error) {
        alert("error fetchin soul " + error);
      });

      api.nep5.getToken(endpoint, assetid_ont, myaddr)
      .then(result => {      
          this.setState({
            balance_ont: result.balance       
          })
          this.setState({
            value_ont: this.state.price_ont*this.state.balance_ont,                       
          }) 
      });

      api.nep5.getToken(endpoint, assetid_kky, myaddr)
      .then(result => {      
          this.setState({
            balance_kky: result.balance       
          })
          this.setState({
            value_kky: this.state.price_kky*this.state.balance_kky,                       
          })          
      });

      api.nep5.getToken(endpoint, assetid_eds, myaddr)
      .then(result => {      
          this.setState({
            balance_eds: result.balance       
          })
      });

      api.nep5.getToken(endpoint, assetid_efx, myaddr)
      .then(result => {      
          this.setState({
            balance_efx: result.balance       
          })
          this.setState({
            value_efx: this.state.price_efx*this.state.balance_efx,                       
          })
      });

      api.nep5.getToken(endpoint, assetid_nnc, myaddr)
      .then(result => {      
          this.setState({
            balance_nnc: result.balance       
          })
      });

      api.nep5.getToken(endpoint, assetid_mct, myaddr)
      .then(result => {      
          this.setState({
            balance_mct: result.balance       
          })
      });
      
  }

  componentWillMount() {    

    //https://api.coinmarketcap.com/v2/ticker/?start=490&limit=100
    //https://api.coinmarketcap.com/v2/listings/

    var id_neo = "1376";
    var id_gas = "1785";


    var id_soul = "2827";
    var id_wwb = "2892";
    var id_onto = "2566";
    var id_deep = "2316";
    var id_key = "2507";
    var id_ont = "2566";

    //wwb: rank 1401

    //get data on mount
    //https://api.coinmarketcap.com/v2/ticker/?start=101&limit=1000
    axios.get("https://api.coinmarketcap.com/v2/ticker/")
      .then(res => {
        var dt = res.data.data;        
        var neoticker = dt[id_neo];
        var gasticker = dt[id_gas];
        var ticker_ont = dt[id_ont];

        /*        
        id last_updated max_supply name quotes rank symbol total_supply
        */

        var neo_price = neoticker["quotes"]["USD"]["price"];
        var gas_price = gasticker["quotes"]["USD"]["price"];
        var price_ont = ticker_ont["quotes"]["USD"]["price"];
        

        //var np = neo_price.substring(0,neoprice.length-1);

        //max_supply
        //circulating_supply
      
        this.setState({
          neoprice: neo_price,
          gasprice: gas_price,
          price_ont: price_ont,
          neosupply: neoticker["total_supply"],
          neocap: neoticker["quotes"]["USD"]["market_cap"],
          gascap: gasticker["quotes"]["USD"]["market_cap"],
          gassupply: gasticker["total_supply"]
        });


        //local call
      if (this.props.nos){    
        
        this.props.nos.getAddress()
        .then((address) => {
          this.setState({address: address});
          this.setBalance();
        })
        .catch((err) => alert(`Error: ${err.message}`));

        this.props.nos.getBalance({ asset: neo })
        .then((balance) => this.setState({
          neobalance: balance, 
          neovalue: neo_price*balance
        }))
        .catch((err) => alert(`Error: ${err.message}`));                

        this.props.nos.getBalance({ asset: gas })
        .then((balance) => this.setState({
          gasbalance: balance,
          gasvalue: gas_price*balance
        }))
        .catch((err) => alert(`Error: ${err.message}`));

        this.props.nos.getBalance({ asset: rpx })
        .then((balance) => this.setState({rpxbalance: balance}))
        .catch((err) => alert(`Error: ${err.message}`));  

        //getTokenBalance = (url, scriptHash, address)
        var query = 'https://seed1.neo.org:10331';
        var TEST_RHTT4 = 'f9572c5b119a6b5775a6af07f1cef5d310038f55';
        var addr = 'ASEc4jQvAEji5Y87hrhyBB9UCGbNLLzNK2';
        alert("get token balance " + this.props.nos.api.NEP5);
        this.props.nos.NEP5.getTokenBalance(query, TEST_RHTT4, addr).then(result => {
        });


    }   
    else {
      alert("please use NOS client");
    }
      })
    
  }

  render() {

    return (
      <React.Fragment>
         <h1>NOS Portfolio Dashboard</h1>
        <p>address: {this.state.address}</p>
         <table class="table">
           <tr>
           <th>Name</th>
            <th>Price</th>
            <th>Supply</th>
            <th>Marketcap</th>
           </tr>
           <tr>
             <td>Neo</td>
             <td>{this.state.neoprice}</td>
             <td>{this.state.neosupply}</td>
             <td>{this.state.neocap}</td>             
             </tr>
             <tr>
             <td>Gas</td>
             <td>{this.state.gasprice}</td>
             <td>{this.state.gassupply}</td>
             <td>{this.state.gascap}</td>
             </tr>
           </table>

           <table class="table">
           <tr>
           <th>Symbol</th>
           <th>Name</th>
           <th>Type</th>
            <th>Price</th>
            <th>Balance</th>
            <th>Value</th>
            <th>Neotracker</th>
            <th>Coinmarketcap</th>
            <th>Supply</th>
           </tr>
           <tr>
             <td>Neo</td>
             <td>Neo</td>
             <td>Native currency</td>
             <td>{this.state.neoprice}</td>
             <td>{this.state.neobalance}</td>
             <td>{this.state.neovalue}</td>
             <td><a href="https://neotracker.io/asset/c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b">Neotracker</a></td>
             <td><a href="https://coinmarketcap.com/currencies/neo">Coinmarketcap</a></td>             
             <td>100000000</td>
             </tr>

             <tr>
             <td>Gas</td>
             <td>Neo gas</td>
             <td>Gas currency</td>
             <td>{this.state.gasprice}</td>
             <td>{this.state.gasbalance}</td>
             <td>{this.state.gasvalue}</td>
             <td><a href="https://neotracker.io/asset/602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7">Neotracker</a></td>
             <td><a href="https://coinmarketcap.com/currencies/gas">Coinmarketcap</a></td>
             <td>17190378</td>             
             </tr>
               
             <tr>
             <td>ONT</td>
             <td>Ontology Token</td>
             <td>Token NEP5</td>
             <td>{this.state.price_ont}</td>
             <td>{this.state.balance_ont}</td>
             <td>{this.state.value_ont}</td>
             <td><a href="https://neotracker.io/asset/ceab719b8baa2310f232ee0d277c061704541cfb">Neotracker</a></td>
             <td><a href="https://coinmarketcap.com/currencies/ontology">Coinmarketcap</a></td>             
             <td>1,000,000,000</td>
             </tr>

             <tr>
             <td>TKY</td>
             <td>THEKEY Token</td>
             <td>Token NEP5</td>
             <td>{this.state.price_tky}</td>
             <td>{this.state.balance_tky}</td>
             <td>{this.state.value_tky}</td>
             <td><a href="https://neotracker.io/asset/132947096727c84c7f9e076c90f08fec3bc17f18">Neotracker</a></td>
             <td><a href="https://coinmarketcap.com/currencies/thekey">Coinmarketcap</a></td>
             <td>9,795,844,687</td>
             </tr>

             <tr>
             <td>EFX</td>
             <td>Effect.AI Token</td>
             <td>Token NEP5</td>
             <td>{this.state.price_efx}</td>
             <td>{this.state.balance_efx}</td>
             <td>{this.state.value_efx}</td>
             <td><a href="https://neotracker.io/asset/acbc532904b6b51b5ea6d19b803d78af70e7e6f9">Neotracker</a></td>
             <td><a href="https://coinmarketcap.com/currencies/effect-ai/">Coinmarketcap</a></td>
             <td>650,000,000</td>
             </tr>

                         <tr>
             <td>RPX</td>
             <td>Red Pulse Token</td>             
             <td>Token NEP5</td>             
             <td>{this.state.price_rpx}</td>
             <td>{this.state.balance_rpx}</td>
             <td>{this.state.value_rpx}</td>
             <td><a href="https://neotracker.io/asset/ecc6b20d3ccac1ee9ef109af5a7cdb85706b1df9">Neotracker</a></td>
             <td><a href="https://coinmarketcap.com/currencies/red-pulse">Coinmarketcap</a></td>
             <td>1,358,371,250</td>
             </tr>
  

             <tr>
             <td>SOUL</td>
             <td>Phantasma</td>
             <td>Token NEP5</td>
             <td>{this.state.price_soul}</td>
             <td>{this.state.balance_soul}</td>
             <td>{this.state.value_soul}</td>
             <td><a href="https://neotracker.io/asset/ed07cffad18f1308db51920d99a2af60ac66a7b3">Neotracker</a></td>
             <td><a href="https://coinmarketcap.com/currencies/phantasma/">Coinmarketcap</a></td>             
             <td>91,136,374</td>
             </tr> 


             <tr>
             <td>NNC</td>
             <td>NEO Name Credit</td>
             <td>Token NEP5</td>
             <td>-</td>
             <td>{this.state.balance_nnc}</td>
             <td>-</td>
             <td><a href="https://neotracker.io/asset/fc732edee1efdf968c23c20a9628eaa5a6ccb934">Neotracker</a></td>
             <td><a href="https://coinmarketcap.com/currencies/thekey">Coinmarketcap</a></td>
             <td>650,000,000</td>
             </tr>


             <tr>
             <td>MCT</td>
             <td>Master Contract Token</td>
             <td>Token NEP5</td>
             <td>-</td>
             <td>{this.state.balance_mct}</td>
             <td>-</td>
             <td><a href="https://neotracker.io/asset/a87cc2a513f5d8b4a42432343687c2127c60bc3f">Neotracker</a></td>
             <td><a href="https://coinmarketcap.com/currencies/thekey">Coinmarketcap</a></td>
             <td>580,000,000</td>
             </tr>


                          <tr>
             <td>EDS</td>
             <td>Endorsit Shares</td>
             <td>Token NEP5</td>
             <td>-</td>
             <td>{this.state.balance_eds}</td>
             <td>-</td>
             <td><a href="https://neotracker.io/asset/81c089ab996fc89c468a26c0a88d23ae2f34b5c0">Neotracker</a></td>
             <td>-</td>
             <td>100,000,000,000</td>
             </tr>



           </table>           

      <h1>Description </h1>
      <p>Neo dashboard pulls data from Coinmarketcap and calls the internal backend NOS client API to calculate the value of
        the portfolio in realtime. <br/>
        The source code can be found on github: https://github.com/cryptoledgers/neodex
      </p>

      </React.Fragment>
    );
  }
}

Ticker.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  nos: nosProps.isRequired
};

export default injectNOS(injectSheet(styles)(Ticker));
