// scripts/generateMetadata.ts
import { writeFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';
import { Keypair } from '@solana/web3.js';

interface Metadata {
  name: string;
  symbol: string;
  uri: string;
  seller_fee_basis_points: number;
  creators: { address: string; share: number }[];
  attributes: { trait_type: string; value: string }[];
  image: string;
  description: string;
  external_url: string;
  background_color: string;
}

// Example function to generate metadata
const generateMetadata = (id: number, data: Metadata): void => {
  const metadataPath = resolve(__dirname, '../assets/metadata', `${id}.json`);
  mkdirSync(resolve(__dirname, '../assets/metadata'), { recursive: true });
  writeFileSync(metadataPath, JSON.stringify(data, null, 2));
  console.log(`Metadata for ${id} saved to ${metadataPath}`);
};

// Example usage
const metadataExample: Metadata = {
  name: "TEST NFT 0",
  symbol: "TEST",
  uri: "https://example.com/metadata/0.json",
  seller_fee_basis_points: 500,
  creators: [
    {
      address: "your-wallet-address",
      share: 1000
    }
  ],
  attributes: [
    { trait_type: "Breed", value: "French Bulldog x Tasmanian Devil" },
    { trait_type: "Role", value: "Fearless Leader" },
    { trait_type: "Appearance", value: "Flat Cap, Pinstriped Vest, Bow Tie" },
    { trait_type: "Color", value: "Warm Orange and Brown" },
    { trait_type: "Personality", value: "Bold and Determined" }
  ],
  image: "https://example.com/images/test0.png",
  description: "Test Metadata and NFT",
  external_url: "https://example.com/test0",
  background_color: "#010101"
};

generateMetadata(0, metadataExample);
