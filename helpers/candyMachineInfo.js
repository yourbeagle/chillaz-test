export const candyMachineAddress = "0x76d4fe680c6eee0b1f2b82876b5bf9e5c2b700a39c96e03c41de49d0dbc435f8";
export const collectionName = "ZillaSEGSDAO"; // Case sensitive!
export const collectionCoverUrl = "https://34eysxllah6vjkaxumtl3c37doudrtaikmugjckxzv3lhi5xsbda.arweave.net/3wmJXWsB_VSoF6MmvYt_G6g4zAhTKGSJV812s6O3kEY?ext=png";
export const mode = "dev"; // "dev" or "test" or "mainnet"

export let NODE_URL;
let FAUCET_URL;
if (mode == "dev") {
    NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.devnet.aptoslabs.com";
} else if (mode === "test") {
    NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.testnet.aptoslabs.com";
} else {
    NODE_URL = "https://fullnode.mainnet.aptoslabs.com/v1";
    FAUCET_URL = null;
}