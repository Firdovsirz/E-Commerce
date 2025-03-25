import React from 'react';
import WatchIcon from '@mui/icons-material/Watch';
import ComputerIcon from '@mui/icons-material/Computer';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';

export default function CategorySection() {
    const categories = ['Phones', 'Computers', 'Smart Watch', 'Camera', 'Headphones', 'Gaming'];
    const icons = [PhoneAndroidIcon, ComputerIcon, WatchIcon, CameraAltIcon, HeadphonesIcon, VideogameAssetIcon];

    return (
        <section className='w-full px-50 mt-20 py-10'>
            <div>
                <div className="flex items-center mb-5">
                    <div className="w-[20px] h-[40px] rounded mr-2" style={{ background: "#db4444" }} />
                    <p className="text-[18px] font-bold" style={{ color: "#db4444" }}>Categories</p>
                </div>
                <h2>Categories</h2>
                <div className="flex items-center justify-between mt-10 mb-20">
                    {categories.map((category, index) => {
                        const IconComponent = icons[index];
                        return (
                            <div
                                key={index}
                                className="w-[150px] 
                            h-[150px] 
                            flex
                            flex-col 
                            items-center 
                            justify-center 
                            rounded border 
                            border-gray-400 
                            p-3 transition-all 
                            duration-300 hover:bg-[#db4444] 
                            hover:text-white text-[#db4444] 
                            cursor-pointer"
                            >
                                <IconComponent className="mb-2 text-inherit transition-all duration-300" />
                                <p className="text-center">{category}</p>
                            </div>
                        );
                    })}
                </div>
                <div className="w-[70%] h-[1px] bg-[#b9b9b9]" style={{ margin: '0 auto' }} />
            </div>
        </section>
    );
}