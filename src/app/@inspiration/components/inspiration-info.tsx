import React from 'react';

export interface IInspirationInfoProps {}

const InspirationInfo = ({}: IInspirationInfoProps) => {
  return (
    <div className="max-w-sm pt-[226px] mr-[86px]">
      <h2 className="font-gilroyBold text-4xl leading-[120%] text-[#3A3A3A] mb-4">
        50+ Beautiful rooms inspiration
      </h2>
      <p className="font-gilroyMedium  leading-[150%] text-[#616161] mb-6">
        Our designer already made a lot of beautiful prototypes of rooms that
        inspire you
      </p>
      <button className="bg-[#E89F71] text-white font-semibold text-lg py-3 px-6">
        Explore More
      </button>
    </div>
  );
};

export default InspirationInfo;
