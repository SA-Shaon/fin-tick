import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../images/Calculator/1.png';
import img2 from '../../../images/Calculator/2.png';
import img3 from '../../../images/Calculator/3.png';
import img4 from '../../../images/Calculator/4.png';
import img5 from '../../../images/Calculator/5.png';

const Calculator = () => {

    return (
        <div className='mb-12 '>
            <h1 className=' text-5xl font-semibold text-center my-12 tracking-wide'>Financial Calculators</h1>
            <div className='grid grid-cols-3 justify-items-center gap-6 text-lime-700 mx-14 '>
                <div className='border-2 border-lime-500 w-80 shadow-xl shadow-gray-400 py-12 text-center rounded-xl hover:bg-lime-600 hover:text-white group px-3 place-self-end '>
                    <h2 className='text-2xl font-semibold mb-7'>LumpSum Calculator</h2>
                    <div className='w-52 h-40 mx-auto'>
                        <img src={img1} alt="" />
                    </div>
                    <p className=' mt-7 '><small>Consider a Lumpsum investment? Estimate
                        your future wealth by using our Lumpsum Calculator.</small>
                    </p>
                    <Link to='/calculator/lumpsumCalculator'>
                        <button className='px-12 py-2 bg-lime-600 text-white rounded-xl mt-5 group-hover:bg-white group-hover:text-lime-600'>Launch Calculator</button>
                    </Link>
                </div>
                <div className='border-2 border-lime-500 w-80 shadow-xl shadow-gray-400 py-12 text-center rounded-xl hover:bg-lime-600 hover:text-white group px-3 place-self-center '>
                    <h2 className='text-2xl font-semibold mb-7'>SIP</h2>
                    <div className='w-52 h-40 mx-auto'>
                        <img className='h-full w-full' src={img2} alt="" />
                    </div>
                    <p className=' mt-7 '><small>With the SIP Calculator, you can estimate how much
                        wealth you can generate over the years.</small>
                    </p>
                    <Link to='/calculator/sipCalculator'>
                        <button className='px-12 py-2 bg-lime-600 text-white rounded-xl mt-5 group-hover:bg-white group-hover:text-lime-600'>Launch Calculator</button>
                    </Link>
                </div>
                <div className='border-2 border-lime-500 w-80 shadow-xl shadow-gray-400 py-10 text-center rounded-xl hover:bg-lime-600 hover:text-white group px-3 place-self-start '>
                    <h2 className='text-2xl font-semibold mb-7'>Goal Planning LumpSum</h2>
                    <div className='w-52 h-40 mx-auto'>
                        <img className='h-full w-full' src={img3} alt="" />
                    </div>
                    <p className=' mt-5 '><small>Would you like to invest and become rich once?
                        Calculate your investment amount for this with our
                        one-time investment calculator.
                    </small>
                    </p>
                    <Link to={'/calculator/goalPlanningCalculator'}>
                        <button className='px-12 py-2 bg-lime-600 text-white rounded-xl mt-5 group-hover:bg-white group-hover:text-lime-600'>Launch Calculator</button>
                    </Link>
                </div>
            </div>

            <div className='grid grid-cols-2 justify-items-center gap-20 text-lime-700 mt-12'>
                <div className='border-2 border-lime-500 w-80 shadow-xl shadow-gray-400 py-14 text-center rounded-xl hover:bg-lime-600 hover:text-white group px-3 place-self-end '>
                    <h2 className='text-2xl font-semibold mb-7'>Goal Planning SIP</h2>
                    <div className='w-52 h-40 mx-auto'>
                        <img className='h-full w-full' src={img4} alt="" />
                    </div>
                    <p className=' mt-5 '><small>How much do you need to invest each year or month to
                        build your wealth? Calculate your investment with our
                        regular investment calculator.

                    </small>
                    </p>
                    <button className='px-12 py-2 bg-lime-600 text-white rounded-xl mt-5 group-hover:bg-white group-hover:text-lime-600'>Launch Calculator</button>
                </div>
                <div className='border-2 border-lime-500 w-80 shadow-xl shadow-gray-400 py-10 text-center rounded-xl hover:bg-lime-600 hover:text-white group px-3 place-self-start '>
                    <h2 className='text-2xl font-semibold mb-7'>Stock Market vs FD Returns</h2>
                    <div className='w-52 h-40 mx-auto'>
                        <img className='h-full w-full' src={img5} alt="" />
                    </div>
                    <p className=' mt-5 '><small>Which is better fixed deposit or stock investment?
                        In either case, calculate your returns with
                        our Return Calculator.
                    </small>
                    </p>
                    <button className='px-12 py-2 bg-lime-600 text-white rounded-xl mt-5 group-hover:bg-white group-hover:text-lime-600'>Launch Calculator</button>
                </div>

            </div>
        </div >
    );
};

export default Calculator;