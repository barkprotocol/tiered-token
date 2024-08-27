// src/index.ts
import * as dotenv from 'dotenv';
import { Connection, Keypair, PublicKey } from '@solana/web3.js';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import axios from 'axios';

dotenv.config();

// Retrieve environment variables
const {
  NETWORK = 'devnet',
  SOLANA_PROGRAM_ID,
  KEYPAIR_PATH,
  API_URL,
  SECRET_KEY
} = process.env;

// Validate required environment variables
if (!SOLANA_PROGRAM_ID || !KEYPAIR_PATH) {
  throw new Error('SOLANA_PROGRAM_ID and KEYPAIR_PATH must be set in environment variables.');
}

// Determine the Solana RPC URL based on the network
const getRpcUrl = (network: string): string => {
  const urls = {
    mainnet: process.env.SOLANA_RPC_URL_MAINNET || 'https://api.mainnet-beta.solana.com',
    devnet: process.env.SOLANA_RPC_URL_DEVNET || 'https://api.devnet.solana.com',
  };
  return urls[network] || urls.devnet;
};

const solanaRpcUrl = getRpcUrl(NETWORK);

// Load keypair from file
const loadKeypair = (): Keypair => {
  try {
    const keypairPath = resolve(__dirname, '../', KEYPAIR_PATH);
    const keypairJSON = readFileSync(keypairPath, 'utf-8');
    const { secretKey } = JSON.parse(keypairJSON);
    return Keypair.fromSecretKey(Uint8Array.from(secretKey));
  } catch (error) {
    throw new Error(`Failed to load keypair from ${KEYPAIR_PATH}: ${error.message}`);
  }
};

const keypair = loadKeypair();

// Create Solana connection
const connection = new Connection(solanaRpcUrl, 'confirmed');

const fetchData = async () => {
  try {
    const programPublicKey = new PublicKey(SOLANA_PROGRAM_ID);
    const accounts = await connection.getProgramAccounts(programPublicKey);

    console.log('Program Accounts:', accounts);

    if (API_URL && SECRET_KEY) {
      const { data } = await axios.get(`${API_URL}/data`, {
        headers: {
          'Authorization': `Bearer ${SECRET_KEY}`
        }
      });
      console.log('API Data:', data);
    } else {
      console.warn('API URL or Secret Key is not set');
    }
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
};

fetchData();
