const { ethers } = require("hardhat");

async function main() {
  const multiSigContractFactory = await ethers.getContractFactory(
    "MultiSigWalletFactory"
  );
  const deployedMultiSigContract = await multiSigContractFactory.deploy();
  await deployedMultiSigContract.deployed();

  console.log("MultiSig Contract Address:", deployedMultiSigContract.address);
  console.log("Sleeping.....");
  await sleep(10000);
  await hre.run("verify:verify", {
    address: deployedMultiSigContract.address,
    constructorArguments: [],
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
