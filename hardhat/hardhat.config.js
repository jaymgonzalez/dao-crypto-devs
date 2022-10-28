require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config({ path: '.env' })
require('hardhat-gas-reporter')

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY

module.exports = {
  solidity: '0.8.4',
  networks: {
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
    hardhat: {
      chainId: 31337,
      gasPrice: 130000000000,
    },
  },
  gasReporter: {
    enabled: true,
    currency: 'USD',
    outputFile: 'gas-report.txt',
    noColors: true,
    coinmarketcap: COINMARKETCAP_API_KEY,
    token: 'ETH',
  },
}
