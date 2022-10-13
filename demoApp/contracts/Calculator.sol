// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Calculator {

    uint public result;

    function addNum(uint num1, uint num2) public returns (uint){
        result = num1 + num2;       
        return num1+num2;
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