import { ethers, run, network } from 'hardhat';
import {
  TimeSquadAria,
  TimeSquadLuna,
  TimeSquadRyker,
  TimeSquadThaddeus,
  AriaBody,
  RMRKCatalogImpl
} from '../typechain-types';
import { delay, isHardhatNetwork } from './utils';
import {
  deployChild,
  deployManager,
  configureCatalog,
  addAssetsAria,
  addAssetsLuna,
  addAssetsRyker,
  addAssetsThaddeus,
  setEquippableAddresses,
  setExternalPermission,
  mintChildNFT,
  configureManager
} from './04_utilsFunctions-others';
import * as C from './constants';

async function main() {
  const [deployer, addr1, addr2] = await ethers.getSigners();
  console.log('Deployer:', deployer.address);
  console.log('Addr1:', addr1 ? addr1.address : 'undefined');
  console.log('Addr2:', addr2 ? addr2.address : 'undefined');


  const contractParentAddresses: { [key: string]: string } = {
    "Aria": "0xf6F0130799de29cf1A402290766a1C9c95B6d017",
    "Luna": "0xe429fb9fD5dcFe9B148f0E6FF922C8A6d12B4f53",
    "Ryker": "0x972009B42a51CaCd43e059a2C56e92541EF2Bc2f",
    "Thaddeus": "0xE7AeB43Ed1dE5D357F190847830b2a9f31E0C032"
};

const contractCatalogAddresses: { [key: string]: string } = {
    "Aria": "0xA9390e1009aBC0B3fA9cDfcCaC379CF15DecA3F6",
    "Luna": "0xCb7aE692aa7C042715FCA463789F1aC91924a2CA",
    "Ryker": "0x6ad1c0226f5ecc90e109b57c75af3Db7b5ad74aC",
    "Thaddeus": "0xDDc1Da0373fd9494a6d599E7520543953BA94672"
};

const TimeSquadAria: TimeSquadAria = await ethers.getContractAt('TimeSquadAria', contractParentAddresses.Aria, deployer);
const TimeSquadLuna: TimeSquadLuna = await ethers.getContractAt('TimeSquadLuna', contractParentAddresses.Luna, deployer);
const TimeSquadRyker: TimeSquadRyker = await ethers.getContractAt('TimeSquadRyker', contractParentAddresses.Ryker, deployer);
const TimeSquadThaddeus: TimeSquadThaddeus = await ethers.getContractAt('TimeSquadThaddeus', contractParentAddresses.Thaddeus, deployer);



  const ariaBody = await deployChild('AriaBody', C.SQUAD_ITEM_METADATA_ARIA_BODY);
  await delay(1000)
  const ariaHead = await deployChild('AriaHead', C.SQUAD_ITEM_METADATA_ARIA_HEAD);
  await delay(1000)
  const ariaLeftHand = await deployChild('AriaLeftHand', C.SQUAD_ITEM_METADATA_ARIA_LEFT_HAND);
  await delay(1000)
  const ariaRightHand = await deployChild('AriaRightHand', C.SQUAD_ITEM_METADATA_ARIA_RIGHT_HAND);
  await delay(10000)
  const lunaBody = await deployChild('LunaBody', C.SQUAD_ITEM_METADATA_LUNA_BODY);
  await delay(1000)
  const lunaHead = await deployChild('LunaHead', C.SQUAD_ITEM_METADATA_LUNA_HEAD);
  await delay(1000)
  const lunaLeftHand = await deployChild('LunaLeftHand', C.SQUAD_ITEM_METADATA_LUNA_LEFT_HAND);
  await delay(1000)
  const lunaRightHand = await deployChild('LunaRightHand', C.SQUAD_ITEM_METADATA_LUNA_RIGHT_HAND);
  await delay(10000)
  const rykerBody = await deployChild('RykerBody', C.SQUAD_ITEM_METADATA_RYKER_BODY);
  await delay(1000)
  const rykerHead = await deployChild('RykerHead', C.SQUAD_ITEM_METADATA_RYKER_HEAD);
  await delay(1000)
  const rykerLeftHand = await deployChild('RykerLeftHand', C.SQUAD_ITEM_METADATA_RYKER_LEFT_HAND);
  await delay(1000)
  const rykerRightHand = await deployChild('RykerRightHand', C.SQUAD_ITEM_METADATA_RYKER_RIGHT_HAND);
  await delay(10000)
  const thaddeusBody = await deployChild('ThaddeusBody', C.SQUAD_ITEM_METADATA_THADDEUS_BODY);
  await delay(1000)
  const thaddeusHead = await deployChild('ThaddeusHead', C.SQUAD_ITEM_METADATA_THADDEUS_HEAD);
  await delay(1000)
  const thaddeusLeftHand = await deployChild('ThaddeusLeftHand', C.SQUAD_ITEM_METADATA_THADDEUS_LEFT_HAND);
  await delay(1000)
  const thaddeusRightHand = await deployChild('ThaddeusRightHand', C.SQUAD_ITEM_METADATA_THADDEUS_RIGHT_HAND);
  await delay(10000)

  const catalogAria: RMRKCatalogImpl = await ethers.getContractAt('RMRKCatalogImpl', contractCatalogAddresses.Aria, deployer);
  const catalogLuna: RMRKCatalogImpl = await ethers.getContractAt('RMRKCatalogImpl', contractCatalogAddresses.Luna, deployer);
  const catalogRyker: RMRKCatalogImpl = await ethers.getContractAt('RMRKCatalogImpl', contractCatalogAddresses.Ryker, deployer);
  const catalogThaddeus: RMRKCatalogImpl = await ethers.getContractAt('RMRKCatalogImpl', contractCatalogAddresses.Thaddeus, deployer);



  const manager = await deployManager();
  await delay(5000)
  await configureManager(TimeSquadAria, [ariaBody, ariaHead, ariaLeftHand, ariaRightHand], manager);
  await delay(5000)
  await configureManager(TimeSquadLuna, [lunaBody, lunaHead, lunaLeftHand, lunaRightHand], manager);
  await delay(5000)
  await configureManager(TimeSquadRyker, [rykerBody, rykerHead, rykerLeftHand, rykerRightHand], manager);
  await delay(5000)
  await configureManager(TimeSquadThaddeus, [thaddeusBody, thaddeusHead, thaddeusLeftHand, thaddeusRightHand], manager);
  await delay(5000)


  await configureCatalog(catalogAria,
    await ariaBody.getAddress(),
    await ariaHead.getAddress(),
    await ariaLeftHand.getAddress(),
    await ariaRightHand.getAddress(),
    C.FIXED_PART_ARIA_METADATA);
  await delay(5000)

  await configureCatalog(
    catalogLuna,
    await lunaBody.getAddress(),
    await lunaHead.getAddress(),
    await lunaLeftHand.getAddress(),
    await lunaRightHand.getAddress(),
    C.FIXED_PART_LUNA_METADATA
  );
  await delay(5000)

  await configureCatalog(
    catalogRyker,
    await rykerBody.getAddress(),
    await rykerHead.getAddress(),
    await rykerLeftHand.getAddress(),
    await rykerRightHand.getAddress(),
    C.FIXED_PART_RYKER_METADATA
  );
  await delay(5000)

  await configureCatalog(
    catalogThaddeus,
    await thaddeusBody.getAddress(),
    await thaddeusHead.getAddress(),
    await thaddeusLeftHand.getAddress(),
    await thaddeusRightHand.getAddress(),
    C.FIXED_PART_THADDEUS_METADATA
  );
  await delay(5000)



  await addAssetsAria(TimeSquadAria, ariaBody, ariaHead, ariaLeftHand, ariaRightHand);
  console.log("Add Asset Aria complete")
  await delay(5000)
  await addAssetsLuna(TimeSquadLuna, lunaBody, lunaHead, lunaLeftHand, lunaRightHand);
  console.log("Add Asset Luna complete")
  await delay(5000)
  await addAssetsRyker(TimeSquadRyker, rykerBody, rykerHead, rykerLeftHand, rykerRightHand);
  console.log("Add Asset Ryker complete")
  await delay(5000)
  await addAssetsThaddeus(TimeSquadThaddeus, thaddeusBody, thaddeusHead, thaddeusLeftHand, thaddeusRightHand);
  console.log("Add Asset Thaddeus complete")
  await delay(20000)

  const tx01 = await TimeSquadAria.setAutoAcceptCollection(await ariaBody.getAddress(), true);
  await tx01.wait();
  await delay(2000)

  const tx02 = await TimeSquadAria.setAutoAcceptCollection(await ariaHead.getAddress(), true);
  await tx02.wait();
  await delay(2000);

  const tx03 = await TimeSquadAria.setAutoAcceptCollection(await ariaLeftHand.getAddress(), true);
  await tx03.wait();
  await delay(2000);

  const tx04 = await TimeSquadAria.setAutoAcceptCollection(await ariaRightHand.getAddress(), true);
  await tx04.wait();
  await delay(2000);

  const tx05 = await TimeSquadLuna.setAutoAcceptCollection(await lunaBody.getAddress(), true);
  await tx05.wait();
  await delay(2000);

  const tx06 = await TimeSquadLuna.setAutoAcceptCollection(await lunaHead.getAddress(), true);
  await tx06.wait();
  await delay(2000);

  const tx07 = await TimeSquadLuna.setAutoAcceptCollection(await lunaLeftHand.getAddress(), true);
  await tx07.wait();
  await delay(2000);

  const tx08 = await TimeSquadLuna.setAutoAcceptCollection(await lunaRightHand.getAddress(), true);
  await tx08.wait();
  await delay(2000);


  //da qui
  const tx09 = await TimeSquadRyker.setAutoAcceptCollection(await rykerBody.getAddress(), true);
  await tx09.wait();
  await delay(2000);

  const tx10 = await TimeSquadRyker.setAutoAcceptCollection(await rykerHead.getAddress(), true);
  await tx10.wait();
  await delay(2000);

  const tx11 = await TimeSquadRyker.setAutoAcceptCollection(await rykerLeftHand.getAddress(), true);
  await tx11.wait();
  await delay(2000);

  const tx12 = await TimeSquadRyker.setAutoAcceptCollection(await rykerRightHand.getAddress(), true);
  await tx12.wait();
  await delay(2000);

  const tx13 = await TimeSquadThaddeus.setAutoAcceptCollection(await thaddeusBody.getAddress(), true);
  await tx13.wait();
  await delay(2000);

  const tx14 = await TimeSquadThaddeus.setAutoAcceptCollection(await thaddeusHead.getAddress(), true);
  await tx14.wait();
  await delay(2000);

  const tx15 = await TimeSquadThaddeus.setAutoAcceptCollection(await thaddeusLeftHand.getAddress(), true);
  await tx15.wait();
  await delay(2000);

  const tx16 = await TimeSquadThaddeus.setAutoAcceptCollection(await thaddeusRightHand.getAddress(), true);
  await tx16.wait();
  await delay(2000);

  console.log("SetAutoAcceptCollection complete");

  await delay(10000)
  await setEquippableAddresses(catalogAria, await ariaBody.getAddress(), await ariaHead.getAddress(), await ariaLeftHand.getAddress(), await ariaRightHand.getAddress());
  await delay(10000);

  await setEquippableAddresses(catalogLuna, await lunaBody.getAddress(), await lunaHead.getAddress(), await lunaLeftHand.getAddress(), await lunaRightHand.getAddress());
  await delay(10000);

  await setEquippableAddresses(catalogRyker, await rykerBody.getAddress(), await rykerHead.getAddress(), await rykerLeftHand.getAddress(), await rykerRightHand.getAddress());
  await delay(10000);

  await setEquippableAddresses(catalogThaddeus, await thaddeusBody.getAddress(), await thaddeusHead.getAddress(), await thaddeusLeftHand.getAddress(), await thaddeusRightHand.getAddress());
  await delay(10000);


  console.log('Deployment complete!');
  await delay(10000);



  await setExternalPermission(ariaBody, deployer.address, true);
  await setExternalPermission(ariaHead, deployer.address, true);
  await setExternalPermission(ariaLeftHand, deployer.address, true);
  await setExternalPermission(ariaRightHand, deployer.address, true);
  await delay(10000);
  await setExternalPermission(lunaBody, deployer.address, true);
  await setExternalPermission(lunaHead, deployer.address, true);
  await setExternalPermission(lunaLeftHand, deployer.address, true);
  await setExternalPermission(lunaRightHand, deployer.address, true);
  await delay(10000);
  await setExternalPermission(rykerBody, deployer.address, true);
  await setExternalPermission(rykerHead, deployer.address, true);
  await setExternalPermission(rykerLeftHand, deployer.address, true);
  await setExternalPermission(rykerRightHand, deployer.address, true);
  await delay(10000);
  await setExternalPermission(thaddeusBody, deployer.address, true);
  await setExternalPermission(thaddeusHead, deployer.address, true);
  await setExternalPermission(thaddeusLeftHand, deployer.address, true);
  await setExternalPermission(thaddeusRightHand, deployer.address, true);
  await delay(10000);

  //await mintChildNFT(ariaBody, deployer.address);
  //await mintChildNFT(ariaHead, deployer.address);
  await mintChildNFT(ariaLeftHand, deployer.address);
  //await mintChildNFT(ariaRightHand, deployer.address);
  await delay(1000);
  //await mintChildNFT(lunaBody, deployer.address);
  //await mintChildNFT(lunaHead, deployer.address);
  await mintChildNFT(lunaLeftHand, deployer.address);
  //await mintChildNFT(lunaRightHand, deployer.address);
  await delay(1000);
  //await mintChildNFT(rykerBody, deployer.address);
  //await mintChildNFT(rykerHead, deployer.address);
  await mintChildNFT(rykerLeftHand, deployer.address);
  //await mintChildNFT(rykerRightHand, deployer.address);
  await delay(1000);
  //await mintChildNFT(thaddeusBody, deployer.address);
  //await mintChildNFT(thaddeusHead, deployer.address);
  await mintChildNFT(thaddeusLeftHand, deployer.address);
  //await mintChildNFT(thaddeusRightHand, deployer.address);
  await delay(1000);

  console.log('Minted child with id 1');

  //mintro altri parenti
  await TimeSquadAria.manageContributor(deployer,true);
  await TimeSquadLuna.manageContributor(deployer,true);
  await TimeSquadRyker.manageContributor(deployer,true);
  await TimeSquadThaddeus.manageContributor(deployer,true);
  console.log(" fine")

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
