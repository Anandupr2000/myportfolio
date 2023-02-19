import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCards from './ExperienceCards'
import { Experience } from '@/typings'

type Prop = { experience: Experience[] }

function WorkExperience({ experience }: Prop) {
  if (experience.length > 0)
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='relative h-screen max-h-[1024px] flex flex-col overflow-hidden md:flex-col max-w-full px-10 
       mx-auto items-center space-y-28 place-content-around'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
          Experience
        </h3>
        <div className='w-full flex space-x-5 p-5 overflow-x-scroll snap-x snap-mandatory 
      scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
          {/* Experience cards */}
          {
            experience?.map((element, index) => (
              <ExperienceCards key={index} experience={element} />
            ))
          }
        </div>
      </motion.div>
    )
    else return(<div></div>)
}

export default WorkExperience