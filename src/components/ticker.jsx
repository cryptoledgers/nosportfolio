import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";
import { react } from "@nosplatform/api-functions";
import axios from 'axios';
//import { Button } from 'reactstrap';

const { injectNOS, nosProps } = react.default;


const neo = "c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b";
const gas = "602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7";
const rpx = "ecc6b20d3ccac1ee9ef109af5a7cdb85706b1df9";
const ont = "ceab719b8baa2310f232ee0d277c061704541cfb";
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
      neoprice: 100,
      gasprice: 5,
      rpxprice: 0.1,
      neocap: "99999",
      gascap: "1",
      neobalance: 0,
      gasbalance: 0,
      rpxbalance: 0,
      neovalue: 1,
      gasvalue: 1,
      rpxvalue: 1,
      neovalue: "3.5",
      gassupply: "33"
    }
  }

  componentDidMount() {

    this.setState({
      neovalue: this.state.neobalance * this.state.neoprice,
      gasvalue: this.state.gasbalance * this.state.gasprice,
      rpxvalue: this.state.rpxbalance * this.state.rpxprice
    })
    
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

    //wwb: rank 1401

    //get data on mount
    axios.get("https://api.coinmarketcap.com/v2/ticker/")
      .then(res => {
        var dt = res.data.data;        
        var neoticker = dt[id_neo];
        var gasticker = dt[id_gas];

        /*        
        id last_updated max_supply name quotes rank symbol total_supply
        */

        var neo_price = neoticker["quotes"]["USD"]["price"];
        var gas_price = gasticker["quotes"]["USD"]["price"];

        //max_supply
        //circulating_supply
      
        this.setState({
          neoprice: neo_price,
          gasprice: gas_price,
          neosupply: neoticker["total_supply"],
          neocap: neoticker["quotes"]["USD"]["market_cap"],
          gascap: gasticker["quotes"]["USD"]["market_cap"],
          gassupply: gasticker["total_supply"]
        });
      })

      //local call
      if (this.props.nos){    
        this.props.nos.getBalance({ asset: neo })
          .then((balance) => this.setState({neobalance: balance}))
          .catch((err) => alert(`Error: ${err.message}`));
  
          this.props.nos.getBalance({ asset: gas })
          .then((balance) => this.setState({gasbalance: balance}))
          .catch((err) => alert(`Error: ${err.message}`));
  
          this.props.nos.getBalance({ asset: rpx })
          .then((balance) => this.setState({rpxbalance: balance}))
          .catch((err) => alert(`Error: ${err.message}`));      
          
      }   
      else {
        alert("please use NOS client");
      }
  
  }

  
  render() {

    return (
      <React.Fragment>
         <h1>Neo Portfolio Dashboard</h1>

         <table>
           <tr>
           <th>Name</th>
            <th>Price</th>
            <th>Supply</th>
            <th>Marketcap</th>
           </tr>
           <tr>
             <td>Neo</td>
             <td>{this.state.neoprice} $</td>
             <td>{this.state.neosupply}</td>
             <td>{this.state.neocap} $</td>             
             </tr>
             <tr>
             <td>Gas</td>
             <td>{this.state.gasprice} $</td>
             <td>{this.state.gassupply}</td>
             <td>{this.state.gascap} $</td>
             </tr>
           </table>
           &nbsp;
           <table>
           <tr>
           <th>Symbol</th>
           <th>Name</th>
           <th>Type</th>
            <th>Price</th>
            <th>Balance</th>
            <th>Value</th>
            <th>Neotracker</th>
            <th>Coinmarketcap</th>

           </tr>
           <tr>
             <td>Neo</td>
             <td>Neo</td>
             <td>Native currency</td>
             <td>{this.state.neoprice} $</td>
             <td>{this.state.neobalance}</td>
             <td>{this.state.neovalue}</td>
             <td><a href="https://neotracker.io/asset/c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b">Neotracker</a></td>
             <td><a href="https://coinmarketcap.com/currencies/neo">Coinmarketcap</a></td>             
             </tr>

             <tr>
             <td>Gas</td>
             <td>Neo gas</td>
             <td>Gas currency</td>
             <td>{this.state.gasprice} $</td>
             <td>{this.state.gasbalance}</td>
             <td>{this.state.gasvalue}</td>
             <td><a href="https://neotracker.io/asset/602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7">Neotracker</a></td>
             <td><a href="https://coinmarketcap.com/currencies/gas">Coinmarketcap</a></td>
             </tr>

             <tr>
             <td>RPX</td>
             <td>Red Pulse Token</td>             
             <td>Token</td>             
             <td>{this.state.rpxprice} $</td>
             <td>{this.state.rpxbalance}</td>
             <td>{this.state.rpxvalue}</td>
             <td><a href="https://neotracker.io/asset/ecc6b20d3ccac1ee9ef109af5a7cdb85706b1df9">Neotracker</a></td>
             <td><a href="https://coinmarketcap.com/currencies/red-pulse">Coinmarketcap</a></td>
             </tr>

             <tr>
             <td>ONT</td>
             <td>Ontology</td>
             <td>Token</td>
             <td></td>
             <td></td>
             <td></td>
             <td><a href="https://neotracker.io/asset/ceab719b8baa2310f232ee0d277c061704541cfb">Neotracker</a></td>
             <td><a href="https://coinmarketcap.com/currencies/ontology">Coinmarketcap</a></td>
             </tr>

             <tr>
             <td>deepbrain-chain</td>
             <td></td>
             <td>Token</td>
             <td></td>
             <td></td>
             <td></td>
             <td><a href="https://neotracker.io/asset/ecc6b20d3ccac1ee9ef109af5a7cdb85706b1df9">Neotracker</a></td>
             <td><a href="https://coinmarketcap.com/currencies/deepbrain-chain">Coinmarketcap</a></td>
             </tr>

             <tr>
             <td>thekey</td>
             <td></td>
             <td>Token</td>
             <td></td>
             <td></td>
             <td></td>
             <td><a href="https://neotracker.io/asset/ecc6b20d3ccac1ee9ef109af5a7cdb85706b1df9">Neotracker</a></td>
             <td><a href="https://coinmarketcap.com/currencies/thekey">Coinmarketcap</a></td>
             </tr>  

             <tr>
             <td>Soul</td>
             <td></td>
             <td>Token</td>
             <td></td>
             <td></td>
             <td></td>
             <td><a href="https://neotracker.io/asset/ecc6b20d3ccac1ee9ef109af5a7cdb85706b1df9">Neotracker</a></td>
             <td><a href="https://coinmarketcap.com/currencies/thekey">Coinmarketcap</a></td>
             </tr> 

             <tr>
             <td>WWB</td>
             <td></td>
             <td>Token</td>
             <td></td>
             <td></td>
             <td></td>
             <td><a href="https://neotracker.io/asset/ecc6b20d3ccac1ee9ef109af5a7cdb85706b1df9">Neotracker</a></td>
             <td><a href="https://coinmarketcap.com/currencies/thekey">Coinmarketcap</a></td>
             </tr> 

           </table>           

      <h1>Description </h1>
      <p>Neo dashboard pulls data from Coinmarketcap and calls the internal backend NOS client API to calculate the value of
        the portfolio in realtime
        Sourc code can be found on github: https://github.com/cryptoledgers/neodex
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
