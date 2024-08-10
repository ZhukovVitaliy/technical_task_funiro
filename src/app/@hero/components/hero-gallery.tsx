'use client';

import { Carousel } from '@material-tailwind/react';
import React from 'react';

export interface IHeroGalleryProps {}

const HeroGallery = ({}: IHeroGalleryProps) => {
  return (
    <Carousel
      loop={true}
      autoplay={true}
      className="relative w-full h-full overflow-visible"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <img
        src="/images/hero-img-1.jpg"
        alt="image 1"
        className="h-full w-full object-cover pl-[32px]"
      />
      <img
        src="/images/hero-img-2.jpg"
        alt="image 2"
        className="h-full w-full object-cover pl-[32px]"
        p-2
      />
      <img
        src="/images/hero-img-3.jpg"
        alt="image 3"
        className="h-full w-full object-cover pl-[32px]"
        p-2
      />
    </Carousel>
  );
};

export default HeroGallery;
