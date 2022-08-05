# tally-dao

## **Getting Started**

### **Prerequisites**

```bash
node --version
# v16.16.0
```

### Installation

Clone the repository:

```bash
git clone git@github.com:pablitxn/tally-dao.git
```

Install npm packages:

```bash
npm install
```

## Setup the application

Set enviroment variables in `.env` file

```bash
ROPSTEN_URL="https://ropsten.infura.io/v3/{INFURA_ID}"
ROPSTEN_PRIVATE_KEY="your-private-key"
```

## Compile contrats

```bash
npx hardhat compile
```

## Deploy contracts

```bash
npx hardhat run scripts/deploy.ts --network ropsten
```
