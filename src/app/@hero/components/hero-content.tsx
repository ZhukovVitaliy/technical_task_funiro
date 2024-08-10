'use client';

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';
import React from 'react';

export interface IHeroContentProps {}

const HeroContent = ({}: IHeroContentProps) => {
  return (
    <Card
      className=" p-4 w-full max-w-[494px] h-full max-[553px] bg-white/70 backdrop-blur-[15.5px] ml-4 rounded-none"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <CardBody
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-3"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          High-Quality Furniture Just For You
        </Typography>
        <Typography
          className="font-gilroyMedium text-[20px] leading-[150%] text-[#898989]"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Our furniture is made from selected and best quality materials that
          are suitable for your dream home.
        </Typography>
      </CardBody>
      <CardFooter
        className="pt-0"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Button
          color="orange"
          className="w-full rounded-none"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Shop Now
        </Button>
      </CardFooter>
    </Card>

    // <div className="flex flex-col items-start justify-center p-8 max-w-sm bg-white/70 backdrop-blur-[15.5px] rounded-lg shadow-lg">
    //   <h2 className="text-4xl font-bold leading-tight text-gray-900 mb-4">
    //     High-Quality Furniture Just For You
    //   </h2>
    //   <p className="text-sm font-medium leading-[150%] text-gray-500 mb-8">
    //     Our furniture is made from selected and best quality materials that are
    //     suitable for your dream home
    //   </p>
    //   <button className="px-8 py-3 text-white bg-[#D3A37D] rounded-full shadow-md hover:bg-[#c2946b]">
    //     Shop Now
    //   </button>
    // </div>
  );
};

export default HeroContent;

// /* Rectangle 11 */

// position: absolute;
// width: 494px;
// height: 553px;
// left: 100px;
// top: 141px;

// background: rgba(255, 255, 255, 0.72);
// backdrop-filter: blur(15.5px);
// /* Note: backdrop-filter has minimal browser support */
