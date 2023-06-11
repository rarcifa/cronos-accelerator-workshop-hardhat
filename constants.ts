import * as dotenv from 'dotenv';
dotenv.config();

export const DEPLOYED_CONTRACT_ADDRESS =
  '0x6e74266eAf83EC3f7F6e4Eb7BAe972CDeD4D2EDF'; // needs to be repalced with the deployed contract address
process.env.EPLOYED_CONTRACT_ADDRESS || '';
export const CRONOSCAN_API_KEY = process.env.CRONOSCAN_API_KEY || '';
export const PRIVATE_KEY = process.env.PRIVATE_KEY || '';
export const COINMARKETCAP_API = process.env.COINMARKETCAP_API || '';
export const CRONOS_TESTNET_RPC = 'https://evm-t3.cronos.org';
export const CRONOS_MAINNET_RPC = 'https://evm.cronos.org/';
