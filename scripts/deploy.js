const main = async () => {
	const chainBattlesContractFactory = await hre.ethers.getContractFactory('ChainBattles');

	const chainBattlesContract = await chainBattlesContractFactory.deploy();

	await chainBattlesContract.deployed();
	console.log("Contract deployed to:", chainBattlesContract.address);
};

const runMain = async () => {
	try {
		await main();
		process.exit(0);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

runMain();