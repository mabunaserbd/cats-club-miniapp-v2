// Optional Node.js backend to verify ETH payments
const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider("https://mainnet.base.org");

async function verify(txHash, expectedAmount, toAddress) {
  const tx = await provider.getTransaction(txHash);
  return tx && tx.to.toLowerCase() === toAddress.toLowerCase() &&
         tx.value.gte(ethers.BigNumber.from(expectedAmount));
}

module.exports = verify;