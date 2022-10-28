const { expect } = require('chai')
const { ethers } = require('hardhat')
const { CRYPTODEVS_NFT_CONTRACT_ADDRESS } = require('../constants')

describe('CryptoDevsDao', function () {
  it('deploys the contract', async () => {
    const FakeNFTMarketplace = await ethers.getContractFactory(
      'FakeNFTMarketplace'
    )
    const fakeNftMarketplace = await FakeNFTMarketplace.deploy()
    await fakeNftMarketplace.deployed()

    const accounts = await ethers.getSigners()
    deployer = accounts[0]
    const cryptoDevsDAO = await ethers.getContractFactory('CryptoDevsDAO')
    const DAO = await cryptoDevsDAO.deploy(
      fakeNftMarketplace.address,
      CRYPTODEVS_NFT_CONTRACT_ADDRESS,
      {
        // This assumes your account has at least 1 ETH in it's account
        // Change this value as you want
        value: ethers.utils.parseEther('1'),
      }
    )
    await DAO.deployed()
  })
})
