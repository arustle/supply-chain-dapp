
const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "8f77a3e4fb524a2fb417ec03284d0d5e";

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();


module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*" // Match any network id
        },
        rinkeby: {
            provider: () => {
                return new HDWalletProvider(
                    mnemonic,
                    'https://rinkeby.infura.io/v3/' + infuraKey
                );
            },
            network_id: 4
        }
    },
    compilers: {
        solc: {
            version: "0.6.2",
        }
    }
};