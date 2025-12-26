// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Test, console} from "forge-std/Test.sol";
import {PayProof} from "../src/PayProof.sol";

contract PayProofTest is Test {
    PayProof public payproof;
    
    address public alice = address(0x1);
    address public bob = address(0x2);
    
    function setUp() public {
        payproof = new PayProof();
        vm.deal(alice, 10 ether);
        vm.deal(bob, 10 ether);
    }

    function test_RecordPayment() public {
        uint256 amount = 1 ether;
        bytes32 proofHash = keccak256(abi.encodePacked(alice, bob, amount, block.timestamp));
        
        uint256 bobBalanceBefore = bob.balance;
        
        vm.prank(alice);
        payproof.recordPayment{value: amount}(bob, amount, proofHash);
        
        uint256 bobBalanceAfter = bob.balance;
        
        assertEq(bobBalanceAfter, bobBalanceBefore + amount);
        assertTrue(payproof.verifyPayment(proofHash));
    }

    function test_GetPayment() public {
        uint256 amount = 1 ether;
        bytes32 proofHash = keccak256(abi.encodePacked(alice, bob, amount, block.timestamp));
        
        vm.prank(alice);
        payproof.recordPayment{value: amount}(bob, amount, proofHash);
        
        PayProof.Payment memory payment = payproof.getPayment(proofHash);
        
        assertEq(payment.payer, alice);
        assertEq(payment.recipient, bob);
        assertEq(payment.amount, amount);
        assertEq(payment.proofHash, proofHash);
        assertTrue(payment.verified);
    }

    function test_GetUserPayments() public {
        uint256 amount = 1 ether;
        bytes32 proofHash1 = keccak256(abi.encodePacked(alice, bob, amount, block.timestamp, uint256(1)));
        bytes32 proofHash2 = keccak256(abi.encodePacked(alice, bob, amount, block.timestamp, uint256(2)));
        
        vm.startPrank(alice);
        payproof.recordPayment{value: amount}(bob, amount, proofHash1);
        payproof.recordPayment{value: amount}(bob, amount, proofHash2);
        vm.stopPrank();
        
        bytes32[] memory userPayments = payproof.getUserPayments(alice);
        
        assertEq(userPayments.length, 2);
        assertEq(userPayments[0], proofHash1);
        assertEq(userPayments[1], proofHash2);
    }

    function test_RevertWhen_InsufficientValue() public {
        uint256 amount = 1 ether;
        bytes32 proofHash = keccak256(abi.encodePacked(alice, bob, amount, block.timestamp));
        
        vm.prank(alice);
        vm.expectRevert("Insufficient payment");
        payproof.recordPayment{value: 0.5 ether}(bob, amount, proofHash);
    }

    function test_RevertWhen_ZeroAmount() public {
        bytes32 proofHash = keccak256(abi.encodePacked(alice, bob, uint256(0), block.timestamp));
        
        vm.prank(alice);
        vm.expectRevert("Amount must be greater than 0");
        payproof.recordPayment{value: 0}(bob, 0, proofHash);
    }

    function test_RevertWhen_ZeroAddress() public {
        uint256 amount = 1 ether;
        bytes32 proofHash = keccak256(abi.encodePacked(alice, address(0), amount, block.timestamp));
        
        vm.prank(alice);
        vm.expectRevert("Invalid recipient");
        payproof.recordPayment{value: amount}(address(0), amount, proofHash);
    }
}
