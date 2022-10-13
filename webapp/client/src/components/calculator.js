import { Input,  Button } from 'antd';
import React, { useState } from "react";

export default function Calculator({account, contractInstance}){
    // console.log("account:", account);
    // console.log("instance:", contractInstance.methods);
    const [size, setSize] = useState('large');
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);


    async function calculateRes(operationType){
        switch (operationType) {
            case "+":
                console.log("Plus operation");
                let res2 = await contractInstance.methods.addNum(Number(num1), Number(num2)).call({from: account });
                console.log("Res:",res2);
                setResult(res2)
                break;

            case "-":
                console.log("Minus operation");
                let res3 = await contractInstance.methods.subNum(Number(num2), Number(num1)).call({from: account });
                console.log("Res:",res3);
                setResult(res3)
                break;

            case "*":
                console.log("Mul operation");
                break;

            case "/":
                console.log("Divide operation");
                break;
        }
    }

    return(
        <>
            <h2 style={{textAlign: "center"}}>
                WEB3 Calculator
            </h2>
            {/* <Input /> */}
            <div style={{ height: "400px", width: "300px", border: "2px solid grey", marginLeft: "35%", marginRight: "25%"}}>
                <h5>Number 1:</h5>
                <Input style={{height: "50px"}} placeholder={"Enter First Number !"} onChange={(e)=>setNum1(e.target.value)}/>
                <h5 style={{marginTop: "10px"}}>Number 2:</h5>
                <Input style={{height: "50px"}} placeholder={"Enter Second Number !"} onChange={(e)=>setNum2(e.target.value)}/>
                <h5 style={{marginTop: "10px"}}>Result:</h5>
                <Input style={{height: "50px"}} placeholder={result} />
                <br/> <br/>
                
                <Button type="primary" size={size} style={{marginLeft: "10px"}} onClick={()=>calculateRes("+")}>
                    +
                </Button>

                <Button type="primary" size={size} style={{marginLeft: "20px"}} onClick={()=>calculateRes("-")}>
                    -
                </Button>
                
                <Button type="primary" size={size} style={{marginLeft: "20px"}} onClick={()=>calculateRes("*")}>
                    X
                </Button>

                <Button type="primary" size={size} style={{marginLeft: "20px"}} onClick={()=>calculateRes("/")} >
                    /
                </Button>

            </div>
        </>
    )
}