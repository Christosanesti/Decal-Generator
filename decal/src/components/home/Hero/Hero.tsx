import { Button } from "@/components/ui/button";
import React from "react";

const Hero = () => {
  return (
    <div className="w-[95%] min-h-screen relative mx-auto mt-[20vh]">
      <div className="relative z-10 text-white flex flex-col items-center justify-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center bg-gradient-to-br from-red-400 via-violet-600 to-red-900 bg-clip-text text-transparent">
          Create Beautiful Punk Decals <br />
          with a click of a button
        </h1>
        <p className="mt-3 text-sm md:text-base font-semibold text-center text-gray-300">
          Generate printable decals using the power of AI
        </p>

        {/* Prompt input box */}

        <div className="h-11 md:h-16 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-white rounded-lg mt-12 px-2 md:px-6 flex items-center justify-between ">
          <input
            type="text"
            placeholder="Generate your desired sticker"
            className="h-full rounded-lg outline-none w-full text-black block flex-1 placeholder:text-xs sm:placeholder:text-base"
          />
          <Button variant={"default"} size={"lg"}>
            Generate
          </Button>
        </div>
        {/* Tags */}
        <div className="flex cursor-pointer items-center mt-6 space-x-4 flex-wrap space-y-3">
          <p>Popular tags: </p>
          <Button variant={"secondary"}>Creative</Button>
          <Button variant={"secondary"}>Hyper Reality</Button>
          <Button variant={"secondary"}>Steam Punk</Button>
          <Button variant={"secondary"}>Animation</Button>
          <Button variant={"secondary"}>Business</Button>
          <Button className="hidden" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
