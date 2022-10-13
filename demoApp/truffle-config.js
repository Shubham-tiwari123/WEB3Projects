module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!

  contracts_build_directory: "../webapp/client/src/contracts",
  compilers:{
    solc:{
      version: "^0.8.0"
    }
  },
  
  networks: {
    develop: {
      port: 8545
    }
  }
};
