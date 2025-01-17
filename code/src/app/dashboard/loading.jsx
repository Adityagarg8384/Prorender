import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export default function Loading() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <div className=" w-full  col-span-2 col-start-1">
        <Skeleton
          className={cn(
            "group w-full  overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4",

            // Preload hover image by setting it in a pseudo-element

            "after:content-[''] after:absolute after:inset-0 after:bg-black after:opacity-50"
          )}
        />
      </div>

      <Skeleton className="  gap-5 rounded-md    col-span-1  w-full h-96  z-20 " />
    </div>
  );
}
