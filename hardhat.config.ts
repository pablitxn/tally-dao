import "@nomiclabs/hardhat-etherscan"
import "@nomiclabs/hardhat-waffle"
import "@typechain/hardhat"
import "hardhat-gas-reporter"
// eslint-disable-next-line import/no-extraneous-dependencies
import "solidity-coverage"

module.exports = {
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: { enabled: true, runs: 200 },
    },
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/27zTE6GnrY7RsTBlOFBHNAtJRk5",
      accounts: [
        "aac07909424f321440bb91472d67e278b2532b7d5c82633bcba0eaef571fe3de",
      ],
    },
    test: {
      url: "http://localhost:8545",
    },
    development: {
      url: "http://localhost:7545",
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./abis",
  },
  mocha: {
    timeout: 20000,
  },
}
