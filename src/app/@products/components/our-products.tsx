import React from 'react';

const mockProducts = [
  {
    id: 1,
    name: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    oldPrice: 'Rp 3.500.000',
    image: '/images/products/syltherine.jpg',
    discount: '30%',
  },
  {
    id: 2,
    name: 'Leviosa',
    description: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    image: '/images/products/leviosa.jpg',
  },
  {
    id: 3,
    name: 'Lolito',
    description: 'Luxury big sofa',
    price: 'Rp 7.000.000',
    oldPrice: 'Rp 14.000.000',
    image: '/images/products/lolito.jpg',
    discount: '50%',
  },
  {
    id: 4,
    name: 'Respira',
    description: 'Minimalist fan',
    price: 'Rp 500.000',
    image: '/images/products/respira.jpg',
    new: true,
  },
  {
    id: 5,
    name: 'Grifo',
    description: 'Night lamp',
    price: 'Rp 1.500.000',
    image: '/images/products/grifo.jpg',
  },
  {
    id: 6,
    name: 'Muggo',
    description: 'Small mug',
    price: 'Rp 150.000',
    image: '/images/products/muggo.jpg',
    new: true,
  },
  {
    id: 7,
    name: 'Pingky',
    description: 'Cute bed set',
    price: 'Rp 7.000.000',
    oldPrice: 'Rp 14.000.000',
    image: '/images/products/pingky.jpg',
    discount: '50%',
  },
  {
    id: 8,
    name: 'Potty',
    description: 'Minimalist flower pot',
    price: 'Rp 500.000',
    image: '/images/products/potty.jpg',
    new: true,
  },
];

export interface IOurProductsProps {}

const ProductCard = ({ product }: { product: any }) => (
  <div className="relative w-[285px] h-[446px] flex-shrink-0 group">
    <div className="absolute inset-0 bg-[#F4F5F7]" />
    <img
      src={product.image}
      alt={product.name}
      className="absolute top-0 left-0 w-[285px] h-[301px]"
    />
    {product.discount && (
      <div className="rounded-full absolute top-[24px] left-[213px] w-[48px] h-[48px] bg-[#E97171] flex items-center justify-center text-white text-sm font-semibold">
        -{product.discount}
      </div>
    )}
    {product.new && (
      <div className="rounded-full absolute top-[24px] left-[213px] w-[48px] h-[48px] bg-[#2EC1AC] flex items-center justify-center text-white text-sm font-semibold">
        <p className="font-gilroy font-medium text-[16px] leading-[150%] text-white">
          New
        </p>
      </div>
    )}
    <div className="absolute top-[71.08%] left-[5.61%] right-[10.88%] text-[#3A3A3A]">
      <h3 className="font-gilroyBold text-[24px] leading-[120%] text-[#3A3A3A]">
        {product.name}
      </h3>
      <p className="font-gilroyMedium text-[16px] leading-[150%] text-[#898989]">
        {product.description}
      </p>
      <div className="font-gilroyBold text-[20px] leading-[150%]">
        <span className=" text-2xl text-[#3A3A3A]">{product.price}</span>
        {product.oldPrice && (
          <span className="font-gilroylight text-[16px] leading-[150%] line-through text-[#B0B0B0]">
            {product.oldPrice}
          </span>
        )}
      </div>
    </div>

    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[#3A3A3A]/[0.72] transition-opacity">
      <div className="flex flex-col items-center justify-center h-full">
        <button className="bg-white text-[#E89F71] font-semibold text-lg px-6 py-2">
          Add to cart
        </button>
        <div className="flex gap-12 mt-6">
          <div className="flex items-center gap-2">
            <img
              src="/icons/gridicons_share.svg"
              alt="Share"
              className="w-6 h-6"
            />
            <span className="text-white font-semibold">Share</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/icons/heart-card.svg" alt="Like" className="w-6 h-6" />
            <span className="text-white font-semibold">Like</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const OurProducts = ({}: IOurProductsProps) => {
  return (
    <div>
      <div className="relative w-[1236px] mx-auto mt-16">
        <h2 className="mb-8 font-gilroyBold  text-[40px] leading-[120%] text-center text-[#3A3A3A]">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center items-center mt-[2rem] mb-[2.75rem]">
          <button className="w-[245px] h-[48px] border border-[#E89F71] text-[#E89F71] font-semibold text-lg">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
