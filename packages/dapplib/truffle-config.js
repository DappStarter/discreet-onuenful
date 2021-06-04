require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good entire sugar tooth film ring remember universe install clock office two'; 
let testAccounts = [
"0x5294fe1203ca48a802099a7aa1f4076d99106d2e947955752827de01224ce6c2",
"0x2b8f48dc05632cab0d928c512326dcc5e3194ca596407327642191bef84b9369",
"0x7ac019da1a98d4e1e288e4f74d1a9bf036d4ae3dc247a2edbc4a2fe7f85bf031",
"0x0b9357c63ecfc95e98cd8b75db8d989a8dd7882d7a959687cb226ca6134932d1",
"0xd486f1edce37d34cd952eaf8aeec22a9757f6e85c0a865827529e3f25d37a50a",
"0x61f325fc862a846419a66fde6fb0711ad9c54d4d4ec6827e963cb423bd9ac7fc",
"0x1452df71167da67d26656e6aa5bfee315ce633d176c75e17d5998aee8fc040b8",
"0x3d8292f77ccc809b1e8bcdf8f4f5b3a45111500f8237c98d1a1d8fec0c96bfd7",
"0x5ba94026f36bc973155229012c01f103748488d67abeea0d7f6b9380339990d2",
"0x7b7e349879a42c0b1b869d89601cd52fee85cf0c2dcb696af04ddf6706e8aeb2"
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

