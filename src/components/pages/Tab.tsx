import React, { useState } from 'react';
import {  FiPlus, FiMinus } from 'react-icons/fi';

const Tab = ({  icon,title,color,size,pieces,address,des }:any) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div  className='lg:bg-white mt-5 p-[20px]  lg:w-[500px] rounded-lg md:w-full '>
      <div className="flex items-center justify-between bg-gray-100 p-4 cursor-pointer" onClick={handleToggle}>
        <div className="flex items-center">
        <div>{icon}</div>
          <div className="font-bold">{title}</div>
        </div>
        <div className="flex items-center">
          {isOpen ? <FiMinus /> : <FiPlus />}
        </div>
      </div>
      {isOpen && <div className="p-4">

        <p className='mt-3'>{color}</p>
        <p className='mt-3'>{size}</p>
        <p className='mt-3'>{pieces}</p>
        <p className='mt-3'>{address}</p>
        <p className='mt-3'>{des}</p>

        </div>}
    </div>
  );
};



export default Tab;