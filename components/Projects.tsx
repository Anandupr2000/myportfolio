import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
  projects: Project[]
}
function Projects({ projects }: Props) {

  // if (!projects) {
  //   // Handle the case where projects is null
  //   return <div>No projects available</div>;
  // }

  return (
    <div className='relative h-screen flex flex-col items-center text-left
    max-w-full  mx-auto z-0 overflow-hidden snap-x snap-mandatory '>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl z-30'>
        Projects
      </h3>
      <div className="relative w-full p-5 flex overflow-x-scroll snap-x snap-mandatory mt-32 
      z-20 scroll-mx-10 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/60">
        <p>{projects.length}</p>
      </div>
      <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[20rem] -skew-y-12' />
    </div>
  )
}

export default Projects