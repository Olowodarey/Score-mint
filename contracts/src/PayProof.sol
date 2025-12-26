// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title PayProof
 * @notice Smart contract for payment proof verification on Base
 * @dev This is a starter template - customize based on your requirements
 */
contract PayProof {
    // Events
    event PaymentVerified(
        address indexed payer,
        address indexed recipient,
        uint256 amount,
        bytes32 proofHash,
        uint256 timestamp
    );

    // Structs
    struct Payment {
        address payer;
        address recipient;
        uint256 amount;
        bytes32 proofHash;
        uint256 timestamp;
        bool verified;
    }

    // State variables
    mapping(bytes32 => Payment) public payments;
    mapping(address => bytes32[]) public userPayments;

    /**
     * @notice Record a payment proof
     * @param recipient The address receiving the payment
     * @param amount The amount paid
     * @param proofHash Hash of the payment proof data
     */
    function recordPayment(
        address recipient,
        uint256 amount,
        bytes32 proofHash
    ) external payable {
        require(recipient != address(0), "Invalid recipient");
        require(amount > 0, "Amount must be greater than 0");
        require(msg.value >= amount, "Insufficient payment");

        Payment memory newPayment = Payment({
            payer: msg.sender,
            recipient: recipient,
            amount: amount,
            proofHash: proofHash,
            timestamp: block.timestamp,
            verified: true
        });

        payments[proofHash] = newPayment;
        userPayments[msg.sender].push(proofHash);

        emit PaymentVerified(msg.sender, recipient, amount, proofHash, block.timestamp);

        // Transfer to recipient
        payable(recipient).transfer(amount);
    }

    /**
     * @notice Get payment details by proof hash
     * @param proofHash The hash of the payment proof
     */
    function getPayment(bytes32 proofHash) external view returns (Payment memory) {
        return payments[proofHash];
    }

    /**
     * @notice Get all payment hashes for a user
     * @param user The user address
     */
    function getUserPayments(address user) external view returns (bytes32[] memory) {
        return userPayments[user];
    }

    /**
     * @notice Verify if a payment exists and is valid
     * @param proofHash The hash of the payment proof
     */
    function verifyPayment(bytes32 proofHash) external view returns (bool) {
        return payments[proofHash].verified;
    }
}
