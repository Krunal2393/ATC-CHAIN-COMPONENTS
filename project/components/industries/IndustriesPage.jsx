import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { BannerImage, TitleSection } from '../Ui';
import IndustryDetails from './elements/IndustryDetails';

const Industries = () => {
  return (
    <>
      <BannerImage />
      <div className="my-20">
        <TitleSection name="Industries" />
      </div>
      <IndustryDetails />
    </>
  );
};
export default dynamic(() => Promise.resolve(Industries), { ssr: false });
