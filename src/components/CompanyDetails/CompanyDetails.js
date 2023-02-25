import React from 'react';
import { useParams } from 'react-router-dom';
import { Pie, PieChart, Tooltip } from 'recharts';
import LoadData from '../../utilities/LoadData';

const CompanyDetails = () => {
    const searchName = useParams();
    const stockData = LoadData();
    const searchData = stockData?.find(data => console.log(data.name?.toUpperCase()));
    console.log(searchData);
    const testMeasurments = [
        {
            data: [
                { name: "Director", value: searchData?.director, fill: '#57c0e8' },
                { name: "Institute", value: searchData?.institute, fill: "#FF6565" },
                { name: "Public", value: searchData?.public, fill: "#FFDA83" },
                { name: "Foreign", value: searchData?.foreign, fill: "#22c55e" },
                { name: "Government", value: searchData?.govt, fill: "gray" }
            ]
        }
    ]
    return (
        <>
            <section className='mx-20'>
                <h3 className='text-xl fotn-semibold'>Compnay Essentials</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-8'>
                    <div className='grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 mx-auto gap-4'>
                        <div className='bg-gray-200 w-32 text-center rounded-md'>
                            <h4 className='text-xl'>Market CAP</h4>
                            <p className='bg-green-600 rounded-b-md text-white'>28,009.80 Cr</p>
                        </div>
                        <div className='bg-gray-200 w-32 text-center rounded-md'>
                            <h4 className='text-xl'>Market CAP</h4>
                            <p className='bg-green-600 rounded-b-md text-white'>28,009.80 Cr</p>
                        </div>
                        <div className='bg-gray-200 w-32 text-center rounded-md'>
                            <h4 className='text-xl'>Market CAP</h4>
                            <p className='bg-green-600 rounded-b-md text-white'>28,009.80 Cr</p>
                        </div>
                        <div className='bg-gray-200 w-32 text-center rounded-md'>
                            <h4 className='text-xl'>Market CAP</h4>
                            <p className='bg-green-600 rounded-b-md text-white'>28,009.80 Cr</p>
                        </div>
                        <div className='bg-gray-200 w-32 text-center rounded-md'>
                            <h4 className='text-xl'>Market CAP</h4>
                            <p className='bg-green-600 rounded-b-md text-white'>28,009.80 Cr</p>
                        </div>
                        <div className='bg-gray-200 w-32 text-center rounded-md'>
                            <h4 className='text-xl'>Market CAP</h4>
                            <p className='bg-green-600 rounded-b-md text-white'>28,009.80 Cr</p>
                        </div>
                        <div className='bg-gray-200 w-32 text-center rounded-md'>
                            <h4 className='text-xl'>Market CAP</h4>
                            <p className='bg-green-600 rounded-b-md text-white'>28,009.80 Cr</p>
                        </div>
                        <div className='bg-gray-200 w-32 text-center rounded-md'>
                            <h4 className='text-xl'>Market CAP</h4>
                            <p className='bg-green-600 rounded-b-md text-white'>28,009.80 Cr</p>
                        </div>
                        <div className='bg-gray-200 w-32 text-center rounded-md'>
                            <h4 className='text-xl'>Market CAP</h4>
                            <p className='bg-green-600 rounded-b-md text-white'>28,009.80 Cr</p>
                        </div>
                        <div className='bg-gray-200 w-32 text-center rounded-md'>
                            <h4 className='text-xl'>Market CAP</h4>
                            <p className='bg-green-600 rounded-b-md text-white'>28,009.80 Cr</p>
                        </div>
                        <div className='bg-gray-200 w-32 text-center rounded-md'>
                            <h4 className='text-xl'>Market CAP</h4>
                            <p className='bg-green-600 rounded-b-md text-white'>28,009.80 Cr</p>
                        </div>
                    </div>
                    <div>
                        <p>this is anthoer section</p>
                    </div>
                </div>
            </section>
            <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='mx-auto'>
                    <PieChart width={400} height={330}>
                        {testMeasurments.map(s =>
                            <Pie
                                key={1}
                                dataKey="value"
                                isAnimationActive={false}
                                data={s.data}
                                cx={200}
                                cy={150}
                                outerRadius={150}
                                fill="#fff"
                            ></Pie>)}
                        <Tooltip />
                    </PieChart>
                </div>
                <div className='self-center mx-auto'>
                    <div className='rounded px-3 w-60 text-lg bg-[#57c0e8] my-2'>
                        Director {searchData?.director}% [39.37Cr]
                    </div>
                    <div className='rounded px-3 w-60 text-lg my-2 bg-[#FF6565]'>
                        Institute {searchData?.director}% [39.37Cr]
                    </div>
                    <div className='rounded px-3 w-60 text-lg my-2 bg-[#FFDA83]'>
                        Public {searchData?.director}% [39.37Cr]
                    </div>
                    <div className='rounded px-3 w-60 text-lg my-2 bg-green-500'>
                        Foreign {searchData?.director}% [39.37Cr]
                    </div>
                    <div className='rounded px-3 w-60 text-lg my-2 bg-[gray]'>
                        Govt. {searchData?.director}% [39.37Cr]
                    </div>
                </div>
            </section>
        </>
    );
};

export default CompanyDetails;