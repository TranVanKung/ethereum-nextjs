pragma solidity >=0.4.22 <0.9.0;

contract Storage {
    // keccak256(key . slot)
    mapping(uint256 => uint256) public aa; // slot 0
    mapping(address => uint256) public bb; // slot 1

    uint256[] public cc; // slot 2

    uint8 public a = 7; // 1 byte
    uint16 public b = 10; // 2 byte
    address public c = 0xD64d0906e92446D4Ed3529EC9C9ece7515429086; // 20 byte
    bool d = true; // 1 byte
    uint64 public e = 15; // 8 byte
    // 32 bytes, all values will stored in slot 3

    uint256 public f = 200; // 32 byte -> slot 4
    uint8 public g = 40; // 1 byte -> slot 5
    uint256 public h = 789; // 32 byte -> slot 6

    constructor() {
        cc.push(1);
        cc.push(10);
        cc.push(100);
        aa[2] = 4;
        aa[3] = 10;
        bb[0xD64d0906e92446D4Ed3529EC9C9ece7515429086] = 100;
    }
}

// 0x000000000000000000000000D64d0906e92446D4Ed3529EC9C9ece75154290860000000000000000000000000000000000000000000000000000000000000001
