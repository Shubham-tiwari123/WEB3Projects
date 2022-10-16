const {createInstance} = require('./connection.js')

async function addNumbers(num1, num2){
    const {instance, accounts} = await createInstance();
    const res = await instance.methods.addNum(num1, num2).send({from: accounts[0] });
    // const res2 = await instance.methods.addNum(num1, num2).call({from: accounts[0] });

    console.log(res);
}

addNumbers(1, 2);