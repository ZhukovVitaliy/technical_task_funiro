import React from 'react';
import HeroContent from './components/hero-content';
import HeroGallery from './components/hero-gallery';
import InfoBox from './components/info-box';
import Nav from './components/nav';

export interface IPageProps {}

const Page = ({}: IPageProps) => {
  return (
    <div>
      <Nav />
      <div className="relative max-h-[623px] h-[calc(100vh-50px)] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[623px]">
        <div className="absolute top-0 left-0 z-10">
          <HeroContent />
        </div>
        <div className="absolute bottom-0 right-1 z-0 w-full h-full sm:w-[500px] sm:h-[300px] md:w-[600px] md:h-[350px] lg:w-[700px] lg:h-[400px] xl:w-[934px] xl:h-[553px]">
          <HeroGallery />
        </div>
        <InfoBox />
      </div>
    </div>
  );
};

export default Page;
