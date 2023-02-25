import React from 'react';
import SIPImg from '../../../../images/Calculator/4.png';
import aboutImg from '../../../../images/Calculator/bg.jpg';
import { useState } from 'react';
import { gpSIPCalculation } from '../../../../utilities/calculator';
import ShowgpSIPResult from './ShowgpSIPResult';

const GoalPlanningSIP = () => {
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
    const handleSubmit = async e => {
        e.target.reset();
        e.preventDefault();
        setResult(gpSIPCalculation(data.investment, data.rateOfReturn, data.year));
        await setModalShow(true);
    }
    const resultProperty = {
        first: "Investment Amount"
    }
    return (
        <div className='mx-14'>
            <h1 className=' text-3xl font-semibold text-center my-6 tracking-wide'>Goal Planning - SIP</h1>
            <section className='grid grid-cols-2 gap-4 mb-8'>
                <div>
                    <p>How much do you need to invest each year or month to build your wealth? Calculate your investment with our regular investment calculator.</p>
                    <div className='bg-lime-200 px-12 py-2 rounded mt-2'>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="InvestmentAmount">
                                    Targeted Wealth<span className='text-red-600'>*</span>
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
                    <ShowgpSIPResult resultproperty={resultProperty} result={result} show={modalShow} onHide={() => setModalShow(false)} />
                </div>
                <div className='w-80 mx-auto'>
                    <img className='w-full h-full' src={SIPImg} alt="" />
                </div>
            </section>
            <section>
                <div className='mx-auto relative w-96' >
                    <img src={aboutImg} alt="" />
                    <h3 className='font-semibold absolute top-3 left-16 text-xl'>   About Fintick Goal Planning - SIP</h3>
                </div>
                <div className='mb-3'>
                    <h3 className='text-lg font-medium' >1. Why is Goal Planning important?</h3>
                    <p> you want to achieve something, first you have to know where you are and where you are going. Likewise, you should analyze your current financial situation, develop financial plans, and plan your future goals. Goals define future needs. A goal plan helps you be financially secure and direct your current investments to generate returns over time to achieve your desired goals                 </p>
                </div>
                <div className='mb-3'>
                    <h3 className='text-lg font-medium' >2. How do I determine my financial goals?</h3>
                    <p>Determining your financial goals involves prioritizing the life events that require funding. This can be done by prioritizing the events by their importance and then further categorizing them by the period in which they occur. For example, you should focus more on retirement planning and educating your children than on going on vacation or buying a new car. If your child is her 2 and you are her 50, planning for retirement should be your first priority before planning for your child's education.
                    </p>
                </div>
                <div className='mb-3'>
                    <h3 className='text-lg font-medium' >3.  What is financial planning process?</h3>
                    <p>Proper planning of your finances is called financial planning. First, determine your current financial status, current location, money you have, etc. Then set long-term and short-term financial goals. A SIP calculator is also available. Once your goals are set, identify and evaluate the financial instruments you want to invest in that are appropriate for your risk profile. Start investing and put your plans into action today. You should periodically check the results of your plan and make changes if necessary. Find out how much to invest in a SIP with this mutual fund calculator.</p>
                </div>
            </section>
        </div>
    );
};

export default GoalPlanningSIP;