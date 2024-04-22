"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "./image-slider.css";
import Image from "next/image";
import Button from "../ui/button";
import Container from "../ui/container";

type ImageSliderProps = {
  images: {
    url: string;
    alt: string;
  }[];
};

export function ImageSlider({ images }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  return (
    <section
      className="mb-20 sm:h-[70%] h-[60%] w-full relative bg-[#f7f0ea]"
      aria-label="Image Slider"
    >
      <a href="#after-image-slider-controls" className="skip-link">
        Skip Image Slider Controls
      </a>

      <div className="pt-8 lg:pt-0 lg:absolute z-1 inset-x-0 top-[10%] md:top-[20%] md:pl-[10%] px-6 md:max-w-[50%]">
        <div className="flex flex-col items-start max-w-lg xl:max-w-2xl space-y-5 xl:space-y-8 ">
          <span className="sm:text-lg md:text-xl font-semibold text-neutral-900">
            In this season, find the best 🔥
          </span>
          <h2 className="font-bold text-black text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl !leading-[115%] ">
            Sports equipment collection.
          </h2>
          <div className="sm:pt-4">
            <Button className="py-4 px-6 text-xl">Start your search</Button>
          </div>
        </div>
      </div>

      <div className="w-full h-full flex overflow-hidden">
        {/* {images.map(({ url, alt }, index) => (
          <Image
            key={url}
            src={url}
            alt={alt}
            aria-hidden={imageIndex !== index}
            className="img-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))} */}
      </div>
      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        <ArrowLeft aria-hidden />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        <ArrowRight aria-hidden />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            className=""
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <div className="relative px-1 py-1.5 cursor-pointer">
                <div className="relative w-20 h-1 shadow-sm rounded-md bg-white">
                  <div className="nc-SectionHero2Item__dot absolute inset-0 bg-slate-900 rounded-md  "></div>
                </div>
              </div>
            ) : (
              <div className="relative px-1 py-1.5 cursor-pointer">
                <div className="relative w-20 h-1 shadow-sm rounded-md bg-white"></div>
              </div>
            )}
          </button>
        ))}
      </div>
      <div id="after-image-slider-controls" />
    </section>
  );
}
