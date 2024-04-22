import Button from "./ui/button";

const Banner = () => {
  return (
    <section
      className="mb-20 h-full w-full relative bg-[#fefce8] rounded-2xl"
      aria-label="Image Slider"
    >
      <div className="pt-8 lg:pt-0 absolute z-1 inset-x-0 top-[10%] md:top-[20%] md:pl-[10%] px-6 md:max-w-[50%] sm:max-w-full">
        <div className="flex flex-col items-start max-w-lg xl:max-w-2xl space-y-5">
          <h2 className="font-bold text-black text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl !leading-[115%] ">
            Sports equipment collection.
          </h2>
          <span className="sm:text-lg md:text-xl font-light text-neutral-900">
            Fashion is a form of self-expression and autonomy at a particular
            period and place.
          </span>
          <div className="sm:pt-6">
            <Button className="py-4 lg:px-6 text-xl">Start your search</Button>
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
    </section>
  );
};

export default Banner;
