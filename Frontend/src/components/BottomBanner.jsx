import React from 'react'
import { assets, features } from '../assets/assets'

const BottomBanner = () => {
  return (
    <div className='relative mt-24'>
      <div className='w-full overflow-hidden rounded-[20px]'>
        <img
          src={assets.bottom_banner_image}
          alt='banner'
          className='hidden md:block w-full h-auto max-h-[520px] object-cover'
        />
        <img
          src={assets.bottom_banner_image_sm}
          alt='banner'
          className='block md:hidden w-full h-auto max-h-[550px] object-cover'
        />
      </div>

      <div className='absolute inset-0 flex flex-col items-start md:items-end pt-6 md:pt-12 lg:pt-24 md:pr-24'>
        <div className='px-6 md:px-0 max-w-xl mx-auto md:mx-0'>
          <h1 className='text-2xl md:text-3xl font-semibold text-primary mb-6'>
            Why We Are the Best?
          </h1>
          <div className='flex flex-col gap-4 mt-4 md:mt-6'>
            {features.map((feature, index) => (
              <div key={index} className='flex items-start gap-4'>
                <img src={feature.icon} alt={feature.title} className='w-9 h-9 md:w-11 md:h-11 flex-shrink-0' />
                <div>
                  <h3 className='text-lg md:text-xl font-semibold'>{feature.title}</h3>
                  <p className='text-gray-500/70 text-xs md:text-sm'>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomBanner