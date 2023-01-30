require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require("hardhat-interface-generator");
require('hardhat-contract-sizer');
require('hardhat-log-remover');
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version:"0.8.17",
    settings: {
      optimizer:{
        enabled:true,
        runs:200
      }
    }
  },
  networks:{
    bsctestnet:{
      url:"https://data-seed-prebsc-2-s3.binance.org:8545",
      accounts:[process.env.PV_KEY],
      
    },
    bsc: {
      url: "https://bsc-dataseed3.binance.org/",
      accounts:[process.env.PV_KEY],
    },
  }
};
