require('dotenv').config();

const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    ropsten: {
      provider: () => new HDWalletProvider({
        mnemonic: {
          phrase: process.env.MNEMONIC
        },
        providerOrUrl: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`
      }),
      network_id: 3,
      networkCheckTimeout: 10000
    },
    mainnet: {
      provider: () => new HDWalletProvider({
        mnemonic: {
          phrase: process.env.MNEMONIC
        },
        providerOrUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`
      }),
      network_id: 1,
      networkCheckTimeout: 10000
    },
  },

  compilers: {
    solc: {
      version: "0.8.3",
      settings: {
       optimizer: {
         enabled: false,
         runs: 200
       },
       evmVersion: "byzantium"
      }
    }
  }
};
