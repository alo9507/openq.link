var ItemManager = artifacts.require("ItemManager");

module.exports = function (deployer) {
  // deployment steps
  deployer.deploy(ItemManager);
};