import { Star } from "lucide-react";
import { StarIcon } from "../star-icon";

const Review = () => {
  return (
    <div className="">
      <div className="flex flex-col">
        <div className=" flex space-x-4 ">
          <div className="flex-shrink-0 pt-0.5">
            <div className="relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-10 w-10 text-lg ring-1 ring-white dark:ring-neutral-900">
              <img
                className="absolute inset-0 w-full h-full object-cover rounded-full"
                src="./static/media/Image-9.d879028d45de09c9ca3b.png"
                alt="Cody Fisher"
              />
              <span className="wil-avatar__name">C</span>
            </div>
          </div>
          <div className="flex-1 flex justify-between">
            <div className="text-sm sm:text-base">
              <span className="block font-semibold">Cody Fisher</span>
              <span className="block mt-0.5 text-slate-500 dark:text-slate-400 text-sm">
                May 20, 2021
              </span>
            </div>
            <div className="mt-0.5 flex text-yellow-500">
              <StarIcon className="h-5 w-5" />
              <StarIcon className="h-5 w-5" />
              <StarIcon className="h-5 w-5" />
              <StarIcon className="h-5 w-5" />
              <StarIcon className="h-5 w-5" />
            </div>
          </div>
        </div>
        <div className="mt-4 prose prose-sm sm:prose dark:prose-invert sm:max-w-2xl">
          <p className="text-slate-600 dark:text-slate-300">
            Very nice feeling sweater. I like it better than a regular hoody
            because it is tailored to be a slimmer fit. Perfect for going out
            when you want to stay comfy. The head opening is a little tight
            which makes it a little.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
