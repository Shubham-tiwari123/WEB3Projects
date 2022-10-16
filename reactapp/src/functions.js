import Web3 from "web3";
import CalculatorContract from './Calculator.json';

async function connectWeb3() {
    const provider = new Web3.providers.HttpProvider( "http://127.0.0.1:8545");
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = await CalculatorContract.networks[networkId];
    const instance = new web3.eth.Contract(
        CalculatorContract.abi,
        deployedNetwork.address
    );
    return {accounts, instance}
}

async function connectWeb3Metamask() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    console.log("Injected web3 detected.", accounts, networkId);
    const deployedNetwork = await CalculatorContract.networks[networkId];
    const instance = new web3.eth.Contract(
        CalculatorContract.abi,
        deployedNetwork.address
    );
    return {accounts, instance}
}

async function addFunction(contractInstance, account, num1, num2){
    let res2 = await contractInstance.methods.addNum(Number(num1), Number(num2)).send({from: account});
    console.log("Res:",res2);
    return res2.events.succ.returnValues.value;
}

async function subFunction(contractInstance, account, num1, num2){
    if(num2 > num1){
        let res2 = await contractInstance.methods.subNum(Number(num2), Number(num1)).send({from: account});
        console.log("Res:",res2);
        return res2.events.succ.returnValues.value;
    }else{
        let res2 = await contractInstance.methods.subNum(Number(num1), Number(num2)).send({from: account});
        console.log("Res:",res2);
        return res2.events.succ.returnValues.value;
    }
}

async function mulFunction(contractInstance, account, num1, num2){
    let res2 = await contractInstance.methods.mulNum(Number(num1), Number(num2)).send({from: account});
    console.log("Res:",res2);
    return res2.events.succ.returnValues.value;
}

async function divFunction(contractInstance, account, num1, num2){
    let res2 = await contractInstance.methods.divNum(Number(num1), Number(num2)).send({from: account});
    console.log("Res:",res2);
    return res2.events.succ.returnValues.value;
}

export {connectWeb3, addFunction, subFunction, mulFunction, divFunction, connectWeb3Metamask}