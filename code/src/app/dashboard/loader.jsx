import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const Loader2 = () => {
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
    <Skeleton className="  gap-5 rounded-md    col-span-1  w-full h-full  z-20 " />
    <div className=" w-full col-start-2  col-span-2 ">
      <Skeleton
        className={cn(
          "group w-full  overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4",

          // Preload hover image by setting it in a pseudo-element

          "after:content-[''] after:absolute after:inset-0 after:bg-black after:opacity-50"
        )}
      />
    </div>
  </div>;
};

export default Loader2;
