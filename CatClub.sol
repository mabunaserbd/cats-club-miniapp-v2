// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract CatClub {
    mapping(address => uint256) public checkIns;
    mapping(address => uint256) public levels;

    address public owner = 0x56d9bfC36b0431F3E677Ef16685b04AA2Ccd40F4;

    function checkIn() public payable {
        require(msg.value >= 0.00002 ether, "Insufficient ETH");
        checkIns[msg.sender]++;
    }

    function upgrade() public payable {
        require(msg.value >= 0.0003 ether, "Insufficient ETH");
        levels[msg.sender]++;
    }
}