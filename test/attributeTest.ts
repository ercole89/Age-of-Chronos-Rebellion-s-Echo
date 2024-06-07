import { ethers } from 'hardhat';
import { expect } from 'chai';
import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { TimeSquadAria, RMRKTokenAttributesRepository } from '../typechain-types';

async function fixtureAttributesRepository(): Promise<{ parent: TimeSquadAria, attributesRepo: RMRKTokenAttributesRepository, owner: any }> {
    const [owner] = await ethers.getSigners();

    // Deploy TimeSquadAria contract as a parent example
    const collectionMeta = 'ipfs://QmNnn9M8rTbqPrk3rHTfN78sh4E1QLHaEKcSALrvhWfMkE';
    const maxSupply = ethers.MaxUint256;
    const royaltyRecipient = owner.address;
    const royaltyPercentageBps = 1000; // 10%
    const baseTokenURI = 'https://example.com/metadata/';

    const contractFactory = await ethers.getContractFactory('TimeSquadAria');
    const args: [string, typeof maxSupply, string, number, string] = [
        collectionMeta,
        maxSupply,
        royaltyRecipient,
        royaltyPercentageBps,
        baseTokenURI,
    ];
    const parentContract = await contractFactory.deploy(...args);
    await parentContract.waitForDeployment();

    // Add an asset to the parent contract
    await parentContract.addAssetEntry("ipfs://QmAssetMetadata");

    // Deploy RMRKTokenAttributesRepository contract
    const attributesRepoFactory = await ethers.getContractFactory('RMRKTokenAttributesRepository');
    const attributesRepoContract = await attributesRepoFactory.deploy();
    await attributesRepoContract.waitForDeployment();

    return { parent: parentContract as TimeSquadAria, attributesRepo: attributesRepoContract as RMRKTokenAttributesRepository, owner };
}

describe('RMRKTokenAttributesRepository Tests', async () => {
    let parent: TimeSquadAria;
    let attributesRepo: RMRKTokenAttributesRepository;
    let owner: any, addr1: any;

    beforeEach(async function () {
        ({ parent, attributesRepo, owner } = await loadFixture(fixtureAttributesRepository));
        [owner, addr1] = await ethers.getSigners();

        // Grant permissions to mint multiple tokens as owner
        await parent.manageContributor(owner.address, true);

        // Mint a token to addr1
        await parent.connect(owner).setPause(false);
        await parent.connect(owner).mint(owner.address);

        // Add the asset to the minted token
        const tokenId = 1;
        //await parent.connect(owner).addAssetToToken(tokenId, 1, 0); // Assuming assetId = 1
        //await parent.connect(owner).acceptAsset(tokenId, 0, 1); // Accepting the asset
    });

    describe('Attributes Management', async function () {
        it('should set and get integer attribute', async function () {
            const tokenId = 1;
            const key = "Strength";
            const value = 100;

            await attributesRepo.setIntAttribute(await parent.getAddress(), tokenId, key, value);
            const attributeValue = await attributesRepo.getIntAttribute(await parent.getAddress(), tokenId, key);
            expect(attributeValue).to.equal(value);
        });

        it('should set and get multiple integer attributes', async function () {
            const tokenId = 1;
            const keys = ["Strength", "Agility"];
            const values = [100, 80];

            const attributes = keys.map((key, index) => ({ key, value: values[index] }));
            await attributesRepo.setIntAttributes([await parent.getAddress()], [tokenId], attributes);

            const retrievedAttributes = await attributesRepo.getIntAttributes([await parent.getAddress()], [tokenId], keys);
            expect(retrievedAttributes).to.deep.equal(values);
        });
    });
});