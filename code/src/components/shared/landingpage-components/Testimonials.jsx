import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    t: "ProCare has been a game-changer for my health. Accurate predictions and great medication advice!",
    image:
      "https://th.bing.com/th/id/OIP.q8XRDwnVW0CQ9OLwncjzIQHaLJ?w=664&h=1000&rs=1&pid=ImgDetMain",
  },
  {
    name: "Rajesh Kumar",
    t: "ProCare is a lifesaver! It’s like having a personal doctor available 24/7. Fantastic service!",
    image: "https://wallpapercave.com/wp/wp6558834.jpg",
  },
  {
    name: "Anjali Verma",
    t: "ProCare exceeded my expectations. Reliable predictions and tailored medication advice. Amazing tool!",
    image:
      "https://th.bing.com/th/id/OIP.lAv_dum0zOIRa-AGW1RRVwHaLH?rs=1&pid=ImgDetMain",
  },
  {
    name: "Vikram Singh",
    t: "Using ProCare has been wonderful. Helpful predictions and great chronic disease check feature. Highly recommend!",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5eec03eac3322af8558f4784bb6e851fbff70f0a8e166c17d7471c002af09fc0?apiKey=eb1e27a892cb49d8a25258d2564dfff8&",
  },
];

function TestimonialCard({ name, image, t }) {
  return (
    <div className="flex flex-col items-start p-6 w-full bg-white rounded-3xl shadow-lg max-md:px-5">
      <div className="flex flex-col sm:items-center sm:gap-4">
        <img
          loading="lazy"
          src={image}
          alt={`${name}'s profile`}
          className="object-contain shrink-0 rounded-full aspect-square w-[82px]"
        />
        <div className=" font-semibold sm:text-3xl text-xs flex-wrap">{name}</div>
      </div>
      <div className="shrink-0 mt-4 h-0.5 md:h-1 border-2 md:border-4 border-black w-full" />
      <p className="self-stretch mt-4 leading-8">{t}</p>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="my-40 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col text-black max-md:mt-10 max-md:max-w-full">
            <h2 className="text-5xl font-medium max-md:mr-1 max-md:max-w-full max-md:text-4xl">
              What Our Users Say{" "}
              <span className="text-emerald-500">About Us</span>
              <span className="text-emerald-500">?</span>
            </h2>
            <p className="mt-14 text-xl text-justify max-md:mt-10 max-md:max-w-full">
              At ProCare, our customer satisfaction is our top priority. They
              love us for our accurate disease predictions, personalized
              medication advice, and comprehensive chronic disease checks. Our
              advanced AI technology ensures reliable health predictions based
              on symptoms, helping users stay ahead of potential health issues.
              The tailored medication recommendations cater to individual needs,
              providing the best possible care.
            </p>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[60%] max-md:ml-0 max-md:w-full">
          <div className="grid grid-cols-2 gap-6 mt-2 text-xl text-black max-md:mt-10">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                image={testimonial.image}
                t={testimonial.t}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
