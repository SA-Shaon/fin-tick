import React from 'react';
import img1 from '../../../images/Calculator/1.png';
import img2 from '../../../images/Calculator/2.png';
import img3 from '../../../images/Calculator/3.png';
import img4 from '../../../images/Calculator/4.png';
import img5 from '../../../images/Calculator/5.png';
import Calculator from './Calculator';

const Calculators = () => {
    const calculatorData = [
        {
            name: "LumpSum Calculator",
            img: img1,
            details: "Consider a Lumpsum investment? Estimate your future wealth by using our Lumpsum Calculator.",
            route: "lumpsumCalculator"
        },
        {
            name: "SIP",
            img: img2,
            details: "With the SIP Calculator, you can estimate how much wealth you can generate over the years.",
            route: "sipCalculator"
        },
        {
            name: "Goal Planning LumpSum",
            img: img3,
            details: "Would you like to invest and become rich once? Calculate your investment amount for this with our one-time investment calculator.",
            route: "goalPlanningCalculator"
        },
        {
            name: "Goal Planning SIP",
            img: img4,
            details: "How much do you need to invest each year or month to build your wealth? Calculate your investment with our regular investment calculator.",
            route:"goalPlanningSIP"
        },
        {
            name: "Stock Market vs FD Returns",
            img: img5,
            details: "Which is better fixed deposit or stock investment? In either case, calculate your returns with our Return Calculator.",
            route:"smvsfd"
        }
    ]
    return (
        <div className='mb-12 '>
            <h1 className=' text-5xl font-semibold text-center my-12 tracking-wide'>Financial Calculators</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 mx-14'>
                {
                    calculatorData.map(calculator => <Calculator key={calculator.name} calculator={calculator}></Calculator>)
                }

            </div>
        </div >
    );
};

export default Calculators;