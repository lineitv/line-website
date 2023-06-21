import React from 'react';
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {Collapse} from "react-collapse";
interface props {
    open: any,
    toggle: any,
    title: String,
    desc: String
}

const AccordionItem = ({open, toggle, title, desc}: props) => {
  return (
    <div onClick={toggle} className='bg-white mb-4 py-[25px] px-[50px] flex flex-col justify-between items-center cursor-pointer'>
        
        <div className='flex w-full justify-between text-[30px]'>
        <p className='text-[22px] font-semibold'>{title}</p>
            {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>

        <Collapse isOpened={open}>
            <div className='bg-white mt-[20px] pl-3 border-l-4 border-[#E84E36]'>{desc}</div>
        </Collapse>
    </div>
  )
}

export default AccordionItem