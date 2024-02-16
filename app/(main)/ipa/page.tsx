import { Suspense } from 'react';
import AssetDataViewer from '@/components/views/Asset';
import SkeletonGrid from '@/components/Skeletons/SkeletonGrid';
import { Skeleton } from '@/components/ui/skeleton';
export const revalidate = 60;
export const fetchCache = 'force-no-store';

export default function Assets() {
  return (
    <div>
      <div className="w-full p-4 md:p-8 max-w-[1600px] mx-auto">
        <div className="flex flex-col items-left gap-6 mb-6">
          <h1 className="text-xl md:text-2xl font-semibold leading-none">IP Assets</h1>
        </div>

        <div className="grid grid-cols-12 gap-2">
          <div className="flex col-span-12">
            <Suspense
              fallback={
                <div className="flex flex-col">
                  <Skeleton className="h-9 w-24 bg-white" />
                  <SkeletonGrid />
                </div>
              }
            >
              <AssetDataViewer />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
