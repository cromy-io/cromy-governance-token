const CromyGovernanceToken = artifacts.require('CromyGovernanceToken');

module.exports = function(deployer) {
  deployer.deploy(CromyGovernanceToken);
};
