pragma solidity >=0.4.22 <0.9.0;

// they can not inherit from other smart contracts
// they can only inherit from other interfaces

// they can not declare a constrauctor
// thay can not declare state variable
// all declared functions have to be external

interface IFaucet {
    function addFunds() external payable;

    function withdraw(uint256 withdrawAmount) external payable;
}
