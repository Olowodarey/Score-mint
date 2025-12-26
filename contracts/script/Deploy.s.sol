// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Script, console} from "forge-std/Script.sol";
import {PayProof} from "../src/PayProof.sol";

contract DeployScript is Script {
    function setUp() public {}

    function run() public returns (PayProof) {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        
        vm.startBroadcast(deployerPrivateKey);
        
        PayProof payproof = new PayProof();
        
        console.log("PayProof deployed to:", address(payproof));
        
        vm.stopBroadcast();
        
        return payproof;
    }
}
