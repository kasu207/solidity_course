pragma solidity ^0.4.24;

contract Lottery {
    address public manager;
    address[] public players;       //array von Players
    
    constructor () public {
        manager = msg.sender;
    }
    
    function enter() public payable{
        require(msg.value >.01 ether);          //Bedingung, damit derr Rest des Contracts ausgeführt wird
        
        players.push(msg.sender);               //pusht die adresse des neuen Players in das Player array
    }
    function random() private view  returns(uint){
        return uint(keccak256(abi.encodePacked(block.difficulty, now, players)));
        
    }
    function pickWinner() public restricted {
        require(msg.sender == manager); //nobody cann call winner except/pick the manager
        
        uint index = random() % players.length;
        players[index].transfer(this.balance); //players[0] --> e.g. 0x324324jmf423jmfasd3
        players = new address[] (0); // setzt das players-Array zurück
    }
    modifier restricted() {
        require (msg.sender == manager);
        _;
    }
    
    function getPlayers() public view returns (address[]) {
        return players;
    }
}