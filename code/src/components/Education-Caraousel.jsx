"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function EducationCaraousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full transition-all delay-1000 ease-in-out duration-1000 animate-in sm:w-12/12 py-5  mx-auto   "
      loop={true}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {reviews?.map((review, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Link
                href={review?.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="h-[500px]  rounded-xl relative max-sm:h-[25rem]  ">
                  <Image
                    src={review?.profile}
                    alt="profile"
                    fill
                    className=" object-cover rounded-xl  absolute overflow-hidden select-none "
                  />
                </Card>
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

let reviews = [
  {
    profile: "/Frame10.png",
    link: "https://includedhealth.com/blog/insights/nutrition-is-a-key-element-for-longevity-and-quality-of-life/",
  },
  {
    profile: "/Frame11.png",
    link: "https://www.mayoclinic.org/diseases-conditions/infectious-diseases/expert-answers/monkeypox-faq/faq-20533608",
  },
  {
    profile: "/Frame12.png",
    link: "https://www.tidalequality.com/blog/ensuring-inclusive-healthcare-matters-and-how-equity-sequence-can-help",
  },
  {
    profile: "/Frame 13.png",
    link: "https://fastercapital.com/content/Positive-Habits--Quality-Sleep---Restful-Nights--The-Importance-of-Quality-Sleep-for-Well-being.html",
  },
  {
    profile: "/Frame 14.png",
    link: "https://www.ftd.com/blog/4-ways-invite-gratitude-life",
  },
  {
    profile: "/Frame 15.png",
    link: "https://www.hindustantimes.com/columns/water-the-fuel-for-peak-performance/story-aKgKNOLB30fXHlYBSMqVbN.html",
  },
];
