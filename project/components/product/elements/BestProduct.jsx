import React from "react";

const BestProduct = () => {
  return (
    <div className=" mx-auto">
      <div className="grid-cols-2 p-4 lg:p-20 space-y-2  lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-2">
        <div className="w-full rounded">
          <figure className="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <a href="#">
              <img
                className="rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                alt="image description"
              />
            </a>
            <figcaption className="absolute bottom-6 px-4 text-lg text-white">
              <p>
                Do you want to get notified when a new component is added to
                Flowbite?
              </p>
            </figcaption>
          </figure>
        </div>
        <div className="w-full rounded-full">
          <figure className="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <a href="#">
              <img
                className="rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                alt="image description"
              />
            </a>
            <figcaption className="absolute bottom-6 px-4 text-lg text-white">
              <p>
                Do you want to get notified when a new component is added to
                Flowbite?
              </p>
            </figcaption>
          </figure>
        </div>
        <div className="w-full col-span-2 row-span-2 rounded">
          <figure className="relative  transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <a href="#">
              <img
                className="rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                alt="image description"
              />
            </a>
            <figcaption className="absolute bottom-6 px-4 text-lg text-white">
              <p>
                Do you want to get notified when a new component is added to
                Flowbite?
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default BestProduct;
