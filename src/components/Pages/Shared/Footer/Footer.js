import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, YoutubeOutlined } from '@ant-design/icons';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className=' bg-black opacity-90 text-slate-300 pl-12 pb-5 pt-2'>
            <div className='grid grid-cols-6 gap-2 mb-12'>
                <div className="col-span-2">
                    <h4 className='opacity-50 text-4xl font-semibold mb-3 hover:text-green' >About FinTick </h4>
                    <p className='text-base '>FinTick is an integrated platform that brings together scientific
                        financial planning and equity analysis for businesses.
                    </p>
                </div>
                <div className='pl-12'>
                    <h4 className='text-2xl opacity-50 mb-3 '>Wand</h4>
                    <p className='m-1  hover:text-green-800' >Stock Screener</p>
                    <p className='m-1  hover:text-green-800'>MF Screener</p>
                    <p className='m-1  hover:text-green-800'>Calculator</p>
                    <p className='m-1  hover:text-green-800'>Blog</p>
                </div>
                <div className='pl-12'>
                    <h4 className='text-2xl opacity-50 mb-3'>Others</h4>
                    <p className='m-1'>Pricing</p>
                    <p className='m-1'>Sectors</p>
                </div>
                <div className='pl-12'>
                    <h4 className='text-2xl opacity-50 mb-3'>Company</h4>
                    <p className='m-1'>About Us</p>
                    <p className='m-1'>Support</p>
                    <p className='m-1'>Contact Us</p>
                </div>
                <div className='pl-12'>
                    <h4 className='text-2xl opacity-50 mb-3'>Follow Us</h4>
                    <div className='flex'>
                        <FacebookOutlined className='text-4xl' />
                        <InstagramOutlined className='text-4xl ml-2' />
                    </div>
                    <div className='flex'>
                        <LinkedinOutlined className='text-4xl' />
                        <YoutubeOutlined className='text-4xl ml-2' />
                    </div>
                </div>
            </div>
            <div>
                <p className='text-center'><small >Copyright © {(new Date().getFullYear())} All rights reserved with FinTick | All logos and Trademarks registered with their respective owners.</small></p>
            </div>

        </div>
    );
};

export default Footer;