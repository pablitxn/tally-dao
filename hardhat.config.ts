import "@nomiclabs/hardhat-etherscan"
import "@nomiclabs/hardhat-waffle"
import "@typechain/hardhat"
import "hardhat-gas-reporter"
import "dotenv/config"
import "hardhat-deploy"
import { HardhatUserConfig } from "hardhat/config"
// eslint-disable-next-line import/no-extraneous-dependencies
import "solidity-coverage"

const rinkebyUrl =
  process.env.RINKEBY_URL || "https://rinkeby.infura.io/v3/your-api-key"
const accountPrivateKey = process.env.ACCOUNT_PRIVATE_KEY || "privateKey"

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: { enabled: true, runs: 200 },
    },
  },
  networks: {
    hardhat: {},
    rinkeby: {
      url: rinkebyUrl,
      accounts: [accountPrivateKey],
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

export default config
