import React from 'react';

interface ButtonProp {
    width: string;
    content: string;
    onClick?: () => void; // Adding optional onClick prop
}

export default function Button({ width, content, onClick }: ButtonProp) {
    return (
        <button 
            style={{ minWidth:  `${width}px` }} 
            className="flex justify-center items-center h-[40px] bg-[#db4444] text-white px-4 py-2 rounded border-2 text-[16px] border-[#db4444] hover:bg-transparent hover:text-[#db4444] transition-all duration-300 ease-in-out cursor-pointer"
            onClick={onClick}
        >
            {content}
        </button>
    );
}