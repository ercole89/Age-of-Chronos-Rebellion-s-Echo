import { ethers } from 'hardhat';
import { expect } from 'chai';
import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import {
  TimeSquadRyker,
  TimeSquadAria,
  RykerRightHand,
  CalculateRecursivelyBalance,
  RMRKCatalogImpl,
} from '../typechain-types';
import * as C from '../scripts/constants';
import '@nomiclabs/hardhat-ethers';
import { HardhatEthersSigner } from '@nomicfoundation/hardhat-ethers/signers';

async function deployContracts() {
  const [owner, addr1]: HardhatEthersSigner[] = await ethers.getSigners();

  // Deploy Parent Contract
  const TimeSquadRyker = await ethers.getContractFactory('TimeSquadRyker');
  const timeSquadRyker = await TimeSquadRyker.deploy(
    C.SQUAD_METADATA_RYKER,
    ethers.MaxUint256,
    owner.address,
    1000,
    C.MINT_ENUMERATE_RYKER,
  );
  await timeSquadRyker.waitForDeployment();

  const TimeSquadAria = await ethers.getContractFactory('TimeSquadAria');
  const timeSquadAria = await TimeSquadAria.deploy(
    C.SQUAD_METADATA_ARIA,
    ethers.MaxUint256,
    owner.address,
    1000,
    C.MINT_ENUMERATE_ARIA,
  );
  await timeSquadAria.waitForDeployment();

    // Deploy Catalog
    const RMRKCatalogAria = await ethers.getContractFactory('RMRKCatalogImpl');
    const catalogAria: RMRKCatalogImpl = await RMRKCatalogAria.deploy(
      C.SQUAD_CATALOG_ARIA_METADATA,
      C.CATALOG_TYPE,
    );
    await catalogAria.waitForDeployment();

  // Deploy Catalog
  const RMRKCatalogRyker = await ethers.getContractFactory('RMRKCatalogImpl');
  const catalogRyker: RMRKCatalogImpl = await RMRKCatalogRyker.deploy(
    C.SQUAD_CATALOG_RYKER_METADATA,
    C.CATALOG_TYPE,
  );
  await catalogRyker.waitForDeployment();

  // Configuring Catalog
  await catalogAria.addPart({
    partId: C.FIXED_PART_PARENT_ID,
    part: {
      itemType: C.PART_TYPE_FIXED,
      z: C.Z_INDEX_BACKGROUND,
      equippable: [],
      metadataURI: C.FIXED_PART_ARIA_METADATA,
    },
  });

  // Configuring Catalog
  await catalogRyker.addPart({
    partId: C.FIXED_PART_PARENT_ID,
    part: {
      itemType: C.PART_TYPE_FIXED,
      z: C.Z_INDEX_BACKGROUND,
      equippable: [],
      metadataURI: C.FIXED_PART_RYKER_METADATA,
    },
  });

  // Add assets to TimeSquadAria using deployed catalog
  const tx1 = await timeSquadAria.addEquippableAssetEntry(
    0n,
    await catalogAria.getAddress(),
    C.ARIA_ASSET_METADATA_URI,
    [C.FIXED_PART_PARENT_ID, C.SQUAD_BODY_SLOT_PART_ID],
  );
  await tx1.wait();

    // Add assets to timeSquadRyker using deployed catalog
    const tx2 = await timeSquadRyker.addEquippableAssetEntry(
        0n,
        await catalogRyker.getAddress(),
        C.RYKER_ASSET_METADATA_URI,
        [C.FIXED_PART_PARENT_ID, C.SQUAD_BODY_SLOT_PART_ID],
      );
      await tx2.wait();

  // Deploy Child Contract
  const RykerRightHand = await ethers.getContractFactory('RykerRightHand');
  const rykerRightHand = await RykerRightHand.deploy(
    C.SQUAD_ITEM_METADATA_RYKER_RIGHT_HAND,
    ethers.MaxUint256,
    owner.address,
    1000,
  );
  await rykerRightHand.waitForDeployment();

  // Deploy Calculate Balance Contract
  const CalculateRecursivelyBalance = await ethers.getContractFactory('CalculateRecursivelyBalance');
  const calculateBalance = await CalculateRecursivelyBalance.deploy();
  await calculateBalance.waitForDeployment();

  const childBody = await rykerRightHand.getAddress();

  // Slot body
  const txBody = await catalogRyker.addPart({
    partId: C.SQUAD_BODY_SLOT_PART_ID,
    part: {
      itemType: C.PART_TYPE_SLOT,
      z: C.Z_INDEX_BODY_ITEMS,
      equippable: [childBody],
      metadataURI: C.SQUAD_ITEM_BODY_SLOT_METADATA,
    },
  });
  await txBody.wait();

  // Add asset
  // Body
  // Set primary asset
  const txChild01_body = await rykerRightHand.addAssetEntry(C.ARIA_ASSET_METADATA_BODY_URI_1);
  await txChild01_body.wait();

  // Set secondary asset
  const txChild02_body = await rykerRightHand.addEquippableAssetEntry(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_BODY,
    ethers.ZeroAddress,
    C.ARIA_ASSET_METADATA_BODY_URI_2,
    [],
  );
  await txChild02_body.wait();

  const txChild03_body = await rykerRightHand.setValidParentForEquippableGroup(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_BODY,
    await timeSquadRyker.getAddress(),
    C.SQUAD_BODY_SLOT_PART_ID,
  );
  await txChild03_body.wait();

  const tx01 = await timeSquadRyker.setAutoAcceptCollection(
    await rykerRightHand.getAddress(),
    true,
  );
  await tx01.wait();

  const tx = await catalogRyker.setEquippableAddresses(C.SQUAD_BODY_SLOT_PART_ID, [childBody]);
  await tx.wait();

  return { owner, addr1, timeSquadRyker,timeSquadAria, rykerRightHand, calculateBalance };
}

