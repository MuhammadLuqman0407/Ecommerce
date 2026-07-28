import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const MainBanner = () => {
  return (
    <div className="relative w-full overflow-hidden py-4.5">
      <img
        src={assets.main_banner_bg}
        alt="banner_large_screen"
        className="hidden md:block w-full h-[520px] object-cover rounded-[20px]"
      />
      <img
        src={assets.main_banner_bg_sm}
        alt="banner_small_screen"
        className="block md:hidden w-full h-[480px] object-cover rounded-[20px]"
      />

      <div className="absolute inset-0 flex items-end md:items-center justify-center md:justify-start">
        <div className="w-full max-w-2xl px-5 pb-8 md:pb-0 md:px-12 lg:px-20 text-center md:text-left">
          <div className="bg-white/70 md:bg-transparent p-9 backdrop-blur-sm rounded-[28px] md:rounded-none px-5 py-6 md:px-0 md:py-0">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Fresh Organic Grocery
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Freshness You Can Trust, Savings You Will Love!
            </h1>

            <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-white transition hover:bg-primary-dark"
              >
                Shop now
                <i className="fa-solid fa-arrow-right ml-3" />
              </Link>

              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-gray-800 transition hover:bg-gray-100"
              >
                Explore deals
                <i className="fa-solid fa-arrow-right ml-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;