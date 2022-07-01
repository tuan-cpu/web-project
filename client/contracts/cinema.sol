// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;

contract Cinema {
    uint public numberOfFunders;
    mapping (uint256 => address) lutFunders;
    mapping (address => bool) funders;

    receive() external payable{}

    function addFunds() external payable{
        address funder = msg.sender;
        if(!funders[funder]){
            uint256 index = numberOfFunders++;
            funders[funder] = true;
            lutFunders[index] = funder;
        }
    }

    function getFundersIndex(uint256 index) external view returns(address){
        return lutFunders[index];
    }

    function getAllFunders()external view returns(address[] memory){
        address[] memory _funders = new address[](numberOfFunders);

        for(uint256 i=0;i<numberOfFunders;i++){
            _funders[i] = lutFunders[i];
        }
        return _funders;
    }

    function withdraw(uint256 withdrawAmount) external limitWithdraw(withdrawAmount){
        payable(msg.sender).transfer(withdrawAmount);
    }

    modifier limitWithdraw(uint256 withdrawAmount){
        require(withdrawAmount <= 1e18,"Cannot withdraw more than 1ETH");
        _;
    }
}