describe('TimeSquadRyker and RykerRightHand Tests', function () {
  let owner: HardhatEthersSigner;
  let addr1: HardhatEthersSigner;
  let timeSquadRyker: TimeSquadRyker;
  let timeSquadAria: TimeSquadAria;
  let rykerRightHand: RykerRightHand;
  let calculateBalance: CalculateRecursivelyBalance;

  beforeEach(async function () {
    ({ owner, addr1, timeSquadRyker,timeSquadAria, rykerRightHand, calculateBalance } =
      await loadFixture(deployContracts));

    // Mint two TimeSquadRyker (parent) NFTs for owner
    await timeSquadRyker.manageContributor(owner.address, true); //to mint multiple times
    await timeSquadRyker.mint(owner.address);
    await timeSquadRyker.mint(owner.address);

    // Mint two TimeSquadRyker (parent) NFTs for addr1
    await timeSquadRyker.manageContributor(addr1.address, true); //to mint multiple times
    await timeSquadRyker.connect(addr1).mint(addr1.address);
    await timeSquadRyker.connect(addr1).mint(addr1.address);

        // Mint two timeSquadAria (parent) NFTs for owner
        await timeSquadAria.manageContributor(owner.address, true); //to mint multiple times
        await timeSquadAria.mint(owner.address);
        await timeSquadAria.mint(owner.address);
    
        // Mint two timeSquadAria (parent) NFTs for addr1
        await timeSquadAria.manageContributor(addr1.address, true); //to mint multiple times
        await timeSquadAria.connect(addr1).mint(addr1.address);
        await timeSquadAria.connect(addr1).mint(addr1.address);

    // Mint 17 RykerRightHand (child) NFTs for owner
    for (let i = 0; i < 17; i++) {
      await rykerRightHand.setExternalPermission(owner.address, true);
      await rykerRightHand.mintWithAssets(owner.address, [1, 2]);
    }

    // Verify the tokens were minted correctly
    for (let i = 0; i < 17; i++) {
      const tokenId = await rykerRightHand.tokenOfOwnerByIndex(owner.address, i);
      console.log(`Minted RykerRightHand token ID: ${tokenId.toString()}`);
    }

    // Mint 10 RykerRightHand (child) NFTs for addr1
    for (let i = 0; i < 10; i++) {
      await rykerRightHand.setExternalPermission(addr1.address, true);
      await rykerRightHand.connect(addr1).mintWithAssets(addr1.address, [1, 2]);
    }

    // Verify the tokens were minted correctly
    for (let i = 0; i < 10; i++) {
      const tokenId = await rykerRightHand.tokenOfOwnerByIndex(addr1.address, i);
      console.log(`Minted RykerRightHand token ID: ${tokenId.toString()}`);
    }

    // NestTransferFrom three child tokens into the first parent token for owner
    const collectionParentAddress = await timeSquadRyker.getAddress();
    for (let i = 1; i <= 3; i++) {
      await rykerRightHand.nestTransferFrom(owner.address, collectionParentAddress, i, 1, '0x');
    }

    // NestTransferFrom five child tokens into the second parent token for owner
    for (let i = 4; i <= 8; i++) {
      await rykerRightHand.nestTransferFrom(owner.address, collectionParentAddress, i, 2, '0x');
    }

    // NestTransferFrom seven child token into the first parent token for addr1
    for (let i = 9; i <= 15; i++) {
      await rykerRightHand.nestTransferFrom(
        owner.address,
        collectionParentAddress,
        i,
        3, // First parent token ID for addr1
        '0x',
      );
    }

    // NestTransferFrom two child tokens into the second parent token for addr1
    for (let i = 16; i <= 17; i++) {
      await rykerRightHand.nestTransferFrom(
        owner.address,
        collectionParentAddress,
        i,
        4, // Second parent token ID for addr1
        '0x',
      );
    }

    // NestTransferFrom 1 child token into the first parent token for owner

    await rykerRightHand.connect(addr1).nestTransferFrom(
      addr1.address,
      collectionParentAddress,
      22,
      1, // first parent token ID for addr1
      '0x',
    );
  });

  it('mintChild', async function () {
    await rykerRightHand.setExternalPermission(owner.address, true);
    await rykerRightHand.mintWithAssets(owner.address, [1, 2]);
    expect(await rykerRightHand.balanceOf(owner.address)).to.equal(11);
  });

  it('mintParent', async function () {
    await timeSquadRyker.connect(addr1).mint(addr1.address);
    expect(await timeSquadRyker.balanceOf(addr1.address)).to.equal(3);
  });

  it('balance', async function () {
    // Calculate balance
    console.log('addr1 could be 18 tokens!');
    const directOwnerAddress = addr1.address;
    const collectionParentAddresses = [await timeSquadRyker.getAddress()];
    const childAddress = await rykerRightHand.getAddress();

    const totalSupply = await rykerRightHand.totalSupply();
    console.log('Total Supply:', totalSupply.toString());
    const tokenIds = await calculateBalance.calculateBalance(
      directOwnerAddress,
      collectionParentAddresses,
      childAddress,
    );
    console.log('Total tokens:', tokenIds.length.toString());
    console.log('Token IDs:', tokenIds.map((id) => id.toString()).join(', '));

    // Verify the token IDs
    expect(tokenIds.length).to.equal(18);

    // Verify tokenOfOwnerByIndex in a loop
    for (let i = 0; i < tokenIds.length; i++) {
      const tokenId = tokenIds[i];
      console.log('Token ID at index', i.toString(), ':', tokenId.toString());
    }
  });

  it('balanceMore', async function () {

    // NestTransferFrom 1 child token into the first parent token for owner but for Aria
    const parentAria = await timeSquadAria.getAddress();
    await rykerRightHand.connect(addr1).nestTransferFrom(
      addr1.address,
      parentAria,
      18,  //tokenId da trasferire
      1, // first parent token ID for addr1
      '0x',
    );

    const directOwnerAddress = addr1.address;
    const collectionParentAddresses = [await timeSquadRyker.getAddress()];
    const childAddress = await rykerRightHand.getAddress();

    const totalSupply = await rykerRightHand.totalSupply();
    console.log('Total Supply:', totalSupply.toString());
    const tokenIds = await calculateBalance.calculateBalance(
      directOwnerAddress,
      collectionParentAddresses,
      childAddress,
    );
    console.log('Total tokens:', tokenIds.length.toString());
    console.log('Token IDs:', tokenIds.map((id) => id.toString()).join(', '));



    // Verify the token IDs
    expect(tokenIds.length).to.equal(17);

    const tokenIds2 = await calculateBalance.calculateBalance(
        owner.address,
        collectionParentAddresses,
        childAddress,
      );
      console.log('Total tokens:', tokenIds2.length.toString());
      console.log('Token IDs:', tokenIds2.map((id) => id.toString()).join(', '));


  });
});
