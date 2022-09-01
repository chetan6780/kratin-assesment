import React from 'react'
import oldLady from '../../img/old-lady.jpg'
import nature from '../../img/nature.jpg'

const Hero = () => {
    return (
        <section className='absolute top-16'>
            <div style={{backgroundImage:`url(${nature})`}}>
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 ">
                    <h1 className="text-4xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-600">Hey Sunita! let's enjoy life to it's fullest!</h1>
                    <p className="mt-6 mb-8 text-md  sm:mb-12 xl:max-w-2xl text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sequi labore hic voluptatum blanditiis, nam esse sint! Porro a aspernatur dolore adipisci! lorem </p>
                </div>
            </div>
            {/* 480x320 */}
            <img src={oldLady} alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
        </section>
    )
}

export default Hero