import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface INavProps {}

const Nav = ({}: INavProps) => {
  return (
    <div className="flex items-center  w-full  mx-auto px-4 pt-4 mb-[56px]">
      {/* <!-- Logo --> */}
      <div className="font-gilroyBold text-[24px] leading-[29px] mr-4">
        Funiro.
      </div>

      {/* <!-- Navigation Links --> */}
      <div className="flex space-x-8 text-sm font-gilroyMedium text-gray-700">
        <Link href="/" className="hover:text-gray-900">
          Products
        </Link>
        <div className="relative group">
          <button className="hover:text-gray-900">Rooms</button>
          <div className="absolute left-0 w-full h-[1px] bg-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <Link href="/" className="hover:text-gray-900">
          Inspirations
        </Link>
      </div>

      {/* <!-- Search Bar --> */}
      <div className="flex-1 mx-8 max-w-[473px] ">
        <input
          type="text"
          placeholder="Search for minimalist chair"
          className="w-full px-4 py-2 text-sm border outline-none focus:ring-2 focus:ring-gray-300"
        />
      </div>

      {/* <!-- Icons --> */}
      <div className="ml-auto flex items-center space-x-4">
        <Image
          className="w-6 h-6"
          width={24}
          height={24}
          src="/icons/heart.svg"
          alt="Favorite Icon"
        />
        <Image
          className="w-6 h-6"
          width={24}
          height={24}
          src="/icons/cart.svg"
          alt="Cart Icon"
        />
        <Image
          className="w-8 h-8 rounded-full"
          width={32}
          height={32}
          src="/images/avatar.png"
          alt="User Avatar"
        />
      </div>
    </div>
  );
};

export default Nav;
