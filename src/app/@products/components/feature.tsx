import Image from 'next/image';
import React from 'react';

const features = [
  {
    id: 1,
    icon: '/icons/trophy.svg',
    title: 'High Quality',
    description: 'crafted from top materials',
  },
  {
    id: 2,
    icon: '/icons/guarantee.svg',
    title: 'Warranty Protection',
    description: 'Over 2 years',
  },
  {
    id: 3,
    icon: '/icons/shipping.svg',
    title: 'Free Shipping',
    description: 'Order over 150 $',
  },
  {
    id: 4,
    icon: '/icons/customer-support.svg',
    title: '24 / 7 Support',
    description: 'Dedicated support',
  },
];

export interface IFeatureProps {}

const Feature = ({}: IFeatureProps) => {
  return (
    <div className="flex justify-between items-center space-x-8 mt-20 mb-20">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="relative flex-none w-[280px] h-[85px] bg-white hover:shadow-md transition-shadow duration-200"
        >
          <div className="absolute w-[85px] h-[85px] flex items-center justify-center">
            <Image
              width={40}
              height={40}
              src={feature.icon}
              alt={feature.title}
            />
          </div>

          <div className="absolute left-[86px] top-[16px] w-[194px] h-[53px]">
            <h3 className="font-gilroyBold text-[18px] leading-[150%] text-[#3A3A3A]">
              {feature.title}
            </h3>
            <p className="font-gilroyMediumoy text-[16px] leading-[150%] text-[#898989] mt-[2px]">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feature;
