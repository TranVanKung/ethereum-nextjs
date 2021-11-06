pragma solidity >=0.4.22 <0.9.0;

contract Memory {
    function test(uint256 testNum) external pure returns (uint256) {
        assembly {
            let _num := 4
            let _freeMemoryPointer := mload(0x40)
        }

        return testNum;
    }
}
