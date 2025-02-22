import React, { useState, useRef } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function AccordionItem({question, answer, isOpen, onClick}) {
    const contentRef = useRef(null);
  return (
    <div className='border-b border-gray-200'>
        <button className={`flex justify-between items-center w-full p-6 hover:bg-slate-500 hover:text-white cursor-pointer ${isOpen? `bg-slate-500 text-white` : `bg-white text-gray-900`}`}
            onClick={onClick}
        >
            <p className='text-lg font-medium'>{question}</p>
            <span className={'transform transition-transform duration-500 ' + (isOpen ? 'rotate-180' : '')}>
                <IoIosArrowDown/>
            </span>
        </button>

        <div className='overflow-hidden transition-all duration-500 ease-in-out' 
            style={{ 
                maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
                opacity: isOpen ? 1 : 0
            }}
        >
            <div ref={contentRef}>
                <p className='text-gray-600 p-6'>{answer}</p>
            </div>
        </div>
    </div>
  )
}

export default AccordionItem