import React, { useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';
import Image from 'next/image';
import { Carousel } from 'flowbite-react';
import { useStateContext } from '../ContextProvider';
import { useQuery } from '@tanstack/react-query';
import { getIndustryList } from '../../../fetchers/universalFetch';
const IndustryDetails = () => {
  const [sliderImgs, setSliderImgs] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState([]);
  const {
    ButtonDatas,
    showcontainer,
    setShowcontainer,
    filteredData,
    setFilteredData,
  } = useStateContext();

  const [clickedItem, setClickedItem] = useState(1);

  useEffect(() => {
    setFilteredData(ButtonDatas[0]);
    setSliderImgs(ButtonDatas[0].images);
  }, []);

  const handleClick = (item, id) => {
    const SubIndustry = Industry?.filter((ind) => ind?.id == id);
    console.log('SubIndustry details', SubIndustry);
    setSubCategoryList(SubIndustry[0]?.industry_subcategory_name);

    setClickedItem(id);
    setShowcontainer(!showcontainer);
    setIsActive(true);
    setFilteredData(item);
    setSliderImgs(item.images);
  };

  const [isActive, setIsActive] = useState(false);

  // const { isLoading, isError, data, error } = useQuery({
  //   queryKey: ['industry'],
  //   queryFn: getIndustryList,
  // });

  // const Industry = data?.data?.Industry;

  return (
    <>
      <div className=" industry_section sm:flex sm:w-full">
        <div className="tabgroup_buttons ">
          <Tab.Group>
            <Tab.List className="grid grid-col-1 mt-10 justify-items-center sm:justify-start ">
              {/*     {Industry?.map((industry, i) => (
                <Tab
                  key={i}
                  className={` h-28 ${
                    clickedItem === industry?.id ? 'industryactive' : 'industry'
                  }`}
                  onClick={() => handleClick(industry, industry.id)}
                >
                  {industry?.industry_category_name}
                </Tab>
              ))} */}
            </Tab.List>
          </Tab.Group>
        </div>

        <div className="Allcontent flex flex-col space-y-6 ">
          <br />
          {subCategoryList.map((item, index) => (
            <div
              key={index}
              id="custom_carousol"
              className="productimg max-w-4xl mx-auto   "
            >
              <Carousel>
                {item?.multi_images &&
                  item?.multi_images.map((image, index) => (
                    <>
                      <div key={index} className=" grid place-items-center">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_API_BASE_URL_DEV}${image.image_url}`}
                          alt="product image"
                          className="rounded-2xl w-full relative"
                          width={500}
                          height={500}
                        />
                        <div className="absolute bottom-0 productname  grid place-items-center productdetail  bg-gray-500   w-full h-12 rounded-b-2xl text-center text-blue-900 font-semibold">
                          <p className="text-sm">{image.discription_img}</p>
                        </div>
                      </div>
                    </>
                  ))}
              </Carousel>
            </div>
          ))}

          <div className="myTabContent1 flex">
            <div>
              <div className="alldata flex-col p-4 text-[#3B4355] ">
                <p className="datatitle text-[24px] font-semibold ">
                  {filteredData.title1}
                </p>
              </div>
              <div className="space-y-6 py-6 px-6 ">
                <p className="discription1 text-[20px] text-gray-600 ">
                  {filteredData.discription1}
                </p>
                <p className="discription2 text-[20px] text-gray-600">
                  {filteredData.discription2}
                </p>
                <p className="discription3 text-[20px] text-gray-600">
                  {filteredData.discription3}
                </p>
                <p className="discription4 text-[20px] text-gray-600">
                  {filteredData.discription4}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndustryDetails;
