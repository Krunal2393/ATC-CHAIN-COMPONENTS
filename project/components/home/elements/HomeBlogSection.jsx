import React from 'react';

const HomeBlogSection = () => {
  return (
    <div className="my-10">
      <div className="flex justify-between items-end mb-4">
        <div className="w-full hidden lg:block">
          <img
            className="w-[500px] h-full"
            src="/assets/icons/svg/blogSection.png"
            alt="product"
          />
        </div>
        <div className="w-full text-end p-2 mr-0 2xl:mr-28 lg:mr-20">
          <h2 className="font-semibold text-xl lg:text-[40px] 2xl:text-[46px] leading-[55px] text-primary">
            Discover the Industry insights with our Blogs.
          </h2>
          <p className="text-[20px] text-text-gray my-4">
            We deliver end-to-end conveying customer-centric services that
            caters to innovative solutions for all kinds of consumer.
          </p>
        </div>
      </div>
      <div className="block mx-2 lg:mx-20 2xl:mx-28 lg:flex px-2 gap-10">
        <div className=" w-full">
          <div className="flex my-4 pb-4 border-b-2 gap-4 items-center">
            <div>
              <img
                className=" h-[20vh] w-full rounded-xl"
                src="/assets/images/blogs/blog-1.png"
              />
            </div>
            <div>
              <p className="text-xs text-primary">Dianne Russell</p>
              <h3 className="text-lg lg:text-[24px] text-primary fornt-medium my-2">
                The things we need to check when we want to buy a house
              </h3>
              <p className="text-text-gray"> 25 Apr 2021</p>
            </div>
          </div>
          <div className="flex my-4 pb-4 border-b-2 gap-4 items-center">
            <div>
              <img
                className=" h-[20vh] w-full rounded-xl"
                src="/assets/images/blogs/blog-1.png"
              />
            </div>
            <div>
              <p className="text-xs text-primary">Dianne Russell</p>
              <h3 className="text-lg lg:text-[24px] text-primary fornt-medium my-2">
                The things we need to check when we want to buy a house
              </h3>
              <p className="text-text-gray"> 25 Apr 2021</p>
            </div>
          </div>
          <div className="flex my-4 pb-4 border-b-2 gap-4 items-center">
            <div>
              <img
                className=" h-[20vh] w-full rounded-xl"
                src="/assets/images/blogs/blog-1.png"
              />
            </div>
            <div>
              <p className="text-xs text-primary">Dianne Russell</p>
              <h3 className="text-lg lg:text-[24px] text-primary fornt-medium my-2">
                The things we need to check when we want to buy a house
              </h3>
              <p className="text-text-gray"> 25 Apr 2021</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div>
            <img
              className="w-full h-full rounded-[20px]"
              src="/assets/images/blogs/blog-2.png"
            />
          </div>
          <div className="my-4">
            <p className="text-primary text-xs">Cameron Williamson</p>
            <h3 className="text-[24px] 2xl:text-4xl  lg:text-2xl text-primary fornt-medium my-2">
              12 Things to know before buying a house
            </h3>
            <p className="text-text-gray text-[20px]">
              Want to buy a house but are unsure about what we should know, here
              I will try to explain what we should know and check when we want
              to buy a house
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlogSection;
