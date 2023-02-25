import React, { useState } from 'react';
import Question from './Question/Question';

const Faq = () => {
    const qnaData = [
        {
            question: "What is financial planning?",
            answare: "Financial Planning is an artistic process of crafting a roadmap for your financial future. By taking a thorough look at your current financial standing and future aspirations, a personalized strategy is crafted to help you reach your financial destination efficiently and effectively. This includes assessing your finances, plugging any leaks, defining your financial targets, determining your risk tolerance, building a tailored investment strategy, and setting a timeline to achieve your goals."
        },
        {
            question: "How much money should a beginner invest for the first time?",
            answare: "When it comes to personal finance, it's all about finding the right balance. You need to determine a plan for managing your expenses, saving for the future, and making smart investments. This requires a careful evaluation of your personal profile, including your goals, risk tolerance, and financial situation. With this information, you can then craft a personalized investment strategy that aligns with your unique needs and sets you on a path towards financial success."
        },
        {
            question: "How to learn to invest in mutual funds?",
            answare: "Investing in mutual funds comes with its own set of challenges, primarily due to the inherent market risks involved. Selecting mutual funds that perform well and surpass the average return can be a complex task. On the surface, mutual fund investing may appear straightforward, but the truth is that there is much more to it than meets the eye. The process of fund selection requires a deeper understanding of the market, investment strategies, and fund performance."
        },
        {
            question: "How to get started with investing?",
            answare: "Investing in Bangladesh can be a great opportunity for those looking to diversify their investment portfolio and tap into the country's growing economy. To get started, it's important to research the market, understand the political and regulatory environment, economic growth prospects, and the major industries and sectors. Once you've identified potential investment opportunities, find a reputable local broker with experience in the Bangladesh market. Open a trading account with your chosen broker and fund it with the amount you want to invest. With your account funded, you can start investing in the Bangladesh market, whether that's through stocks, bonds, mutual funds, or real estate. Keep in mind that it's important to monitor your investments regularly and adjust your strategy as needed. By doing your due diligence and working with a trusted local broker, you can take advantage of the opportunities available in the Bangladesh market."
        },
        {
            question: "What does a comprehensive financial plan include?",
            answare: "A comprehensive financial plan typically includes the following components: \n 1.Assessment of current financial situation: A thorough evaluation of your current financial situation, including your income, expenses, debts, and assets.\n2.Setting financial goals: Determining what you want to achieve in the short and long term, such as buying a home, saving for retirement, or building wealth. 3.Budgeting: Creating a spending plan that aligns with your financial goals and ensures you are living within your means.\n 4.Risk management: Evaluating and protecting against potential financial risks, such as job loss, illness, or market volatility.\n 5.Investment planning: Developing a strategy for investing your money that aligns with your financial goals, risk tolerance, and values.\n 6.Retirement planning: Developing a plan for saving and investing for retirement, including estimating retirement income needs and choosing the right retirement accounts.\n 7.Estate planning: Developing a plan for distributing your assets to your heirs and ensuring your legacy.\n 8.Tax planning: Minimizing your tax liability through tax - efficient investments and strategies.A comprehensive financial plan is designed to help you achieve your financial goals and live the life you want, by providing a roadmap for your financial future."
        }
    ];

    const [open, setOpen] = useState(false);

    const toggle = (index) => {
        if (open === index) {
            return setOpen(null);
        }
        setOpen(index);
    }
    return (
        <div className="mx-20 my-6">
            <div className='text-center mb-4'>
                <h1 className='text-[40px] font-bold'>Any Question?</h1>
                <p className='text-xl'>Find answers to common questions that you may have in your mind.</p>
            </div>
            {
                qnaData.map((data, index) => {
                    return <Question
                        key={index}
                        open={index === open}
                        question={data.question}
                        answare={data.answare}
                        toggle={() => toggle(index)}
                    ></Question>
                })
            }
        </div>
    );
};
export default Faq;