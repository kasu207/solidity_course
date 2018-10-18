pragma solidity ^0.4.24;

//erster contract
contract CampaignFactory {
    address[] public deployedCampaigns;
    
    function createCampaign(uint minimum) public {
        address newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    }
    
    function getDeployedCampaigns() public view returns (address[]){
        return deployedCampaigns;
    }
}

//zweiter Contract
contract Campaign {
    struct Request {   //does not declare instance, it is a definition
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;  //mapping = refrence type
    }

    //variables
    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;
    
     //modifier definition
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    //Constructor
    constructor(uint minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum;
    }
    
    function contribute() public payable {
        require(msg.value >= minimumContribution);
        
        approvers[msg.sender] = true;
    }
    
   function createRequest(string description, uint value, address recipient) public restricted {

       Request memory newRequest = Request({
          description: description,
          value: value,
          recipient: recipient,
          complete: false,
          approvalCount:0
          
       });
       requests.push(newRequest);
   }
   function approveRequest(uint index) public {
        Request storage request = requests[index];

        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

   function finalizeRequest(uint index) public restricted {
       Request storage request = requests[index];
       
       require(request.approvalCount > (approversCount /2));
       require(!request.complete);
       
       request.recipient.transfer(request.value);
       request.complete = true;
   }
}