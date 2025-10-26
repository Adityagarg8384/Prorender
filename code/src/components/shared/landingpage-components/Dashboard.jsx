import Image from "next/image";
import dashboardimg from "../../../../public/dashboard.png";
import Link from "next/link";

function Dashboard() {
  return (
    <section className="flex grainy rounded-lg overflow-hidden flex-col justify-center items-center px-20 py-16 mt-28 text-5xl text-black bg-zinc-100 max-md:px-5 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
      <div className="flex flex-col max-w-full overflow-hidden  w-[800px] max-md:text-4xl">
        <h2 className="self-center max-md:max-w-full max-md:text-4xl">
          <span className="text-sky-400">Interactive</span> DashBoard
        </h2>
        <div className="w-full h-[50rem] relative">
          <Link href="/dashboard">
            <Image
              priority
              fill
              src={dashboardimg}
              alt="Interactive Dashboard"
              className="object-contain shadow-lg   aspect-[1.34] "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
