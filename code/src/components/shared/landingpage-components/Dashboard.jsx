import Image from "next/image";
import dashboardimg from "../../../../public/dashboard.png";
import Link from "next/link";

function Dashboard() {
  return (
    <section className="flex flex-col justify-center items-center grainy rounded-lg overflow-hidden md:px-20 md:py-16 md:mt-28 bg-zinc-100 text-black text-5xl max-md:px-5 max-md:mt-10 max-md:text-4xl">
  <div className="flex flex-col w-full overflow-hidden text-center">
    <h2 className="self-center mb-6 max-md:text-4xl">
      <span className="text-sky-400">Interactive</span> Dashboard
    </h2>

    {/* Image wrapper with aspect ratio */}
    <Link href="/dashboard" className="w-full">
      <div className="relative w-full aspect-[10/9] sm:aspect-[4/3] md:aspect-[10/9] rounded-lg shadow-lg overflow-hidden">
        <Image
          priority
          fill
          src={dashboardimg}
          alt="Interactive Dashboard"
          className="object-contain p-4 bg-white aspect-[10/9]"
        />
      </div>
    </Link>
  </div>
</section>

  );
}

export default Dashboard;
