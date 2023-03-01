import React from 'react';
import img1 from '../../../../images/Home/Social Media/monthly visitor.gif';
import img2 from '../../../../images/Home/Social Media/notification bell.gif';
import img3 from '../../../../images/Home/Social Media/platform user.gif';
import img4 from '../../../../images/Home/Social Media/social media follower.gif';
import img5 from '../../../../images/Home/Social Media/Youtube.gif';

const SocialMedia = () => {
    return (
        <div className='grid grid-cols-5 gap-10 mx-5'>
            <div className='border-2 border-sky-500 text-center rounded-lg'>
                <img className='w-24 mx-auto' src={img1} alt="" />
                <h3 className='text-xl font-bold'>45 Lakh+</h3>
                <p className='mb-4'>Youtube Subscribers</p>
            </div>
            <div className='border-2 border-sky-500 text-center rounded-lg'>
                <img className='w-24 mx-auto' src={img2} alt="" />
                <h3 className='text-xl font-bold'>45 Lakh+</h3>
                <p className='mb-4'>Youtube Subscribers</p>
            </div>
            <div className='border-2 border-sky-500 text-center rounded-lg'>
                <img className='w-24 mx-auto' src={img3} alt="" />
                <h3 className='text-xl font-bold'>45 Lakh+</h3>
                <p className='mb-4'>Youtube Subscribers</p>
            </div>
            <div className='border-2 border-sky-500 text-center rounded-lg'>
                <img className='w-24 mx-auto' src={img4} alt="" />
                <h3 className='text-xl font-bold'>45 Lakh+</h3>
                <p className='mb-4'>Youtube Subscribers</p>
            </div>
            <div className='border-2 border-sky-500 text-center rounded-lg'>
                <img className='w-24 mx-auto' src={img5} alt="" />
                <h3 className='text-xl font-bold'>45 Lakh+</h3>
                <p className='mb-4'>Youtube Subscribers</p>
            </div>
        </div>
    );
};

export default SocialMedia;