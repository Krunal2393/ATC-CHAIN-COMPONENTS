import React from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { getAllMainCategory } from '../../../fetchers/universalFetch';
import { Loader, PopOver, ProductNotFound } from '../../Ui';
import { Card } from 'flowbite-react';

const SubProducts = () => {
  const { isLoading, isError, data, error, onSuccess } = useQuery({
    queryKey: ['SliderProducts'],
    queryFn: getAllMainCategory,
  });

  const productData = data?.data?.response?.primary_products;

  if (isLoading) return <Loader />;
  if (isError) return <ProductNotFound />;
  return (
    <>
      {productData?.map((product, i) => (
        <motion.div
          key={i}
          className="transition-all duration-100 ease-in-out delay-150 py-10 px-2"
        >
          <div className="border border-primary rounded-xl">
            <div className="flex flex-col space-y-4 md:space-y-8  md:mt-0 w-96 ">
              <div className="relative group flex justify-center items-center h-full w-full">
                <img
                  className="object-center object-cover h-full w-full rounded-t-lg"
                  src={
                    product?.image_1920 && product?.image_1920
                      ? `${process.env.NEXT_PUBLIC_API_BASE_URL_DEV}${
                          product?.image_1920
                            ? product?.image_1920
                            : product?.image_url
                        }`
                      : '/assets/images/products/product2.jpeg'
                  }
                  alt={product?.name}
                />
                <button className="focus:outline-none line-clamp-1 focus:ring-2 rounded-t-lg   top-0 z-10 absolute text-xl font-bold leading-none text-gray-100 py-5 w-full bg-primary/40">
                  {product?.name}
                </button>
                <div className="absolute opacity-0 group-hover:opacity-100 rounded-t-lg transition duration-500 top-0 py-[30px] z-0 px-20 w-full bg-primary/50 bg-opacity-50" />
              </div>
            </div>
            <div className="p-2 bg-primary text-white rounded-b-lg flex justify-between items-center px-6">
              <div>
                <h3 className="text-lg font-bold line-clamp-1 ">
                  Click Here For more Detail
                </h3>
              </div>
              <div className="relative">
                <PopOver />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default SubProducts;
