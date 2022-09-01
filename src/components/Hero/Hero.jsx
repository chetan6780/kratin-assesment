import React from 'react'
import oldLady from '../../img/old-lady.jpg'
import nature from '../../img/nature.jpg'

const Hero = () => {
    return (
        <>
            <section className='absolute top-16 z-100 bg-gray-100'>
                <div style={{ backgroundImage: `url(${nature})` }}>
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 ">
                        <h1 className="text-4xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-600">Hey Sunita! let's enjoy life to it's fullest!</h1>
                        <p className="mt-6 mb-8 text-md  sm:mb-12 xl:max-w-2xl text-gray-700">Here is mantra for you to stay heathy and happy. Star with some light exercise and yoga, follow your diet and entertain yourself with music and movies. </p>
                    </div>
                </div>
                {/* 480x320 */}
                <img src={oldLady} alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
                <div className='h-60 -mt-32 -z-50'>
                    <p className='w-full py-4 absolute  text-center text-gray-600 bottom-0'>
                        <a href="https://github.com/chetan6780">Made for Sunita by @chetan6780</a>
                    </p>
                </div>
                <div className=" -mt-32 mb-24 py-4 px-4">
                    <p className='w-full text-center text-2xl mb-2'> Check following boxes to track daily report.</p>
                    <div className='flex justify-center'>
                    <table class="table-auto justify-start">
                        <tbody className='text-xl'>
                            <tr className='flex space-x-4'>
                                <td>
                                    <label>
                                        <input type="checkbox" className='accent-green-600'/>
                                    </label>
                                </td>
                                <td>Exercise and Yoga</td>
                            </tr>
                            <tr className='flex space-x-4'>
                                <td>
                                    <label>
                                        <input type="checkbox" className='accent-green-600'/>
                                    </label>
                                </td>
                                <td>Healthy Diet</td>
                            </tr>
                            <tr className='flex space-x-4'>
                                <td>
                                    <label>
                                        <input type="checkbox" className='accent-green-600'/>
                                    </label>
                                </td>
                                <td>Feeling Happy Happy! 😄</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Hero