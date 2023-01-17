import React, { useState } from 'react';
import lumpSumpImg from '../../../../images/Calculator/LumpsumCalculator.png';
import aboutImg from '../../../../images/Calculator/bg.jpg';
import { LumpsumCalculation } from '../../../../utilities/calculator';
import ShowResult from '../../../ShowResult/ShowResult';

const LumpsumCalculator = () => {
    const [data, setData] = useState({
        investment: "",
        rateOfReturn: "",
        year: ""
    });
    const [modalShow, setModalShow] = useState(false);
    const [result, setResult] = useState({});
    const handleChange = e => {
        const { name, value } = e.target;
        setData(preData => ({
            ...preData,
            [name]: value
        }))
    };
    const handleSubbmit = async e => {
        e.target.reset();
        e.preventDefault();
        setResult(LumpsumCalculation(data.investment, data.rateOfReturn, data.year));
        await setModalShow(true);
    }
    const resultProperty = {
        title: "Your future value",
        first: "Your Corpus Value",
        second: "Total Earnings",
        third: "Total Deposited Amount"
    }
    return (
        <div className=' bg-slate-200 py-5'>
            <div className='mx-14'>
                <h1 className=' text-3xl font-semibold text-center my-6 tracking-wide'>Lumpsum Calculator</h1>
                <section className='grid grid-cols-2 gap-4 mb-8'>
                    <div>
                        <p>Consider a Lumpsum investment? Estimate your future wealth by using our Lumpsum Calculator.</p>
                        <div className='bg-lime-200 px-12 py-2 rounded mt-2'>
                            <form onSubmit={handleSubbmit}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="InvestmentAmount">
                                        Investment amount<span className='text-red-600'>*</span>
                                    </label>
                                    <input name='investment' onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="InvestmentAmount" type="number" placeholder="Ex: 10000" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="InvestmentAmount">
                                        Expected rate of return (P.A)<span className='text-red-600'>*</span>
                                    </label>
                                    <input name='rateOfReturn' onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="InvestmentAmount" type="number" placeholder="Ex: 13%" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="InvestmentAmount">
                                        Tenure (in years) (Max 50 Year)<span className='text-red-600'>*</span>
                                    </label>
                                    <input name='year' onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="InvestmentAmount" type="number" placeholder="Ex: 11" />
                                </div>
                                <div className='text-center'>
                                    <input type="submit" className='bg-lime-600 text-white px-6 py-2 rounded-lg text-xl mx-auto' value="Calculate" />
                                </div>
                            </form>
                        </div>
                        <ShowResult resultProperty={resultProperty} result={result} show={modalShow} onHide={() => setModalShow(false)}>

                        </ShowResult>
                    </div>
                    <div className='w-80 mx-auto'>
                        <img className='w-full mt-6' src={lumpSumpImg} alt="" />
                    </div>
                </section>
                <section>
                    <div className='mx-auto relative w-96' >
                        <img src={aboutImg} alt="" />
                        <h3 className='font-semibold absolute top-4 left-10 text-xl'>About Fintick Lumpsum Calculator</h3>
                    </div>
                    <div className='mb-3'>
                        <h3 className='text-lg font-medium' >1. What is a Lumpsum Investment?</h3>
                        <p>A lumpsum or one-time investment is a form of investment in which you make a single investment (lump sum) and the money you invest is compounded over a period of time.
                        </p>
                    </div>
                    <div className='mb-3'>
                        <h3 className='text-lg font-medium' >2. What Is Lumpsum Calculator?</h3>
                        <p>A fixed price calculator allows you to calculate the maturity value of your investment. In other words, a straight-line calculator shows the future value of an investment made today at a particular interest rate. for example:
                            If at an interest rate of 15% he invested Rs 100,000 for 60 years, according to the fixed rate calculator, the future value of the investment would be a whopping 43.8 Cr. 60 years later.
                        </p>
                    </div>
                    <div className='mb-3'>
                        <h3 className='text-lg font-medium' >3. When should one prefer Lumpsum Investment?
                        </h3>
                        <p>Ideally, all investments (lump sum or SIP) take into consideration a variety of things such as current income, risk profile, age, tax regime, liquidity needs, timeframes and other idiosyncratic constraints is needed. Bulk investments are preferred if you have a large amount of surplus money or, more importantly, if you believe the market has corrected sharply or will not fall immediately after your investment. A lump sum investment over a period of time can help generate a compounded rate of return.
                        </p>
                    </div>
                    <div className='mb-3'>
                        <h3 className='text-lg font-medium' >4 What's the difference between Lumpsum and SIP?</h3>
                        <p>A capital investment requires a one-time investment, whereas a SIP or systematic investment plan invests a fixed amount on a regular basis. Market conditions play a large role in investment style, as if the market undergoes a significant correction after an investment, it can take years to return to your original investment amount. On the other hand, SIP (systematic) investment style invests when the market rises and falls, so there is no need to worry about the timing of the market. The return achieved is therefore the weighted average return.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default LumpsumCalculator;