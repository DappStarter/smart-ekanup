require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict help frame tribe stone remember mad solid ice light army gas'; 
let testAccounts = [
"0xcc188befadc65f51c6cb9536aff5d91e3eca7afcd810b8d7c804dd56a5f206d3",
"0x870fd78568bb14dbd7ce0165e29a858b964a0a9c6eb2dcdb104f242e27904780",
"0x1465a5bf2c4e77b08ae1124ddf5712a7760d07a02ce31c2e556d52a83a497d3a",
"0x8bf815d9fc53ea8d77ababd74096a44cbc3bce69f52e6b6dee78775563285bea",
"0x749ab89b3d0059ad784ce57a8359c28db6af9417122d50313fc7e10197304635",
"0x5465366abfc26fddca105719bdbdba775f9a83ef0e217be5e9932c6271b03c19",
"0x50528c02938b71b9ceaaef57696ca1f4f175efcd3cc97a4b2f94fe0f5a241c02",
"0xf45f36e2eb4d4552491c37065b5b5e6b93b3a6cd5aca2eab034f71e099eeff67",
"0xa6f943db9f4d01927070df768b02c706ad9de92101edf72efb31988542837ea2",
"0x9b4be76387244b98da86a5a2068b2eb89027219aedd8e7ad0932ea7e47f00de3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

