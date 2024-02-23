import { Suspense } from 'react';
import SkeletonTable from '@/components/Skeletons/SkeletonTable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AssetDetailCard from './AssetDetailCard';
import { Badge } from '@/components/ui/badge';
import { Address } from 'viem';
import { getResource } from '@/lib/server/sdk';
import { Asset, RESOURCE_TYPE } from '@/lib/server/types';
import LicenseDataViewer from '@/components/views/Licenses';
import DisputeDataViewerWrapper from '@/components/views/Disputes/DisputeDataViewerWrapper';
import PermissionDataViewerWrapper from '@/components/views/Permissions/PermissionDataViewerWrapper';
import AssetDataViewerComponent from '@/components/views/Asset/AssetDataViewerComponent';
import RoyaltyPolicyDataViewerWrapper from '@/components/views/Royalties/RoyaltyPolicyDataViewerWrapper';
import IPAPolicyDataViewerWrapper from '@/components/views/Policies/IPAPolicyDataViewerWrapper';
import RoyaltyPage from '@/components/views/Royalties/RoyaltyPage';

export const fetchCache = 'force-no-store';

export default async function AssetDetailPage({ params: { ipAssetId } }: { params: { ipAssetId: Address } }) {
  const assetDetailRes = await getResource(RESOURCE_TYPE.ASSET, ipAssetId);
  const assetData: Asset = assetDetailRes.data;

  return (
    <div className="w-full p-4 md:p-8 max-w-[1600px] mx-auto">
      <div className="flex flex-col items-left gap-6">
        <div>
          <div className="flex flex-row gap-4 items-center pt-16 md:pt-10">
            <h1 className="text-xl md:text-2xl font-semibold leading-none">IP Asset Detail</h1>
            {!assetData.rootIpIds && <Badge className="bg-indigo-500 hover:bg-indigo-500">Root</Badge>}
          </div>
          {/* <Suspense fallback={<FallbackBreadcrumbs />}>
            <AssetBreadcrumbs ipAssetId={ipAssetId} ipOrgId={ipOrgId} />
          </Suspense> */}
        </div>
        {/* <Suspense fallback={<FallbackDetailsCard />}> */}
        <AssetDetailCard data={assetData} />
        {/* </Suspense> */}

        {/* <div className="grid grid-cols-12 gap-2"> */}
        <div className="flex">
          <Tabs defaultValue="derivatives" className="w-full">
            <TabsList className="overflow-scroll">
              {/* <TabsTrigger value="tx">Transactions</TabsTrigger> */}
              <TabsTrigger value="derivatives">Derivative IPAs</TabsTrigger>
              <TabsTrigger value="policies">Policies</TabsTrigger>
              <TabsTrigger value="licenses">Licenses</TabsTrigger>
              <TabsTrigger value="royalties">Royalties</TabsTrigger>
              <TabsTrigger value="disputes">Disputes</TabsTrigger>
              <TabsTrigger value="permissions">Permissions</TabsTrigger>
              {/* <TabsTrigger value="relationships">Relationships</TabsTrigger> */}
              <TabsTrigger value="actions">Actions</TabsTrigger>
            </TabsList>
            {/* <TabsContent value="tx">
                <Suspense fallback={<SkeletonTable />}>
                  <TransactionTableWrapper ipId={ipAssetId} />
                </Suspense>
              </TabsContent> */}
            <TabsContent value="derivatives">
              {assetData.childIpIds && assetData.childIpIds.length === 0 ? (
                <div className="w-full pt-8 text-center text-gray-500">No IPAs found</div>
              ) : (
                <AssetDataViewerComponent gridOnly data={assetData.childIpIds} />
              )}
              {/* <AssetDataViewer ipId={ipAssetId} /> */}
            </TabsContent>
            <TabsContent value="policies">
              <IPAPolicyDataViewerWrapper ipId={ipAssetId} />
              {/* <PolicyDataViewerWrapper ipId={ipAssetId} /> */}
            </TabsContent>
            <TabsContent value="licenses">
              <Suspense fallback={<SkeletonTable />}>
                <LicenseDataViewer ipId={ipAssetId} />
              </Suspense>
            </TabsContent>
            <TabsContent value="royalties">
              <Suspense fallback={<SkeletonTable />}>
                {/* <RoyaltyDataViewerWrapper ipId={ipAssetId} /> */}
                <RoyaltyPage ipId={ipAssetId} />
                <RoyaltyPolicyDataViewerWrapper ipId={ipAssetId} />
              </Suspense>
            </TabsContent>
            <TabsContent value="disputes">
              <Suspense fallback={<SkeletonTable />}>
                <DisputeDataViewerWrapper ipId={ipAssetId} />
              </Suspense>
            </TabsContent>
            <TabsContent value="permissions">
              <h2>permissions</h2>
              <Suspense fallback={<SkeletonTable />}>
                <PermissionDataViewerWrapper ipId={ipAssetId} />
              </Suspense>
            </TabsContent>
            <TabsContent value="actions">
              {/* <Suspense fallback={<SkeletonTable />}>
                  <div className="flex flex-col gap-4">
                    <RelationshipWriteAccordion defaultValues={defaultRegisterRelationshipValues} />
                    <LicenseReadAccordion defaultValues={defaultIpAssetValues} />
                    <CreateIpaBoundLicenseWriteAccordion defaultValues={defaultCreateIpaBoundLicenseValues} />
                  </div>
                </Suspense> */}
            </TabsContent>
          </Tabs>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
