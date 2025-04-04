"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import axios from "axios";

import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import Image from "next/image";
const Hero = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageGeneration = async () => {
    setLoading(true);
    const options = {
      method: "POST",
      url: "https://ai-text-to-image-generator-flux-free-api.p.rapidapi.com/aaaaaaaaaaaaaaaaaiimagegenerator/quick.php",
      headers: {
        "x-rapidapi-key": "c4263d6ecamsh1f1bd720db24825p11641ajsn10b99a49f54a",
        "x-rapidapi-host":
          "ai-text-to-image-generator-flux-free-api.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        prompt: prompt,
        style_id: 1,
        size: "1-1",
      },
    };

    try {
      const response = await axios.request(options);
      console.log("Response data: LALALALLALALALLALAL", response.data);
      setImage(response?.data.final_result[0].origin);
      toast.success("Image has been generated successfully");
    } catch (error) {
      console.error("Error:", error);
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("O-Oh, something went wrong. Try again...");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadImage = () => {
    const link = document.createElement("a");
    link.target = "_blank";
    link.href = image;
    link.download = "generated-img.jpg";
    link.click();
  };
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
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            type="text"
            placeholder="Generate your desired sticker"
            className="h-full rounded-lg outline-none w-full text-black block flex-1 placeholder:text-xs sm:placeholder:text-base"
          />
          <Button
            onClick={handleImageGeneration}
            variant={"default"}
            size={"lg"}
          >
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

        {/* Show Loading and Image */}

        {loading && (
          <div className="mt-8 flex flex-col items-center">
            <Loader2 className="animate-spin mt-6" />
          </div>
        )}
        {image && (
          <div className="mt-8 flex flex-col items-center">
            <img
              src={image}
              alt="ai image"
              className="w-full h-[500px] rounded-lg shadow-lg"
              loading="lazy"
            />
            <Button
              onClick={handleDownloadImage}
              className="my-4 bg-violet-600 hover:bg-violet-950"
            >
              Download
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
