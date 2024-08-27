# BARK NFT Project

Welcome to the BARK NFT project! This repository provides a comprehensive guide to deploying and managing NFTs on the Solana blockchain. It includes instructions for creating NFT collections, minting compressed NFTs, and managing metadata.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Folder Structure](#folder-structure)
- [Setup Instructions](#setup-instructions)
- [Prepare Your NFT Assets](#prepare-your-nft-assets)
- [Create an NFT Collection](#create-an-nft-collection)
- [Mint Compressed NFTs](#mint-compressed-nfts)
- [Configuration](#configuration)
- [Additional Tips](#additional-tips)
- [License](#license)

## Introduction

This project outlines the steps to deploy and manage NFTs on the Solana blockchain using the Metaplex and Bubblegum libraries. The setup includes creating an NFT collection and minting compressed NFTs directly to or without a collection.

## Prerequisites

Before you begin, ensure you have the following tools installed and configured:

- **Solana CLI**: For interacting with the Solana blockchain.
- **Rust**: Required for building and deploying smart contracts.
- **Node.js and npm**: For running JavaScript tools.
- **Metaplex CLI**: To manage Candy Machine operations.
- **Sugar CLI**: For managing NFT collections.
- **Umi CLI**: For working with Candy Machine deployments.

## Folder Structure

The project is organized as follows:

```
cnft/
│
├── assets/
│   ├── images/
│   ├── metadata/
│
├── collection/
│   ├── metadata/
│   └── images/
│
├── scripts/
│   ├── create-collection.js
│   ├── mint-compressed-nft.js
│   └── utils.js
│
├── config/
│   ├── umi-config.js
│   ├── metaplex-config.json
│   └── candy-machine-config.json
│
├── node_modules/
│
├── .gitignore
├── package.json
├── README.md
└── LICENSE
```

## Setup Instructions

### 1. Install Dependencies

Run the following commands to install necessary tools:

```sh
# Install Solana CLI
sh -c "$(curl -sSfL https://release.solana.com/v1.18.18/install)"

# Install Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Install Node.js and npm
# Follow instructions at https://nodejs.org/

# Install Metaplex CLI
npm install -g @metaplex/cli

# Install Sugar CLI
cargo install --git https://github.com/sugardao/sugar

# Install Umi CLI
cargo install --git https://github.com/umi/umi
```

### 2. Configure Solana CLI

Set your Solana network to devnet (or testnet/mainnet as needed):

```sh
solana config set --url https://api.devnet.solana.com
```

## Prepare Your NFT Assets

1. **Create and Organize Assets**

   Prepare your images and metadata JSON files. Ensure metadata follows the Metaplex format.

   **Example Metadata JSON (`assets/metadata/nft1.json`):**

   ```json
   {
     "name": "NFT Name",
     "symbol": "",
     "uri": "https://example.com/nft1.json",
     "seller_fee_basis_points": 500,
     "creators": [
       {
         "address": "your-wallet-address",
         "share": 100
       }
     ]
   }
   ```

2. **Upload Assets**

   Upload your assets to a decentralized storage solution (e.g., Arweave, IPFS) and update the `uri` fields in your metadata accordingly.

## Create an NFT Collection

Use the `scripts/create-collection.js` script to create and configure an NFT collection.

**Example Usage:**

```javascript
const createCollection = require('./scripts/create-collection');
createCollection();
```

## Mint Compressed NFTs

Use the `scripts/mint-compressed-nft.js` script to mint a compressed NFT, either to a collection or without one.

**Example Usage:**

```javascript
const mintCompressedNFTToCollection = require('./scripts/mint-compressed-nft');

const leafOwner = 'your-leaf-owner-public-key';
const merkleTree = 'your-merkle-tree-address';
const collectionMint = 'your-collection-mint-address';
const metadata = {
  name: 'My Compressed NFT',
  uri: 'https://example.com/nft-metadata.json',
  sellerFeeBasisPoints: 500,
  creators: [
    { address: 'your-wallet-address', verified: false, share: 100 },
  ],
};

mintCompressedNFTToCollection(leafOwner, merkleTree, collectionMint, metadata);
```

## Configuration

Configuration files are located in the `config/` folder:

- **`umi-config.js`**: Contains Umi configuration.
- **`metaplex-config.json`**: Contains Metaplex configuration.
- **`candy-machine-config.json`**: Contains Candy Machine configuration.

## Additional Tips

- **Testing**: Test your deployment on Solana’s devnet or testnet before launching on the mainnet.
- **Security**: Protect your wallet and private keys. Never share them.
- **Documentation**: Refer to the [Metaplex documentation](https://docs.metaplex.com/) and [Solana documentation](https://docs.solana.com/) for detailed instructions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.