// import storyClient from '../SP';
import {
  GetTransactionRequest,
  ListTransactionRequest,
  CreateIPOrgRequest,
  GetIPOrgRequest,
  GetIpAssetRequest,
  ListIpAssetRequest,
  ListIPOrgRequest,
  GetRelationshipRequest,
  ListRelationshipRequest,
  GetRelationshipTypeRequest,
  ListRelationshipTypesRequest,
  GetHookRequest,
  ListHookRequest,
  GetModuleRequest,
  ListModuleRequest,
} from '@story-protocol/core-sdk';
import { QueryOptions, ResourceType } from './types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.API_BASE_URL || '';
const API_KEY = process.env.NEXT_PUBLIC_STORY_PROTOCOL_X_API_KEY || process.env.STORY_PROTOCOL_X_API_KEY || '';

export async function getResource(resourceName: ResourceType, resourceId: string) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/${resourceName}/${resourceId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY as string,
      },
    });
    if (res.ok) {
      return res.json();
    }
  } catch (error) {
    console.error(error);
  }
}

export async function listResource(resourceName: ResourceType, options: QueryOptions) {
  try {
    console.log('url', `${API_BASE_URL}/api/v1/${resourceName}`);
    const res = await fetch(`${API_BASE_URL}/api/v1/${resourceName}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY as string,
      },
      cache: 'no-cache',
      body: JSON.stringify({ options }),
    });
    if (res.ok) {
      return res.json();
    } else {
      return res;
    }
  } catch (error) {
    console.error(error);
  }
}

// async function createIpOrg({ name, symbol, ipAssetTypes }: CreateIPOrgRequest) {
//   const data = await storyClient.ipOrg.create({
//     name,
//     symbol,
//     ipAssetTypes,
//   });

//   return data;
// }

// async function getIpOrg({ ipOrgId }: GetIPOrgRequest) {
//   const data = await storyClient.ipOrg.get({
//     ipOrgId,
//   });

//   return data;
// }

// async function listIpOrg({ options }: ListIPOrgRequest) {
//   const data = await storyClient.ipOrg.list({ options });

//   return data;
// }

// async function getIpAsset({ ipAssetId }: GetIpAssetRequest) {
//   const data = await storyClient.ipAsset.get({
//     ipAssetId,
//   });

//   return data;
// }

// async function listIpAsset({ ipOrgId, options }: ListIpAssetRequest) {
//   const data = await storyClient.ipAsset.list({ ipOrgId, options });

//   return data;
// }

// async function getRelationship({ relationshipId, options }: GetRelationshipRequest) {
//   const data = await storyClient.relationship.get({
//     relationshipId,
//     options,
//   });

//   return data;
// }

// async function listRelationship({ tokenId, contract, options }: ListRelationshipRequest) {
//   const data = await storyClient.relationship.list({ tokenId, contract, options });

//   return data;
// }

// async function getRelationshipType({ ipOrgId, relType }: GetRelationshipTypeRequest) {
//   const data = await storyClient.relationshipType.get({
//     ipOrgId,
//     relType,
//   });

//   return data;
// }

// async function listRelationshipType({ ipOrgId, options }: ListRelationshipTypesRequest) {
//   const data = await storyClient.relationshipType.list({ ipOrgId, options });

//   return data;
// }

// // async function createLicense({
// //   ipOrgId,
// //   isCommercial = false,
// //   licensee,
// // }: {
// //   ipOrgId: string;
// //   isCommercial: boolean;
// //   licensee: string;
// // }) {
// //   const data = await storyClient.license.create({
// //     ipOrgId,
// //   });

// //   return data;
// // }

// async function getLicense({ licenseId }: { licenseId: string }) {
//   const data = await storyClient.license.get({
//     licenseId,
//   });

//   return data;
// }

// async function listLicense({ ipAssetId, ipOrgId }: { ipAssetId: string; ipOrgId: string }) {
//   const data = await storyClient.license.list({
//     ipAssetId,
//     ipOrgId,
//   });

//   return data;
// }

// async function getTransaction({ transactionId }: GetTransactionRequest) {
//   const data = await storyClient.transaction.get({ transactionId });

//   return data;
// }
// async function listTransaction({ ipOrgId, options }: ListTransactionRequest) {
//   const data = await storyClient.transaction.list({ ipOrgId, options });

//   return data;
// }

// async function getHook({ hookId }: GetHookRequest) {
//   const data = await storyClient.hook.get({ hookId });

//   return data;
// }

// async function listHooks({ moduleId, options }: ListHookRequest) {
//   const data = await storyClient.hook.list({ moduleId, options });

//   return data;
// }

// async function getModule({ moduleId }: GetModuleRequest) {
//   const data = await storyClient.module.get({ moduleId });

//   return data;
// }

// async function listModules({ ipOrgId, options }: ListModuleRequest) {
//   const data = await storyClient.module.list({ ipOrgId, options });

//   return data;
// }

export // getIpOrg,
// listIpOrg,
// createIpOrg,
// getIpAsset,
// listIpAsset,
// getLicense,
// listLicense,
// getTransaction,
// listTransaction,
// getRelationship,
// listRelationship,
// getRelationshipType,
// listRelationshipType,
// getHook,
// listHooks,
// getModule,
// listModules,
 {};
