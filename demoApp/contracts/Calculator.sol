// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Calculator {

    uint public result;
    event succ(string msg, uint value);

    function addNum(uint num1, uint num2) public {
        result = num1 + num2;     
        emit succ("done", result);  
        // return num1+num2;
    }

    function subNum(uint num1, uint num2) public pure returns (uint){
        return num1-num2;
    }

    function mulNum(uint num1, uint num2) public pure returns (uint){
        return num1*num2;
    }

    function divNum(uint num1, uint num2) public pure returns (uint){
        return num1/num2;
    }
}