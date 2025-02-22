import React, { useState } from 'react'
import data from './AccordionData'
import AccordionItem from './AccordionItem'

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    }
  return (
    <div className='w-1/2 bg-gray-50 rounded-lg p-8 m-4'>
        {data.map((item, index) => (
            <AccordionItem 
                key = {index}
                question = {item.question}
                answer = {item.answer}
                isOpen = {openIndex === index}
                onClick = {() =>handleClick(index)}
            />
        ))}
    </div>
  )
}

export default Accordion;