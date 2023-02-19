import React from 'react'
import { motion } from 'framer-motion'
import { BasicInfo } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
    basicInfo : BasicInfo
}
function About({ basicInfo }: Props) {
    return (
        <div className='relative flex flex-col h-screen text-center md:text-left md:flex-row max-w-3xl px-10 
        justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>
                About
            </h3>
            <motion.img
                initial={{
                    x: -200,
                    y: 50,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                // viewport={{ once: true }} // setting animation to repeat only once
                // src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJAJIyT6RZRb-NKPLStQqD9swbs0DiHIlx4w&usqp=CAU'
                src={urlFor(basicInfo?.profilePic).url()}
                className='mt-36 md:mt-32 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg 
                md:w-64 md:h-55 xl:w-[300px] xl:h-[400px]'
            />
            <div className='space-y-3 px-0 md:px-10 xl:mt-28'>
                <h4 className='text-4xl font-semibold'>Here is some background</h4>
                <p className='text-justify'>
                    {basicInfo?.backgroundInformation}
                </p>
            </div>
        </div>
    )
}

export default About