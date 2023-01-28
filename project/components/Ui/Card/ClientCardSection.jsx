import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { useQuery } from '@tanstack/react-query';
import { getAllClients } from '../../../fetchers/universalFetch';
import Testing from '../slider/Slider';

const ClientCardSection = () => {
  const { isLoading, isError, data, error, onSuccess } = useQuery({
    queryKey: ['clients'],
    queryFn: getAllClients,
  });
  const clients = data?.data?.clients;
  return (
    <ErrorBoundary>
      <div className=" lg:max-w-6xl md:max-w-3xl sm:max-w-2xl  max-w-lg w-full rounded-3xl pb-5 mb-6 lg:p-12 p-3 bg-primary">
        <div className="flex flex-col items-center justify-center text-white mb-6">
          <p>Wall of fame</p>
          <h1 className="font-bold text-4xl sm:text-3xl">Our Clients</h1>
        </div>
        <section className="sandbox__carousel">
          <Testing>
            {clients?.map((image, i) => {
              return (
                <>
                  {image?.image_url ? (
                    <img
                      key={i}
                      width={150}
                      src={
                        image?.image_url
                          ? `${process.env.NEXT_PUBLIC_API_BASE_URL_DEV}${image?.image_url}`
                          : ''
                      }
                      alt={image?.name}
                      className="mx-2 rounded-lg"
                    />
                  ) : (
                    ''
                  )}
                </>
              );
            })}
          </Testing>
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default ClientCardSection;
