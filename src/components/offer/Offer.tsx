import React from 'react';

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-black text-center py-2">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-5 px-4">
        <h2 className="text-white text-xs sm:text-sm md:text-base text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
          <span className="font-bold cursor-pointer ml-2 sm:ml-5">Shop Now</span>
        </h2>
        <div className="text-white text-xs sm:text-sm md:text-base cursor-pointer">
          English
        </div>
      </div>
    </div>
  );
}