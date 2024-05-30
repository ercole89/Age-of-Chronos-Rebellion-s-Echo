'use client';

import { useEffect, useState } from 'react';
import { createThirdwebClient, getContract, defineChain, readContract, prepareContractCall } from 'thirdweb';

async function initializeContract() {
    const client = createThirdwebClient({
      clientId: '258f6a7e272e3b6e74b8ad1d24ad1343'
    });
  
    const myChain = defineChain({
      id: 84532,
      rpc: 'https://sepolia.base.org'
    });
  
    const contractAria = getContract({
      client,
      chain: myChain,
      address: '0x28a147ebE82a64D294D0b2a92c51A487015773B1',
      abi: [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "collectionMetadata",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "maxSupply",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "royaltyRecipient",
                    "type": "address"
                },
                {
                    "internalType": "uint16",
                    "name": "royaltyPercentageBps",
                    "type": "uint16"
                },
                {
                    "internalType": "string",
                    "name": "baseTokenURI",
                    "type": "string"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "ERC721AddressZeroIsNotaValidOwner",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ERC721ApprovalToCurrentOwner",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ERC721ApproveCallerIsNotOwnerNorApprovedForAll",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ERC721ApproveToCaller",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ERC721InvalidTokenId",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ERC721MintToTheZeroAddress",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ERC721NotApprovedOrOwner",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "ERC721OutOfBoundsIndex",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ERC721TokenAlreadyMinted",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ERC721TransferFromIncorrectOwner",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ERC721TransferToNonReceiverImplementer",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ERC721TransferToTheZeroAddress",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "IndexOutOfBounds",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InsufficientBalance",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidAddress",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidAmountTransferred",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidValue",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "OnlyNFTOwnerCanTransferTokensFromIt",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKApprovalForAssetsToCurrentOwner",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKApproveForAssetsCallerIsNotOwnerNorApprovedForAll",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKAssetAlreadyExists",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKBadPriorityListLength",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKCannotTransferSoulbound",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKCatalogRequiredForParts",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKChildAlreadyExists",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKChildIndexOutOfRange",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKEquippableEquipNotAllowedByCatalog",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKIdZeroForbidden",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKIndexOutOfRange",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKIsNotContract",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKMaxPendingAssetsReached",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKMaxPendingChildrenReached",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "childContract",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "childId",
                    "type": "uint256"
                }
            ],
            "name": "RMRKMaxRecursiveBurnsReached",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKMintOverMax",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKMintZero",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKMustUnequipFirst",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKNestableTooDeep",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKNestableTransferToDescendant",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKNestableTransferToNonRMRKNestableImplementer",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKNestableTransferToSelf",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKNewContributorIsZeroAddress",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKNewOwnerIsZeroAddress",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKNoAssetMatchingId",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKNotApprovedForAssetsOrOwner",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKNotApprovedOrDirectOwner",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKNotEquipped",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKNotOwner",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKNotOwnerOrContributor",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKPendingChildIndexOutOfRange",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKRoyaltiesTooHigh",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKSlotAlreadyUsed",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKTargetAssetCannotReceiveSlot",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKTokenCannotBeEquippedWithAssetIntoSlot",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKTokenDoesNotHaveAsset",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKUnexpectedAssetId",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKUnexpectedChildId",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKUnexpectedNumberOfAssets",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RMRKUnexpectedNumberOfChildren",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RentrantCall",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "AllChildrenRejected",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "approved",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "ApprovalForAll",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "ApprovalForAllForAssets",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "approved",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "ApprovalForAssets",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "uint64",
                    "name": "assetId",
                    "type": "uint64"
                },
                {
                    "indexed": true,
                    "internalType": "uint64",
                    "name": "replacesId",
                    "type": "uint64"
                }
            ],
            "name": "AssetAccepted",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256[]",
                    "name": "tokenIds",
                    "type": "uint256[]"
                },
                {
                    "indexed": true,
                    "internalType": "uint64",
                    "name": "assetId",
                    "type": "uint64"
                },
                {
                    "indexed": true,
                    "internalType": "uint64",
                    "name": "replacesId",
                    "type": "uint64"
                }
            ],
            "name": "AssetAddedToTokens",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "AssetPrioritySet",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "uint64",
                    "name": "assetId",
                    "type": "uint64"
                }
            ],
            "name": "AssetRejected",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint64",
                    "name": "assetId",
                    "type": "uint64"
                }
            ],
            "name": "AssetSet",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "childIndex",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "childAddress",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "childId",
                    "type": "uint256"
                }
            ],
            "name": "ChildAccepted",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "uint64",
                    "name": "assetId",
                    "type": "uint64"
                },
                {
                    "indexed": true,
                    "internalType": "uint64",
                    "name": "slotPartId",
                    "type": "uint64"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "childId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "childAddress",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint64",
                    "name": "childAssetId",
                    "type": "uint64"
                }
            ],
            "name": "ChildAssetEquipped",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "uint64",
                    "name": "assetId",
                    "type": "uint64"
                },
                {
                    "indexed": true,
                    "internalType": "uint64",
                    "name": "slotPartId",
                    "type": "uint64"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "childId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "childAddress",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint64",
                    "name": "childAssetId",
                    "type": "uint64"
                }
            ],
            "name": "ChildAssetUnequipped",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "childIndex",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "childAddress",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "childId",
                    "type": "uint256"
                }
            ],
            "name": "ChildProposed",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "childIndex",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "childAddress",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "childId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "fromPending",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "toZero",
                    "type": "bool"
                }
            ],
            "name": "ChildTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "contributor",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "isContributor",
                    "type": "bool"
                }
            ],
            "name": "ContributorUpdate",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "MetadataUpdate",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "fromTokenId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "toTokenId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "NestTransfer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "erc20Contract",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "toTokenId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "ReceivedERC20",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "state",
                    "type": "bool"
                }
            ],
            "name": "Soulbound",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "erc20Contract",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "fromTokenId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "TransferredERC20",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint64",
                    "name": "equippableGroupId",
                    "type": "uint64"
                },
                {
                    "indexed": true,
                    "internalType": "uint64",
                    "name": "slotPartId",
                    "type": "uint64"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "parentAddress",
                    "type": "address"
                }
            ],
            "name": "ValidParentEquippableGroupIdSet",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "RMRK_INTERFACE",
            "outputs": [
                {
                    "internalType": "bytes4",
                    "name": "rmrkInterface",
                    "type": "bytes4"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "VERSION",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "version",
                    "type": "string"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                },
                {
                    "internalType": "uint64",
                    "name": "assetId",
                    "type": "uint64"
                }
            ],
            "name": "acceptAsset",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "parentId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "childIndex",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "childAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "childId",
                    "type": "uint256"
                }
            ],
            "name": "acceptChild",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "metadataURI",
                    "type": "string"
                }
            ],
            "name": "addAssetEntry",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint64",
                    "name": "assetId",
                    "type": "uint64"
                },
                {
                    "internalType": "uint64",
                    "name": "replacesAssetWithId",
                    "type": "uint64"
                }
            ],
            "name": "addAssetToToken",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "parentId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "childId",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "addChild",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint64",
                    "name": "equippableGroupId",
                    "type": "uint64"
                },
                {
                    "internalType": "address",
                    "name": "catalogAddress",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "metadataURI",
                    "type": "string"
                },
                {
                    "internalType": "uint64[]",
                    "name": "partIds",
                    "type": "uint64[]"
                }
            ],
            "name": "addEquippableAssetEntry",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "approveForAssets",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "balance",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "erc20Contract",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "balanceOfERC20",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "burn",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "maxChildrenBurns",
                    "type": "uint256"
                }
            ],
            "name": "burn",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "burnedChildren",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "parent",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint64",
                    "name": "assetId",
                    "type": "uint64"
                },
                {
                    "internalType": "uint64",
                    "name": "slotId",
                    "type": "uint64"
                }
            ],
            "name": "canTokenBeEquippedWithAssetIntoSlot",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "canBeEquipped",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "parentId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "childOf",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "contractAddress",
                            "type": "address"
                        }
                    ],
                    "internalType": "struct IERC7401.Child",
                    "name": "child",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "parentId",
                    "type": "uint256"
                }
            ],
            "name": "childrenOf",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "contractAddress",
                            "type": "address"
                        }
                    ],
                    "internalType": "struct IERC7401.Child[]",
                    "name": "children",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "contractURI",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "contractURI_",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "directOwnerOf",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "owner_",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "parentId",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "isNFT",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "childIndex",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint64",
                            "name": "assetId",
                            "type": "uint64"
                        },
                        {
                            "internalType": "uint64",
                            "name": "slotPartId",
                            "type": "uint64"
                        },
                        {
                            "internalType": "uint64",
                            "name": "childAssetId",
                            "type": "uint64"
                        }
                    ],
                    "internalType": "struct IERC6220.IntakeEquip",
                    "name": "data",
                    "type": "tuple"
                }
            ],
            "name": "equip",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "erc20TransferOutNonce",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "getActiveAssetPriorities",
            "outputs": [
                {
                    "internalType": "uint64[]",
                    "name": "priorities",
                    "type": "uint64[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "getActiveAssets",
            "outputs": [
                {
                    "internalType": "uint64[]",
                    "name": "assetIds",
                    "type": "uint64[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "getApproved",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "approved",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "getApprovedForAssets",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "approved",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint64",
                    "name": "assetId",
                    "type": "uint64"
                }
            ],
            "name": "getAssetAndEquippableData",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "metadataURI",
                    "type": "string"
                },
                {
                    "internalType": "uint64",
                    "name": "equippableGroupId",
                    "type": "uint64"
                },
                {
                    "internalType": "address",
                    "name": "catalogAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint64[]",
                    "name": "partIds",
                    "type": "uint64[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint64",
                    "name": "assetId",
                    "type": "uint64"
                }
            ],
            "name": "getAssetMetadata",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint64",
                    "name": "newAssetId",
                    "type": "uint64"
                }
            ],
            "name": "getAssetReplacements",
            "outputs": [
                {
                    "internalType": "uint64",
                    "name": "replacedAssetId",
                    "type": "uint64"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getBaseExtension",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getBaseURI",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "targetCatalogAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint64",
                    "name": "slotPartId",
                    "type": "uint64"
                }
            ],
            "name": "getEquipment",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint64",
                            "name": "assetId",
                            "type": "uint64"
                        },
                        {
                            "internalType": "uint64",
                            "name": "childAssetId",
                            "type": "uint64"
                        },
                        {
                            "internalType": "uint256",
                            "name": "childId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "childEquippableAddress",
                            "type": "address"
                        }
                    ],
                    "internalType": "struct IERC6220.Equipment",
                    "name": "equipment",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getMainAsset",
            "outputs": [
                {
                    "internalType": "uint64",
                    "name": "",
                    "type": "uint64"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "getPendingAssets",
            "outputs": [
                {
                    "internalType": "uint64[]",
                    "name": "assetIds",
                    "type": "uint64[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getRoyaltyPercentage",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "royaltyPercentageBps",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getRoyaltyRecipient",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "recipient",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                }
            ],
            "name": "isApprovedForAll",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "isApproved",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                }
            ],
            "name": "isApprovedForAllForAssets",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "isApproved",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "childAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "childId",
                    "type": "uint256"
                }
            ],
            "name": "isChildEquipped",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "isEquipped",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "contributor",
                    "type": "address"
                }
            ],
            "name": "isContributor",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "isContributor_",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "isPaused",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                }
            ],
            "name": "isTransferable",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "isTransferable_",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "lockSupply",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "contributor",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "grantRole",
                    "type": "bool"
                }
            ],
            "name": "manageContributor",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "maxSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "maxSupply_",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                }
            ],
            "name": "mint",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "name_",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "destinationId",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "nestTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "owner_",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "ownerOf",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "owner_",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "parentId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "pendingChildOf",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "contractAddress",
                            "type": "address"
                        }
                    ],
                    "internalType": "struct IERC7401.Child",
                    "name": "child",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "parentId",
                    "type": "uint256"
                }
            ],
            "name": "pendingChildrenOf",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "contractAddress",
                            "type": "address"
                        }
                    ],
                    "internalType": "struct IERC7401.Child[]",
                    "name": "children",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "maxRejections",
                    "type": "uint256"
                }
            ],
            "name": "rejectAllAssets",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "maxRejections",
                    "type": "uint256"
                }
            ],
            "name": "rejectAllChildren",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                },
                {
                    "internalType": "uint64",
                    "name": "assetId",
                    "type": "uint64"
                }
            ],
            "name": "rejectAsset",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "salePrice",
                    "type": "uint256"
                }
            ],
            "name": "royaltyInfo",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "royaltyAmount",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "setApprovalForAllForAssets",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "collection",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "autoAccept",
                    "type": "bool"
                }
            ],
            "name": "setAutoAcceptCollection",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_newBaseExtension",
                    "type": "string"
                }
            ],
            "name": "setBaseExtension",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_newBaseURI",
                    "type": "string"
                }
            ],
            "name": "setBaseURI",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint64",
                    "name": "_mainAsset",
                    "type": "uint64"
                }
            ],
            "name": "setMainAsset",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bool",
                    "name": "_state",
                    "type": "bool"
                }
            ],
            "name": "setPause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint64[]",
                    "name": "priorities",
                    "type": "uint64[]"
                }
            ],
            "name": "setPriority",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "state",
                    "type": "bool"
                }
            ],
            "name": "setSoulbound",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint64",
                    "name": "equippableGroupId",
                    "type": "uint64"
                },
                {
                    "internalType": "address",
                    "name": "parentAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint64",
                    "name": "partId",
                    "type": "uint64"
                }
            ],
            "name": "setValidParentForEquippableGroup",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "interfaceId",
                    "type": "bytes4"
                }
            ],
            "name": "supportsInterface",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "symbol_",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "tokenByIndex",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "tokenOfOwnerByIndex",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "tokenURI",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalAssets",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "totalAssets_",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "totalSupply_",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "destinationId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "childIndex",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "childAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "childId",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "isPending",
                    "type": "bool"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "transferChild",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "erc20Contract",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "transferERC20ToToken",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "erc20Contract",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenHolderId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "transferHeldERC20FromToken",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint64",
                    "name": "assetId",
                    "type": "uint64"
                },
                {
                    "internalType": "uint64",
                    "name": "slotPartId",
                    "type": "uint64"
                }
            ],
            "name": "unequip",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newRoyaltyRecipient",
                    "type": "address"
                }
            ],
            "name": "updateRoyaltyRecipient",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    });
  
    return contractAria;
  }
  
  export default function Lol() {
    const [contract, setContract] = useState(null);
  
    useEffect(() => {
      async function loadContract() {
        const contractInstance = await initializeContract();
        setContract(contractInstance);
      }
      loadContract();
    }, []);
  
    const handleTransaction = async () => {
      if (!contract) {
        console.error('Contract not initialized');
        return;
      }
      try {
        const tx = prepareContractCall({
          contract:  await initializeContract(),
          method: 'totalSupply',
          params: []
        });
        console.log('Transaction prepared', tx);
        // Assuming you have a function to send the transaction
        const result = await sendTransaction(tx);
        console.log('Transaction submitted', result.transactionHash);
        const receipt = await result.wait();
        console.log('Transaction confirmed', receipt.transactionHash);
      } catch (error) {
        console.error('Transaction error', error);
      }
    };
  
    return (
      <div>
        <button onClick={handleTransaction}>
          Confirm Transaction
        </button>
      </div>
    );
  }
  
  async function sendTransaction(tx) {
    // Implement your transaction sending logic here
    return await tx.send();
  }