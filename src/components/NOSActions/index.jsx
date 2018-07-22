import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";
import { react } from "@nosplatform/api-functions";
import axios from 'axios';


const { injectNOS, nosProps } = react.default;

const neo = "c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b";
const gas = "602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7";

const styles = {
  button: {
    margin: "16px",
    fontSize: "14px"
  }
};

class NOSActions extends React.Component {
  handleAlert = async func => 
    alert("result " + await func);
    

  // handleGetAddress = async () => alert(await this.props.nos.getAddress());

  handleClaimGas = () =>
    this.props.nos
      .claimGas()
      .then(alert)
      .catch(alert);

  handleShow = () =>
    this.props.nos
      .getBalance()
      .then(alert)
      .catch(alert);    

  componentWillMount() {
    console.log("will mount")

    //nos.getBalance({ asset: rpx }).then (console.log("get balance"));

    const NEO = 'c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b';
    const address = 'AZPkgTJixxkSFPyBZrcVpLj9nsHsPDUVkF';

    
  // Example without the optional parameter
 /* nos.getBalance({ asset: NEO })
    .then(function(value) {
      alert("Balance: " + value);
    });*/

    //nos.getBalance({ asset: NEO });

    /*.catch(function(value) {
      (err) => alert(`Error: ${err.message}`));*/

  }

  makecall() {
    alert("makecall");

    const NEO = 'c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b';
    //const address = 'AZPkgTJixxkSFPyBZrcVpLj9nsHsPDUVkF';

    nos.getBalance({ asset: NEO })
    .then((balance) => alert(`Balance: ${balance}`))
    .catch((err) => alert(`Error: ${err.message}`));


    /*const scriptHash = "2f228c37687d474d0a65d7d82d4ebf8a24a3fcbc";
    const operation = "9937f74e-1edc-40ae-96ad-1120166eab1b";
    const args = ['ef68bcda-2892-491a-a7e6-9c4cb1a11732'];

    const invoke = { scriptHash, operation, args }; // and testInvoke

    //nos.testInvoke(invoke)

    nos.testInvoke(invoke)
    .then((script) => alert(`Test invoke script: ${script} `))
    .catch((err) => alert(`Error: ${err.message}`));*/

    alert("end");

    /*this.props.nos
    .getBalance({ asset: neo })
    .then((balance) => console.log(`Balance: ${balance}`))
    .catch((err) => console.log(`Error: ${err.message}`));*/
  }    

  render() {
    const { classes, nos } = this.props;

    // The storagekey you want to query
    const key = "";

    // The amount and recipient of your send function
    const recipient = "";
    const amount = "";

    const getStorage = { scriptHash, key };
    const send = { amount, asset: gas, recipient };

    // smart contract's scriptHash here
    const scriptHash = "2f228c37687d474d0a65d7d82d4ebf8a24a3fcbc";
    const operation = "9937f74e-1edc-40ae-96ad-1120166eab1b";
    const args = ['ef68bcda-2892-491a-a7e6-9c4cb1a11732'];

    const invoke = { scriptHash, operation, args }; // and testInvoke

  
 /*
  this.props.nos
  .getBalance({ asset: neo })
  .then((balance) => alert(`Balance: ${balance}`))
  .catch((err) => alert(`Error: ${err.message}`));
 */     



    return (
      <React.Fragment>
         <button className={classes.button} onClick={() => this.makecall()}>
          Make Call
        </button>

        <button className={classes.button} onClick={() => this.handleAlert(nos.getAddress())}>
          Get Address
        </button>
        <button
          className={classes.button}
          onClick={() => this.handleAlert(nos.getBalance({ asset: neo }))}
        >
          Get NEO Balance
        </button>
        <button
          className={classes.button}
          onClick={
          //  () => this.handleAlert(nos.getBalance({ asset: gas }))
          console.log("click")
          }
        >
          Get GAS Balance
        </button>
        <button
          className={classes.button}
          onClick={() => this.handleAlert(nos.getBalance({ asset: rpx }))}
        >
          Get RPX Balance
        </button>

      </React.Fragment>
    );
  }
}

NOSActions.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  nos: nosProps.isRequired
};

export default injectNOS(injectSheet(styles)(NOSActions));
