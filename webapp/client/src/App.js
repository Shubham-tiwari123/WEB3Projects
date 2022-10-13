import React, { useEffect,useState } from "react";
import Calculator from "./components/calculator";
import CalculatorContract from './contracts/Calculator.json';
import "./App.css";
import getWeb3 from "./getWeb3";


function App() {

  const [contractInstance, setContract] = useState(null)
  const [accounts, setAccounts] = useState()

  useEffect(()=>{ 
    async function connect(){
      try {
        const web3 = await getWeb3();
        const accounts = await web3.eth.getAccounts();
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = await CalculatorContract.networks[networkId];
        const instance = new web3.eth.Contract(
            CalculatorContract.abi,
            deployedNetwork.address
           
        );
        setAccounts(accounts);
        setContract(instance);
      } catch (error) {
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`,
        );
        console.log(error);
      }
    }
    connect();
  },[])


  return (
      <div id="App" >
        <div className="container">
          { contractInstance == null ? 
          <>
            <h2 style={{textAlign: "center"}}> Trying to connect with web3Provider </h2>
          </> :
          <>
          <Calculator contractInstance={contractInstance} account={accounts[0]}/>
          </>}
        </div>
      </div>
  );
}

export default App;
