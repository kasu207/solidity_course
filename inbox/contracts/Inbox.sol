pragma solidity ^0.4.17; //Specifies the version of Solidity that the code is written with

contract Inbox{ //Defines the new contract that will have methods and variables
    string public message; //instance variables that exist in the contract

    function Inbox(string initialMessage) public{ //functions that will be members of this contract
        message = initialMessage;
    }
    function setMessage(string newMessage) public{
        message = newMessage;
    }
    function getMessage() public view returns(string){
        return message;
    }
}