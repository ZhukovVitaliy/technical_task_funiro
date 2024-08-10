import React from 'react';
import InspirationGallary from './components/inspiration-gallary';
import InspirationInfo from './components/inspiration-info';

export interface IPageProps {}

const Page = ({}: IPageProps) => {
  return (
    <div className="flex">
      <InspirationInfo />
      <div className="overflow-hidden w-[100%]">
        <div className="w-[404px] h-[582px] mt-[44px] mb-[44px]">
          <InspirationGallary />
        </div>
      </div>
    </div>
  );
};

export default Page;
