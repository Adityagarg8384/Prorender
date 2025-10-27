import Image from "next/image";
import React from "react";

const plans = [
  {
    title: "Basic",
    description:
      "Basic medical assistance with essential features like a symptom checker, medication reminders, and limited AI consultations.",
    color: "text-sky-400",
    price: "Free",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7df77f97ef2eb0e872581de6d5b10aac599e1dfddaffaf9ecea828b2c0595532?placeholderIfAbsent=true&apiKey=eb1e27a892cb49d8a25258d2564dfff8",
  },
  {
    title: "Pro Plus",

    color: "text-rose-300",
    description:
      "Comprehensive health management with advanced symptom checking, unlimited AI consultations, personalized health tips, and detailed reports.",
    price: "$10",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d25344f0c4d4e5eb6f8820bda06db6fef8ebba43435e8e0d8c00f1520b93effa?placeholderIfAbsent=true&apiKey=eb1e27a892cb49d8a25258d2564dfff8",
  },
  {
    title: "Optimus",
    description:
      "Premium package offering 24/7 AI consultations, custom health plans, in-depth reports, a dedicated health coach, and VIP support.",
    color: "text-emerald-400",
    price: "$20",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a795c8830f5e6241823e77874fb1f69a9376128900f649fb59079165cd935fb0?placeholderIfAbsent=true&apiKey=eb1e27a892cb49d8a25258d2564dfff8",
  },
];

function PlanCard({ title, color, imageSrc, price, description }) {
  return (
    <article className="flex flex-col w-[33%] max-md:w-full">
      <div
        className={`flex flex-col grow text-6xl ${color} whitespace-nowrap max-md:mt-9 max-md:max-w-full max-md:text-4xl`}
      >
        <h2 className="self-center lg:text-7xl md:text-3xl">{title}</h2>

        {/* Background container */}
        <div
          className={`w-auto mt-4 h-auto relative rounded-2xl shadow-lg overflow-hidden
          flex flex-col items-center justify-center text-white 
          bg-gradient-to-b from-gray-800 via-${color?.split('-')[1] ?? 'blue'}-600 to-black`}
        >
          {/* Text Overlay */}
          <div className="w-full h-full flex flex-col items-center justify-center md:gap-10 gap-5 py-10 md:px-6 text-center">
            <section className="flex flex-col lg:flex-row items-center justify-between w-full md:w-[80%] gap-3">
              <p className="capitalize md:text-3xl lg:text-6xl text-4xl tracking-wide font-semibold">
                {price}
              </p>
              <p className="font-semibold text-lg mb-1">12 Months</p>
            </section>

            <section className="md:w-[60%] w-[80%] text-wrap md:text-base lg:text-xl text-base leading-relaxed">
              {description}
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}

function SubscriptionPlans() {
  return (
    <section className="mt-11 max-md:px-5 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
      <h2 className="self-start mt-8 text-6xl font-bold text-black max-md:max-w-full max-md:text-4xl">
        Subscribe Us!
      </h2>
      <p className="self-start text-justify mt-8  text-xl  text-black max-md:mt-10 max-md:max-w-full">
        At ProCare, we believe in empowering you with the best AI-driven medical
        assistance. Our platform offers accurate disease prediction,
        personalized medication advice, and comprehensive chronic disease
        checks. By joining us, you gain access to reliable health predictions
        based on your symptoms, ensuring you stay ahead of potential health
        issues. Our personalized medication recommendations are tailored to your
        specific needs, providing you with the best possible care. With ProCare,
        you can easily monitor for any chronic diseases and receive actionable
        insights to manage your health better. Our AI medical assistant is
        available 24/7, offering instant health advice and support whenever you
        need it. Additionally, you will receive comprehensive health reports to
        track your progress and make informed decisions about your well-being.
        Subscribe now and take the first step towards a healthier, more informed
        life with ProCare. Your health is our priority.
      </p>
      <section className="self-stretch mt-11 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {plans.map((plan, index) => (
            <PlanCard
              key={plan.title}
              title={plan.title}
              color={plan.color}
              price={plan.price}
              imageSrc={plan.imageSrc}
              description={plan.description}
            />
          ))}
        </div>
      </section>
    </section>
  );
}

export default SubscriptionPlans;
