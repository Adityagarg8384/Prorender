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
      <div className="mx-36 my-12 min-h-screen flex flex-col gap-16 ">
        <div className="flex flex-col gap-6 ">
          <h2 className="text-5xl font-medium mx-auto">
            <span className="text-[#31A7FF] ">Educate</span> Yourself!
          </h2>
          <EducationCaraousel />

          <h1 className="bg-emerald-200 uppercase w-64  font-semibold flex justify-center  text-emerald-700  text-2xl py-2 px-12 rounded-lg ">
            The Need
          </h1>
          <div className="flex my-5 justify-between text-2xl text-justify">
            <p className="w-[48.5%]">
              According to the World Health Organization (WHO), health education
              is a tool to improve a population&apos;s general health and
              wellness through promoting knowledge and healthy practices.
              <br />
              Although the subject is often taught in school settings, students
              aren&apos;t the only ones who need to know about health. In fact,
              all age groups and demographics can benefit from health education.
            </p>
            <p className="w-[48.5%]">
              Education in healthcare is essential for ensuring patient safety,
              adapting to technological advancements, and empowering both
              professionals and patients. It equips healthcare providers with
              the knowledge and skills needed to deliver high-quality care, stay
              updated with the latest medical innovations, and adhere to ethical
              and legal standards
            </p>
          </div>
        </div>

        <div className="">
          <h2 className="text-5xl font-medium ">
            <span className="text-[#19B490] ">Must</span> to Know
          </h2>
          <div className="flex justify-between  my-8  h-[45rem]">
            <div className="flex flex-col items-center justify-center w-[38%] h-full">
              <div className="relative w-full h-full max-w-md">
                {" "}
                <Image
                  src={education1}
                  alt="Education Image"
                  fill
                  className=" object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-start justify-end p-8">
                  <button className="border-white text-xl border-[1px] text-white mb-4 py-2 px-6 rounded-lg">
                    <Link
                      href="https://www.healthline.com/health/fitness/welcome-to-healthline-fitness"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Explore More
                    </Link>
                  </button>
                  <p className="text-white text-xl">
                    Explore your Lifestyle & find out the fitness that best fits
                    you!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between w-[62%] px-4">
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
          <h2 className="text-5xl font-medium text-[#19B490] ">
            Your Health is Wealth
          </h2>
          <div className="bg-gray-300 rounded-xl relative w-full h-[600px] mt-8 mb-20 ">
            <iframe
              src={
                "https://www.youtube.com/embed/E3QpXj_QOqQ?si=cA4Ne2Vkkhd-CF91" +
                "?controls=0&&disablekb=1&iv_load_policy=3&rel=0&&showinfo=0&"
              }
              className="rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              title="YouTube video player"
            ></iframe>
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
