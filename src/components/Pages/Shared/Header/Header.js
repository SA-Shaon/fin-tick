import React from 'react';
import homeIcon from '../../../../images/Home/icon.png';

const Header = () => {
    return (
        <nav className='bg-lime-100 flex justify-between px-14 py-1'>
            <div>
                <img src={homeIcon} className='w-48' alt="" />
            </div>
            <div className='self-center'>
                <a className='mx-3 font-bold hover:bg-lime-500 p-2 rounded' href="#">Home</a>
                <a className='mx-3 font-bold  hover:bg-lime-500 p-2 rounded' href="#">Calculator</a>
                <a className='mx-3 font-bold  hover:bg-lime-500 p-2 rounded' href="#">About Us</a>
                <a className='mx-3 font-bold  hover:bg-lime-500 p-2 rounded' href="#">Help</a>
                <a className='mx-3 font-bold bg-lime-500 p-2 rounded' href="#">Sign In</a>
            </div>
        </nav>
    );
};

export default Header;  