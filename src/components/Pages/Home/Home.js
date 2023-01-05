import React from 'react';
import HomeImg from "../../../images/Home/home-img.png";


const Home = () => {
    return (
        <section>
            <div className='text-center '>
                <h1 className='text-5xl my-3'>Meet Your Financial Magician</h1>
                <div className='relative  mx-auto' style={{ width: '800px' }}>
                    <button style={{ top: '25%', left: '-13%' }} className='absolute  text-lime-600 font-bold w-64 tracking-widest py-3 border-2 border-x-lime-300 border-b-lime-600 rounded-md hover:bg-lime-600 hover:text-white '>Stocks</button>
                    <button style={{ top: '65%', left: '-12%' }} className='absolute text-lime-600 font-bold w-64 tracking-widest py-3 border-2 border-x-lime-300 border-b-lime-600 rounded-md hover:bg-lime-600 hover:text-white '>Financial Advisory</button>
                    <button style={{ top: '25%', right: '-25%' }} className='absolute text-lime-600 font-bold w-64 tracking-widest py-3 border-2 border-x-lime-300 border-b-lime-600 rounded-md hover:bg-lime-600 hover:text-white '>Analysis Tool</button>
                    <button style={{ top: '71%', right: '-24%' }} className='absolute text-lime-600 font-bold w-64 tracking-widest py-3 border-2 border-x-lime-300 border-b-lime-600 rounded-md hover:bg-lime-600 hover:text-white '>News & Update</button>
                    <img className='h-full w-full ' src={HomeImg} alt="" />
                </div>
            </div>
            <section className='text-center mt-3 bg-slate-200 pt-4 px-14'>
                <h1 className='text-4xl'>What is fintick?</h1>
                <p className=''>Fintick is a Bangladeshi integrated platform that is committed to serving your financial needs by providing everyone with access to all available economic, business, and stock market information.</p>
            </section>
            <section className='bg-slate-200 pt-4 px-14'>
                <h1 className='text-4xl text-center'>We are Currently Offering</h1>
                <div className='grid grid-cols-4 gap-4'>
                    <div><img src={HomeImg} alt="" /></div>
                    <div className='col-span-3'>
                        <h3 className='text-3xl'>Stock <br /> Overview </h3>
                        <p>Learn about the stock of the firm you want to research along with its most recent financial updates.</p>
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-4 mt-4'>
                    <div className='col-span-3 self-center'>
                        <h3 className='text-3xl'>Screening Options </h3>
                        <p>Have your own screening and convenient tools to better understand the business.</p>
                    </div>
                    <div><img src={HomeImg} alt="" /></div>
                </div>
                <div className='grid grid-cols-4 gap-4 mt-4'>
                    <div><img src={HomeImg} alt="" /></div>
                    <div className='col-span-3'>
                        <h3 className='text-3xl'>Sectors </h3>
                        <p>Gain insights into a certain industry inclusive of compiled information about its most recent developments.</p>
                    </div>
                </div>
            </section>
        </section>

    );
};

export default Home;