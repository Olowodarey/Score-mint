# Smart Contracts

This directory contains the smart contracts for the PayProof Base MiniApp.

## ✅ Setup Complete

The Foundry environment is fully configured and ready to use!

## Structure

- `src/PayProof.sol` - Main payment proof verification contract
- `test/PayProof.t.sol` - Comprehensive test suite (6 tests passing)
- `script/Deploy.s.sol` - Deployment script for Base
- `lib/forge-std/` - Dependencies (v1.12.0)

## Quick Start

### Build & Test
```bash
cd contracts

# Build contracts
forge build

# Run tests
forge test -vv

# Gas report
forge test --gas-report
```

### Deploy to Base

1. **Setup environment:**
```bash
cp .env.example .env
# Add your PRIVATE_KEY and BASESCAN_API_KEY to .env
```

2. **Deploy to Base Sepolia (testnet):**
```bash
forge script script/Deploy.s.sol:DeployScript --rpc-url base_sepolia --broadcast --verify
```

3. **Deploy to Base Mainnet:**
```bash
forge script script/Deploy.s.sol:DeployScript --rpc-url base --broadcast --verify
```

## PayProof Contract Features

- ✅ Record payments with cryptographic proof hashes
- ✅ Verify payments by proof hash
- ✅ Track all user payments
- ✅ Automatic ETH transfers to recipients
- ✅ Event emissions for transparency

### Key Functions

- `recordPayment(address recipient, uint256 amount, bytes32 proofHash)` - Record and execute payment
- `getPayment(bytes32 proofHash)` - Retrieve payment details
- `getUserPayments(address user)` - Get all payments for an address
- `verifyPayment(bytes32 proofHash)` - Check if payment is valid

## Network Configuration

Configured for Base L2:
- **Base Mainnet**: Chain ID 8453 - `https://mainnet.base.org`
- **Base Sepolia**: Chain ID 84532 - `https://sepolia.base.org`

## Resources

- [Base Documentation](https://docs.base.org/)
- [Foundry Book](https://book.getfoundry.sh/)
- [OnchainKit](https://docs.base.org/onchainkit)
