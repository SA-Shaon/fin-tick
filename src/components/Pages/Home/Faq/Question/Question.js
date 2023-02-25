import React from 'react';
import { Collapse } from 'react-collapse';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ open, toggle, question, answare }) => {
    return (
        <div className='pt-[10px]'>
            <div className='bg-slate-100 py-[25px] px-12 flex justify-between items-center cursor-pointer' onClick={toggle}>
                <p className='text-xl font-semibold'>{question}</p>
                <div className='text-xl'>
                    {open ? <AiOutlineMinus></AiOutlineMinus> : <AiOutlinePlus></AiOutlinePlus>}
                </div>
            </div>
            <Collapse isOpened={open}>
                <div className='bg-slate-100 px-12 pb-[20px]'>{answare}</div>
            </Collapse>
        </div>
    );
};

export default Question;