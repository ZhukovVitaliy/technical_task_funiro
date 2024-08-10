import React from 'react';
import Image from 'next/image';

const InfoBox = () => {
  return (
    <div className="absolute w-[294px] h-[148px] left-[902px] top-[436px] bg-white/70 backdrop-blur-[15.5px] p-4 shadow-lg">
      <h4 className="font-gilroyBold text-[28px] leading-[120%] text-[#3A3A3A] mb-1">
        Bohauss
      </h4>
      <p className="font-gilroyMedium text-[16px] leading-[150%] text-[#616161] mb-4">
        Luxury big sofa 2-seat
      </p>
      <div className="flex items-center justify-between">
        <span className="font-gilroyBold text-[20px] leading-[150%] text-[#3A3A3A]">
          Rp 17.000.000
        </span>
        <Image
          width={24}
          height={24}
          className="w-6 h-6 text-black"
          src="/icons/arrow-right.svg"
          alt={'arrow right'}
        />
      </div>
    </div>
  );
};

export default InfoBox;
