import React from 'react';
import CollectionsDataViewerComponent from '@/components/views/Collections/CollectionsDataViewerComponent';
import { RESOURCE_TYPE } from '@/lib/server/types';
import { listResource } from '@/lib/server/sdk';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export default async function CollectionsDataViewerWrapper({
  tableOnly,
  gridOnly,
  pageSize,
}: {
  tableOnly?: boolean;
  gridOnly?: boolean;
  pageSize?: number;
}) {
  let listParams = {
    pagination: {
      limit: 100,
      offset: 0,
    },
  };

  const collectionRes = await listResource(RESOURCE_TYPE.COLLECTION, listParams);

  const collectionData = collectionRes.data;

  console.log({ collectionData });
  return (
    <CollectionsDataViewerComponent
      data={collectionData}
      tableOnly={tableOnly}
      gridOnly={gridOnly}
      pageSize={pageSize}
    />
  );
}
