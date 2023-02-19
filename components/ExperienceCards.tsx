import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '@/typings'

type Props = { experience: Experience}
function ExperienceCards({ experience }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
        w-[400px] md:w-[500px] xl:w-[700px] snap-center bg-[rgb(41,41,41)] opacity-40 hover:opacity-100 cursor-pointer
        transition-opacity duration-200 overflow-hidden p-10 lg:flex-row lg:justify-evenly'>
            <div className='flex flex-col lg:space-y-5'>
                <motion.img
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    // viewport={{once:true}}
                    className='w-32 h-32 rounded-full  lg:rounded-lg xl:w-[200px] xl:h-[200px] object-center object-cover'
                    src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg"
                    alt="" />
                <h4 className='text-xl font-light'>CEO of My Company</h4>
                <p className='font-bold text-2xl mt-1'>Place</p>
                <div className='flex space-x-2 my-2'>
                    {/* Tech used  */}
                    <img className='w-10 h-10' src="https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png"
                        alt="" />
                    {/* Tech used  */}
                    <img className='w-10 h-10' src="https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png"
                        alt="" />
                </div>
            </div>
            <div className='px-0 md:px-10 lg:space-y-10'>
                <p className='uppercase py-4 text-gray-100'>Started work... - Ended work...</p>
                <ul className='list-disc space-y-2 ml-5 text-lg'>
                    <li>Summary points</li>
                    <li>Summary points</li>
                    <li>Summary points</li>
                    <li>Summary points</li>
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCards