import { EducationCaraousel } from "@/components/Education-Caraousel";
import Footer from "@/components/shared/ai-diagnosis-components/Footer";
import Image from "next/image";
import edu2 from "../../../public/edu2.jpg";
import edu3 from "../../../public/edu3.jpg";
import edu4 from "../../../public/edu4.jpg";
// import education1 from "../.../../../../public/education1.jpeg";
import education1 from "../../../public/education1.jpeg";
import Link from "next/link";
const Dashboard = () => {
  return (
    <>
      <div className="md:mx-36 mx-4 my-12 min-h-screen flex flex-col gap-16 ">
        <div className="flex flex-col gap-6 ">
          <h2 className="md:text-5xl text-2xl font-medium mx-auto">
            <span className="text-[#31A7FF] ">Educate</span> Yourself!
          </h2>
          <EducationCaraousel />

          <h1 className="bg-emerald-200 uppercase w-64  font-semibold flex justify-center  text-emerald-700  md:text-2xl text-lg py-2 md:px-12 rounded-lg ">
            The Need
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-5 text-justify text-lg md:text-2xl">
            <p className="w-full">
              According to the World Health Organization (WHO), health education is a tool to improve a population's general health and wellness through promoting knowledge and healthy practices.
              <br />
              Although the subject is often taught in school settings, students aren't the only ones who need to know about health. In fact, all age groups and demographics can benefit from health education.
            </p>

            <p className="w-full">
              Education in healthcare is essential for ensuring patient safety, adapting to technological advancements, and empowering both professionals and patients. It equips healthcare providers with the knowledge and skills needed to deliver high-quality care, stay updated with the latest medical innovations, and adhere to ethical and legal standards.
            </p>
          </div>

        </div>

        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl font-medium">
            <span className="text-[#19B490]">Must</span> to Know
          </h2>

          {/* Main layout: column on small screens, row on md+ */}
          <div className="flex flex-col md:flex-row gap-6 my-8">
            {/* Left: image area - full width on small, 1/3 on md+ */}
            <div className="w-full flex items-stretch">
              <div className="relative w-full aspect-[4/3] md:aspect-[3/2] rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src={education1}
                  alt="Education Image"
                  fill
                  className="object-cover"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col justify-end p-6">
                  {/* Use an anchor styled like a button for proper semantics */}
                  <a
                    href="https://www.healthline.com/health/fitness/welcome-to-healthline-fitness"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-transparent border border-white text-white text-lg py-2 px-4 rounded-lg mb-3 hover:bg-white/10 transition"
                  >
                    Explore More
                  </a>

                  <p className="text-white text-base sm:text-lg">
                    Explore your lifestyle & find the fitness that best fits you!
                  </p>
                </div>
              </div>
            </div>

            {/* Right: cards column - full width on small, 2/3 on md+ */}
            <div className="w-full md:w-2/3 flex flex-col gap-6">
              {/* If your Card component accepts props as shown, these will stack nicely.
          Ensure your Card itself is responsive (sample Card provided below if needed). */}
              <Card
                image={edu2}
                description="Know Everything About all forms of Diabetes, It’s rumours & Facts!"
                link="https://www.healthline.com/health/diabetes/types-of-diabetes"
              />
              <Card
                image={edu3}
                description="Cancer: Types, Causes, Prevention, and More, Everything you need."
                link="https://www.healthline.com/health/cancer#risk-factors"
              />
              <Card
                image={edu4}
                description="Guarding Your Heart: Embracing Wellness and Preventing Disease"
                link="https://www.healthline.com/health/heart-disease/prevention"
              />
            </div>
          </div>
        </div>


        <div className="">
          <h2 className="text-xl md:text-5xl font-medium text-[#19B490] ">
            Your Health is Wealth
          </h2>
          <div className="relative w-full rounded-xl mt-8 mb-20 aspect-video overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/E3QpXj_QOqQ?si=cA4Ne2Vkkhd-CF91&controls=0&disablekb=1&iv_load_policy=3&rel=0&showinfo=0"
              className="absolute inset-0 w-full h-full rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
              allowFullScreen
              title="YouTube video player"
            />
          </div>

        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

const Card = ({ image, description, link }) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col hover:scale-105 transition duration-300  md:flex-row items-center w-full h-[33.333%] md:h-[32%]  px-4 md:px-6 justify-between"
    >
      <div className="mr-4 md:mr-6">
        <Image
          width={224}
          height={208}
          src={image}
          alt="image"
          className="  drop-shadow-lg"
        />
      </div>

      <div className="flex flex-col w-full md:w-2/3 h-full py-4">
        <button className="border-black text-xl w-full md:w-48 border-[1px] py-2 px-4 rounded-lg mt-4 mb-6">
          Explore More
        </button>
        <p className="text-gray-600 text-xl mb-3 ">{description}</p>
        <p className="text-gray-800 text-lg ">- HealthLine</p>
      </div>
    </Link>
  );
};

export default Dashboard;
