import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineVerticalLeft, AiOutlineVerticalRight } from 'react-icons/ai';
import img1 from "../../../../images/Calculator/1.png";


let count = 0;
let slidInterval;
const InfoSlider = () => {
    const featureProducts = [
        img1,
        img1,
        img1
    ];
    const slidRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    const initialClass = "bg-gray-100  w-2/5 text-center rounded-lg text-xl my-2 py-2";
    const activeClass = "text-white bg-lime-700 w-2/5 text-center rounded-lg text-xl my-2 py-2 text-anim";
    const removeAnimation = () => {
        slidRef.current.classList.remove("fade-anim");
    }
    useEffect(() => {
        slidRef.current.addEventListener('animationend', removeAnimation);
        // slidRef.current.addEventListener('mouseenter', pauseSlider);
        // slidRef.current.addEventListener('mouseleave', startSlider);
        startSlider();
        return () => {
            pauseSlider();
        }
    }, []);

    const startSlider = () => {
        slidInterval = setInterval(() => {
            handleOnNextClick();
        }, 3000);
    };

    const pauseSlider = () => {
        clearInterval(slidInterval);
    }

    const handleOnNextClick = () => {
        count = (count + 1) % featureProducts.length;
        setCurrentIndex(count);
        slidRef.current.classList.add('fade-anim');
    }

    const handleOnPrevClick = () => {
        const productsLength = featureProducts.length;
        count = (currentIndex + productsLength - 1) % productsLength;
        setCurrentIndex(count);
        slidRef.current.classList.add('fade-anim');
    }

    return (
        <div className='grid grid-cols-2 gap-4 mt-4'>
            <div ref={slidRef} className='w-full select-none relative col-span-1'>
                <div className='aspect-w-16 aspect-h-9'>
                    <img src={featureProducts[currentIndex]} alt="" />
                </div>
                <div className='absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center'>
                    <button className="bg-gray-400 hover:bg-black transition text-white p-1 rounded-full" onClick={handleOnPrevClick}><AiOutlineVerticalRight size={30} /></button>
                    <button className="bg-gray-400 hover:bg-black transition text-white p-1 rounded-full" onClick={handleOnNextClick}><AiOutlineVerticalLeft size={30} /></button>
                </div>
            </div >
            <div className='col-span-1'>
                <h1 className='text-xl font-semibold'>This is another details div</h1>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, ipsam. </p>
                <div className={currentIndex === 0 ? activeClass : initialClass}>SA Shaon</div>
                <div className={currentIndex === 1 ? activeClass : initialClass}>MMC Samin</div>
                <div className={currentIndex === 2 ? activeClass : initialClass}>BOSS Zia</div>
            </div>
        </div>
    );
};

export default InfoSlider;