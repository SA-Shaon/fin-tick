import React from 'react';
import { Link } from 'react-router-dom';

const Calculator = (props) => {
    const { name, img, details, route } = props.calculator;
    return (
        <div className='border-2 border-lime-500 w-80 shadow-xl shadow-gray-400 py-12 text-center rounded-xl hover:bg-lime-600 hover:text-white group px-3'>
            <h2 className='text-2xl font-semibold mb-7'>{name}</h2>
            <div className='w-52 h-40 mx-auto'>
                <img className='w-100 h-100 object-cover' src={img} alt="" />
            </div>
            <p className=' mt-7 '><small>{details}</small>
            </p>
            <Link to={`/calculator/${route}`} >
                <button className='px-12 py-2 bg-lime-600 group-hover:bg-white text-white rounded-xl mt-5'><span className='group-hover:text-lime-600'>Launch Calculator</span></button>
            </Link>
        </div>
    );
};

export default Calculator;