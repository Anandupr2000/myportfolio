import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
  projects: Project[]
}
function Projects({ projects }: Props) {
  projects.map((project, i) => {
    if (!project) {
      return <div>No projects available</div>; // Skip rendering this project if it is null or undefined
    }
    return (
      <div className='relative h-screen flex flex-col items-center text-left
    max-w-full  mx-auto z-0 overflow-hidden snap-x snap-mandatory '>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl z-30'>
          Projects
        </h3>
        <div className="relative w-full p-5 flex overflow-x-scroll snap-x snap-mandatory mt-32 
      z-20 scroll-mx-10 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/60">
          {
            // // Array(1,2,3,4).map((e,i) => (
            // // <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col

            // projects.map((project, i) => (
              <div key={project?._id} className='w-screen flex-shrink-0 snap-center flex flex-col
              gap-10 items-center justify-center p-12 md:44'>
                {/* {console.log(project)} */}
                <motion.img
                  initial={{
                    x: 50,
                    y: 30,
                    opacity: 0,
                  }}
                  transition={{ duration: 1.2 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  className="md:w-60 md:h-60 rounded-3xl"
                  // src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png"
                  src={urlFor(project?.image).url()}
                  alt="" />

                <div className='px-0 md:px-10 max-w-6xl flex flex-col gap-5'>
                  <h4 className='text-4xl font-semibold text-center'>
                    <span className="underline decoration-[#f7AB0A]/50">
                      {/* Case Study {i + 1} of {projects.length} : */}
                    </span>
                    {" "}{project?.title}
                  </h4>
                  <div className="flex items-center gap-3">
                    {
                      project?.technologies.map(technology => (
                        <img key={technology._id} src={urlFor(technology.image).url()}
                          className="w-10 h-10 rounded-full " alt="" />
                      ))
                    }
                  </div>
                  <p className='text-lg text-justify'>
                    {/* Netflix 2.0 is an application with LogIn and Log Out Authentication with google. It has a beautifull
                  Home Screen with all movies just like Netflix. */}
                    {project?.linkToBuild}
                  </p>
                  <p className='text-lg text-justify'>
                    {/* Netflix 2.0 is an application with LogIn and Log Out Authentication with google. It has a beautifull
                  Home Screen with all movies just like Netflix. */}
                    {project?.summary}
                  </p>
                </div>

              </div>
            // ))
          }
        </div>
        <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[20rem] -skew-y-12' />
      </div>
    )
  })
}

export default Projects