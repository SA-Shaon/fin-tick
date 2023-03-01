import React from 'react';
import HomeImg from "../../../images/Home/newHome.jpg";
import aboutImg from "../../../images/Home/about.png";
import Faq from './Faq/Faq';
import InfoSlider from './InfoSlider/InfoSlider';
import SocialMedia from './SocialMedia/SocialMedia';


const Home = () => {
    return (
        <section>
            <div className='text-center '>
                <h1 className='text-5xl my-3'>Meet Your Financial Magician</h1>
                <div className='relative  mx-auto' style={{ width: '800px' }}>
                    <img className='h-full w-full ' src={HomeImg} alt="" />
                </div>
            </div>
            <section className='border-2 border-yellow-500'>
                <InfoSlider></InfoSlider>
            </section>
            <section className='text-center mt-3 bg-slate-200 pt-4 px-14'>
                <h1 className='text-5xl font-semibold'>What is fintick?</h1>
            </section>
            <section className='bg-slate-200 pt-8 px-14'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 container'>
                    <div className='col-span-2 order-2 mb-4'>
                        <h3 className='text-2xl font-medium mb-4'>A one-stop destination for all your financial matters.</h3>
                        <p className='mb-2'>We understand that managing your finances can be a daunting task, which is why we've created an integrated platform that makes it easy for you to access all the information you need in one place. With FinTick, you'll never have to settle for a 'half-plate' of financial information again.</p>
                        <p className='mb-2'>Our platform is designed to provide you with the latest economy news and update, as well as in-depth industry analysis and stock data. We also offer detailed information on individual companies, so you can stay up-to-date on the latest developments in the businesses you're interested in.  Whether you are a professional investor or a beginner, FinTick has the perfect recipe for you. </p>
                        <h4 className='font-semibold'>So, lets embark on a new financial adventure and explore our following services :</h4>

                        <ol className='list-disc mt-2 pl-10 font-medium'>
                            <li>Latest economy info</li>
                            <li>Industry News and Analysis</li>
                            <li>Stock Data</li>
                            <li>Company  updates</li>
                        </ol>
                    </div>
                    <div className='col-span-2 self-center object-cover sm:order-1'><img src={aboutImg} alt="" /></div>
                </div>
            </section>
            {/* Social Media section  */}
            <section className='my-5 text-center'>
                <div className='mb-5'>
                    <h1 className='text-5xl font-bold mb-3'>You made us a Superhero.</h1>
                    <p className='text-xl'>Overwhelming support from Finology family of investors.</p>
                </div>
                <SocialMedia></SocialMedia>
            </section>
            {/* FAQ SECTION */}
            <section>
                <Faq></Faq>
            </section>
        </section >

    );
};

export default Home;