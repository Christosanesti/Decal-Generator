import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="py-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 xl:order-1">
          <Image
            src={"/1.webp"}
            className="rounded-lg w-full"
            width={400}
            height={400}
            alt="Sample of our printable stickers"
          />
        </div>
        <div className="order-2 lg:order-1">
          <h1 className="text-gray-300 mb-4 font-semibold text-lg capitalize">
            What we do?
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-full">
            Create your own stickers
          </h1>
          <p className="text-gray-200 mb-8 text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero est
            ea dolorum quos, repudiandae quibusdam dolore? Cumque doloribus
            saepe explicabo possimus nemo, tempore obcaecati accusantium cum qui
            vitae fuga incidunt.
          </p>
          <Button className="bg-rose-500 w-36 h-12"></Button>
        </div>
      </div>
    </div>
  );
};

export default About;
