import React from 'react';
import Feature from './components/feature';
import OurProducts from './components/our-products';

export interface IPageProps {}

const Page = ({}: IPageProps) => {
  return (
    <div>
      <Feature />
      <OurProducts />
    </div>
  );
};

export default Page;
