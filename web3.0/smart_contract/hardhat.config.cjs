
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://sepolia.infura.io/v3/p_RcMIlUA077_zugKJoe2NQMAA4H2kT1',
      accounts: ['76fea58082d7063268109303c8fba71da1f83375eb4bb5d8b5efe934bb07c908'],
    },
  },
};