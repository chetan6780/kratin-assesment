import React from 'react'
import oldLady from '../../img/old-lady.jpg'

const Hero = () => {
    return (
        <section>
            <div className="bg-green-400">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 ">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-800">Hey Sunita! let's enjoy life to it's fullest</h1>
                    <p className="mt-6 mb-8 text-lg     sm:mb-12 xl:max-w-3xl text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sequi labore hic voluptatum blanditiis, nam esse sint! Porro a aspernatur dolore adipisci!</p>
                    {/* <div className="flex flex-wrap justify-center">
                        <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50">Get started</button>
                        <button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700">Learn more</button>
                    </div> */}
                </div>
            </div>
            {/* 480x320 */}
            <img src={oldLady} alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
        </section>
    )
}

export default Hero