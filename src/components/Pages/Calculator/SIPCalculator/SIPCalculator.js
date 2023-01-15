import React from 'react';
import SIPImg from '../../../../images/Calculator/SIPImg.jpg';
import aboutImg from '../../../../images/Calculator/bg.jpg';

const SIPCalculator = () => {
    return (
        <div className='mx-14'>
            <h1 className=' text-3xl font-semibold text-center my-6 tracking-wide'>SIP Calculator</h1>
            <section className='grid grid-cols-2 gap-4 mb-8'>
                <div>
                    <p>With our SIP Calculator,you can estimate how much wealth you can generate over the years.</p>
                    <div className='bg-lime-200 px-12 py-2 rounded mt-2'>
                        <form action="">
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="InvestmentAmount">
                                   Monthly investment amount<span className='text-red-600'>*</span>
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="InvestmentAmount" type="number" placeholder="Ex: 10000" />
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="InvestmentAmount">
                                    Expected rate of return (P.A)<span className='text-red-600'>*</span>
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="InvestmentAmount" type="number" placeholder="Ex: 13%" />
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="InvestmentAmount">
                                    Tenure (in years) (Max 50 Year)<span className='text-red-600'>*</span>
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="InvestmentAmount" type="number" placeholder="Ex: 11" />
                            </div>
                            <div className='text-center'>
                                <input type="button" className='bg-lime-600 text-white px-6 py-2 rounded-lg text-xl mx-auto' value="Calculate" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className='w-80 mx-auto'>
                    <img className='w-full h-full' src={SIPImg} alt="" />
                </div>
            </section>
            <section>
                <div className='mx-auto relative w-96' >
                    <img src={aboutImg} alt="" />
                    <h3 className='font-semibold absolute top-3 left-16 text-xl'>About Fintick SIP Calculator</h3>
                </div>
                <div className='mb-3'>
                    <h3 className='text-lg font-medium' >1. What is SIP?</h3>
                    <p>A Systematic Investment Plan or SIP is the most disciplined investment style, in which you invest a fixed amount on a regular basis (annual, quarterly, monthly). For SIP, you need to set the investment amount, SIP date and the system you want to invest in.
                    </p>
                </div>
                <div className='mb-3'>
                    <h3 className='text-lg font-medium' >2.  What are the benefits of SIP?</h3>
                    <p>At SIP, you invest your money without guessing the market conditions. In other words, you invest without timing the market. So, SIP benefits from the Rs cost averaging factor as investments are made in different market cycles. With SIP, you can keep investing longer, so your money stays invested and can generate long-term returns. This allows you to give your investment enough time to reap the power of compound interest. You can get started with SIP with a very small investment, say 500 rupees per month. This means you don't have to tie up large sums of money that will make future payments difficult.
                    </p>
                </div>
                <div className='mb-3'>
                    <h3 className='text-lg font-medium' >3. What to choose- SIP or Lumpsum?</h3>
                    <p>Ideally, you should invest (either in SIPs or stocks) based on your investment profile, which includes your current income, expenses, age, risk profile, and financial goals.The main advantage of SIP over blanket investing is that you don't need to time the market as you invest systematically through the ups and downs of the market. So the return you get is a weighted average return. With SIP, your money is spread over time and only a portion of your total investment is exposed to market volatility.In general, you need to time the market to get higher returns. In other words, investing in stocks (one-off investments) is a good choice if you are certain that there will not be a major market correction immediately after the investment date.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default SIPCalculator;