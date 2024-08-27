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

This project outlines the steps to deploy and manage NFTs on the Solana blockchain using the Metaplex and Bubblegum libraries. The setup includes creating an NFT collection and minting compressed NFTs.

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
tiered-token-example/
├── assets/
│   ├── images/
│   │   ├── bark-test.png
│   │   └── test-image.png
│   ├── metadata/
│   │   ├── 0.json
│   │   ├── 1.json
│   │   └── test-metadata.json
│   └── scripts/
│       └── generateMetadata.ts
├── keypairs/
│   └── bark-cnft-keypair.json
├── src/
│   └── index.ts
├── scripts/
│   └── generateKeypair.ts
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
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

   **Example Metadata JSON (`assets/metadata/0.json`):**

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
     ],
     "attributes": [
       { "trait_type": "Trait", "value": "Value" }
     ],
     "image": "https://example.com/images/nft1.png",
     "description": "Description of the NFT.",
     "external_url": "https://example.com/nft1",
     "background_color": "#FFFFFF"
   }
   ```

2. **Upload Assets**

   Upload your assets to a decentralized storage solution (e.g., Arweave, IPFS) and update the `uri` fields in your metadata accordingly.

## Create an NFT Collection

Use the `scripts/create-collection.ts` script to create and configure an NFT collection.

**Example Usage:**

```sh
ts-node scripts/create-collection.ts
```

## Mint Compressed NFTs

Use the `scripts/mint-compressed-nft.ts` script to mint a compressed NFT, either to a collection or without one.

**Example Usage:**

```sh
ts-node scripts/mint-compressed-nft.ts
```

Update the script with the required parameters such as `leafOwner`, `merkleTree`, `collectionMint`, and `metadata`.

## Configuration

Configuration files are located in the root directory:

- **`.env`**: Contains environment variables such as network settings and keypair paths.
- **`umi-config.ts`**: Contains Umi configuration.
- **`metaplex-config.json`**: Contains Metaplex configuration.
- **`candy-machine-config.json`**: Contains Candy Machine configuration.

**Example `.env` File:**

```dotenv
# Solana Network Configuration
SOLANA_RPC_URL=https://api.devnet.solana.com
NETWORK=devnet
SOLANA_PROGRAM_ID=YOUR_PROGRAM_ID

# Example API URL and secret key (if applicable)
API_URL=https://api.example.com
SECRET_KEY=mysecretkey

# Keypair
KEYPAIR_PATH=keypairs/bark-cnft-keypair.json
```

## Additional Tips

- **Testing**: Test your deployment on Solana’s devnet or testnet before launching on the mainnet.
- **Security**: Protect your wallet and private keys. Never share them.
- **Documentation**: Refer to the [Metaplex documentation](https://docs.metaplex.com/) and [Solana documentation](https://docs.solana.com/) for detailed instructions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.