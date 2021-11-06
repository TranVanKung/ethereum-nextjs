pragma solidity >=0.4.22 <0.9.0;
import "./Owned.sol";
import "./Logger.sol";
import "./IFaucet.sol";

// pure, view: - read-only call, no gas fee
// view: it indicates that the function will not alter the storage state in any way
// pure: event more strict, indicating that it won't even read the storage state

// transaction: can generate state changes and require gas fee

// to talk to the node on the network you can make JSON-RPC http calls

// const instance = await Faucet.deployed()
// instance.addFunds({ value: '2000000000000000000', from: accounts[0] })
// instance.addFunds({ value: '2000000000000000000', from: accounts[1] })
// instance.withdraw('500000000000000000', { from: accounts[1] })
// instance.getFunderAtIndex(0)
// instance.getAllFunders()
// instance.test1({from: accounts[1]})

contract Faucet is Owned, Logger, IFaucet {
    // private: can be accessible only within the smart contract
    // internal: can be accessible within smart contract and also derived smart contract
    uint256 public numOfFunders;
    mapping(address => bool) private funders;
    mapping(uint256 => address) private lutFunders;

    modifier limitWithdraw(uint256 withdrawAmount) {
        require(
            withdrawAmount <= 100000000000000000,
            "can not withdraw more than 0.1 ether"
        );
        _;
    }

    // this is special function, it's called when you make tx that doesn't specify function's name to call
    // external function are part of the contract interface which mean they can be called via contracts and other tx
    receive() external payable {}

    function emitLog() public pure override returns (bytes32) {
        return "Hello World";
    }

    function transferOwnership(address newOwner) external onlyOwner {
        owner = newOwner;
    }

    function addFunds() external payable override {
        address funder = msg.sender;

        if (!funders[funder]) {
            uint256 index = numOfFunders++;
            funders[funder] = true;
            lutFunders[numOfFunders] = funder;
        }
    }

    function test1() external onlyOwner {
        // some managing stuff that only admin should have access to
    }

    function test2() external onlyOwner {
        // some managing stuff that only admin should have access to
    }

    function withdraw(uint256 withdrawAmount)
        external
        payable
        override
        limitWithdraw(withdrawAmount)
    {
        payable(msg.sender).transfer(withdrawAmount);
    }

    function getAllFunders() external view returns (address[] memory) {
        address[] memory _funders = new address[](numOfFunders);

        for (uint256 i = 0; i < numOfFunders; i++) {
            _funders[i] = lutFunders[i];
        }

        return _funders;
    }

    // function getFunderAtIndex(uint8 index) external view returns (address) {
    //     return funders[index];
    // }
}
