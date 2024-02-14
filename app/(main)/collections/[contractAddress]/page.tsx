import { Suspense } from 'react';

import SkeletonTable from '@/components/Skeletons/SkeletonTable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AssetDataViewer from '@/components/views/Asset';
import TransactionTableWrapper from '@/components/views/Transactions/TransactionTableWrapper';
import { Skeleton } from '@/components/ui/skeleton';

import CollectionBreadcrumbs, { Fallback as FallbackBreadcrumbs } from './CollectionBreadcrumbs';
import CollectionDetailCard, { Fallback as CollectionDetailCardFallback } from './CollectionDetailCard';
import CollectionStatsCard from './CollectionStatsCard';

import { getOpenSeaCollectionMetadata } from '@/lib/opensea/api';
import { Address } from 'viem';

const PageTitle = async ({ collectionId }: { collectionId: string }) => {
  return <h1 className="font-medium text-xl md:text-3xl text-white md:mb-2">{collectionId}</h1>;
};

export default async function CollectionDetailPage({
  params: { contractAddress },
}: {
  params: { contractAddress: string };
}) {
  const openseaMetadata = await getOpenSeaCollectionMetadata(contractAddress as Address);
  return (
    <div className="">
      <div className="relative w-full h-[24rem] bg-slate-500 mx-auto">
        {openseaMetadata.banner_image_url && (
          <img
            src={openseaMetadata.banner_image_url}
            alt="IP Org image"
            className="absolute w-full h-full object-cover"
          />
        )}
        <div className="absolute w-full bottom-0 left-0 right-0 h-4/5 bg-gradient-to-t from-[rgba(0,0,0,0.7)] via-[rgba(0,0,0,0.5)] to-transparent"></div>
      </div>
      <div className="relative w-full px-4 md:px-8 max-w-[1600px] -mt-48 mx-auto">
        <div className="flex w-full justify-between items-center mb-4">
          <div className="flex flex-col">
            <Suspense fallback={<Skeleton className="h-7 mt-1 w-56 mb-5" />}>
              <PageTitle collectionId={contractAddress} />
            </Suspense>
            <Suspense fallback={<FallbackBreadcrumbs />}>
              {contractAddress && <CollectionBreadcrumbs collectionId={contractAddress} />}
            </Suspense>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 mb-8">
          <Suspense fallback={<CollectionDetailCardFallback />}>
            <CollectionDetailCard openseaMetadata={openseaMetadata} collectionId={contractAddress} />
          </Suspense>
          <CollectionStatsCard collectionId={contractAddress} />
        </div>

        <div className="grid grid-cols-12 gap-2">
          <div className="flex col-span-12">
            <Tabs defaultValue="tx" className="w-full">
              <TabsList>
                <TabsTrigger value="tx">Transactions</TabsTrigger>
                <TabsTrigger value="assets">Assets</TabsTrigger>
              </TabsList>
              <TabsContent value="tx">
                <Suspense fallback={<SkeletonTable />}>
                  <TransactionTableWrapper collectionId={contractAddress} />
                </Suspense>
              </TabsContent>
              <TabsContent value="assets">
                <Suspense fallback={<div className="w-full pt-8 text-center text-gray-500">No assets found</div>}>
                  {/* <AssetDataViewer collectionId={contractAddress} /> */}
                </Suspense>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
