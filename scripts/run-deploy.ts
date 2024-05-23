import { ethers, run, network } from 'hardhat';
import {
  ParentSample,
  ChildSample,
  AgeOfChronosManager,
  RMRKCatalogImpl
} from '../typechain-types';
import { delay, isHardhatNetwork } from './utils';
import {
  deployParent,
  deployChild,
  deployManager,
  deployCatalog,
  configureCatalog,
  addAssets,
  setEquippableAddresses,
  setExternalPermission,
  nestTransferChildToParent,
  verifyEquippableStatus,
  equipChildOnParent,
  mintParentNFT,
  mintChildNFT,
  readAssets,
  addAssetToChildToken,
  configureManager
} from './utilsFunctions';
import * as C from './constants';

async function main() {
  const [deployer, addr1, addr2] = await ethers.getSigners();
  console.log('Deployer:', deployer.address);
  console.log('Addr1:', addr1 ? addr1.address : 'undefined');
  console.log('Addr2:', addr2 ? addr2.address : 'undefined');

  const TimeSquadAria = await deployParent('TimeSquadAria', C.SQUAD_METADATA_ARIA, C.MINT_ENUMERATE_ARIA);
  const TimeSquadLuna = await deployParent('TimeSquadLuna', C.SQUAD_METADATA_LUNA, C.MINT_ENUMERATE_LUNA);
  const TimeSquadRyker = await deployParent('TimeSquadRyker', C.SQUAD_METADATA_RYKER, C.MINT_ENUMERATE_RYKER);
  const TimeSquadThaddeus = await deployParent('TimeSquadThaddeus', C.SQUAD_METADATA_THADDEUS, C.MINT_ENUMERATE_THADDEUS);
  await delay(10000)


  const ariaBody = await deployChild('AriaBody', C.SQUAD_ITEM_METADATA_ARIA_BODY);
  const ariaHead = await deployChild('AriaHead', C.SQUAD_ITEM_METADATA_ARIA_HEAD);
  const ariaLeftHand = await deployChild('AriaLeftHand', C.SQUAD_ITEM_METADATA_ARIA_LEFT_HAND);
  const ariaRightHand = await deployChild('AriaRightHand', C.SQUAD_ITEM_METADATA_ARIA_RIGHT_HAND);
  await delay(10000)
  const lunaBody = await deployChild('LunaBody', C.SQUAD_ITEM_METADATA_LUNA_BODY);
  const lunaHead = await deployChild('LunaHead', C.SQUAD_ITEM_METADATA_LUNA_HEAD);
  const lunaLeftHand = await deployChild('LunaLeftHand', C.SQUAD_ITEM_METADATA_LUNA_LEFT_HAND);
  const lunaRightHand = await deployChild('LunaRightHand', C.SQUAD_ITEM_METADATA_LUNA_RIGHT_HAND);
  await delay(10000)
  const rykerBody = await deployChild('RykerBody', C.SQUAD_ITEM_METADATA_RYKER_BODY);
  const rykerHead = await deployChild('RykerHead', C.SQUAD_ITEM_METADATA_RYKER_HEAD);
  const rykerLeftHand = await deployChild('RykerLeftHand', C.SQUAD_ITEM_METADATA_RYKER_LEFT_HAND);
  const rykerRightHand = await deployChild('RykerRightHand', C.SQUAD_ITEM_METADATA_RYKER_RIGHT_HAND);
  await delay(10000)
  const thaddeusBody = await deployChild('ThaddeusBody', C.SQUAD_ITEM_METADATA_THADDEUS_BODY);
  const thaddeusHead = await deployChild('ThaddeusHead', C.SQUAD_ITEM_METADATA_THADDEUS_HEAD);
  const thaddeusLeftHand = await deployChild('ThaddeusLeftHand', C.SQUAD_ITEM_METADATA_THADDEUS_LEFT_HAND);
  const thaddeusRightHand = await deployChild('ThaddeusRightHand', C.SQUAD_ITEM_METADATA_THADDEUS_RIGHT_HAND);
  await delay(10000)

  const manager = await deployManager();
  await delay(5000)
  const catalogAria = await deployCatalog('CatalogAria', C.SQUAD_CATALOG_ARIA_METADATA, C.CATALOG_TYPE);
  const catalogLuna = await deployCatalog('CatalogLuna', C.SQUAD_CATALOG_LUNA_METADATA, C.CATALOG_TYPE);
  const catalogRyker = await deployCatalog('CatalogRyker', C.SQUAD_CATALOG_RYKER_METADATA, C.CATALOG_TYPE);
  const catalogThaddeus = await deployCatalog('CatalogThaddeus', C.SQUAD_CATALOG_THADDEUS_METADATA, C.CATALOG_TYPE);
  await delay(5000)

  await configureManager(TimeSquadAria, [ariaBody, ariaHead, ariaLeftHand, ariaRightHand], catalogAria, manager);
  await delay(5000)
  await configureManager(TimeSquadLuna, [lunaBody, lunaHead, lunaLeftHand, lunaRightHand], catalogLuna, manager);
  await delay(5000)
  await configureManager(TimeSquadRyker, [rykerBody, rykerHead, rykerLeftHand, rykerRightHand], catalogRyker, manager);
  await delay(5000)
  await configureManager(TimeSquadThaddeus, [thaddeusBody, thaddeusHead, thaddeusLeftHand, thaddeusRightHand], catalogThaddeus, manager);
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



  await addAssets(TimeSquadAria, [ariaBody, ariaHead, ariaLeftHand, ariaRightHand], catalogAria);
  await delay(5000)
  await addAssets(TimeSquadLuna, [lunaBody, lunaHead, lunaLeftHand, lunaRightHand], catalogLuna);
  await delay(5000)
  await addAssets(TimeSquadRyker, [rykerBody, rykerHead, rykerLeftHand, rykerRightHand], catalogRyker);
  await delay(5000)
  await addAssets(TimeSquadThaddeus, [thaddeusBody, thaddeusHead, thaddeusLeftHand, thaddeusRightHand], catalogThaddeus);
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



  await delay(10000)

  await setEquippableAddresses(catalogAria, ariaBody, ariaHead, ariaLeftHand, ariaRightHand);
  await delay(10000)
  await setEquippableAddresses(catalogLuna, lunaBody, lunaHead, lunaLeftHand, lunaRightHand);
  await delay(10000)
  await setEquippableAddresses(catalogRyker, rykerBody, rykerHead, rykerLeftHand, rykerRightHand);
  await delay(10000)
  await setEquippableAddresses(catalogThaddeus, thaddeusBody, thaddeusHead, thaddeusLeftHand, thaddeusRightHand);

  console.log('Deployment complete!');
  await delay(10000);



  //TODO MINTARE DUE PARENT CON DUE ADDRESS DIVERSI E DUE CHILD (LEFT_HAND) CON DUE ADDRESS DIVERSI
  
  await mintParentNFT(parent, deployer.address);
  console.log('Minted parent with id 1');
  await delay(10000);

  await setExternalPermission(child, deployer.address, true);

  await mintChildNFT(child, deployer.address)
  console.log('Minted child with id 1');
  /*
  const assetIds = [1];
  const txchild = await child.mintWithAssets(deployer.address, assetIds);
  await txchild.wait();

  
  const tokenId = 1;
  const assetId=2n;
  const replacesAssetWithId=0n;
  await addAssetToChildToken(child, tokenId, assetId, replacesAssetWithId)  
*/

  console.log(" fine")
  /*
  //await setExternalPermission(child, deployer.address, true);
  const assetIds02 = [1,2];
  const txchild2 = await child.nestMint(await parent.getAddress(),parentId01, assetIds02);
  await txchild2.wait();
  console.log('Minted child with id 2');
*/
  // Esegui il nest transfer del Child al Parent
  //await addAssetToChildToken(child, 1, 2n, 0n)
  //await nestTransferChildToParent(parent, child, 1, 1, deployer.address);  // Assumi che sia il token ID 1 per entrambi

  //await verifyEquippableStatus(catalog, await child.getAddress(), 1000n);
  //await delay(1000)
  //await equipChildOnParent(parent, 1, 1, 1000);
  //await verifyEquippableStatus(catalog, await child.getAddress(), 1000n);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
