import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { Skill as skill } from '@/typings'

type Props = {
    skills: skill[]
}
function Skills({ skills }: Props) {
    return (
        <motion.div className='relative flex flex-col h-screen text-center max-w-3xl justify-center
        pt-32 gap-10 mx-auto my-auto items-center max-h-[2000px] md:text-left ' >
            <div className='flex flex-col items-center space-y-5'>
                <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl '>
                    Skills
                </h3>
                <h3 className='uppercase tracking-[3px] text-gray-500 text-sm'>
                    Hover over a skill for current profieciency
                </h3>
            </div>
            <div className="  self-center flex-1 justify-center items-center">
                <div className="grid grid-cols-3 md:grid-cols-4 gap-8 md:gap-8">
                    {
                        (skills?.slice(0, skills.length / 2)).map((elem, i) => (
                            <Skill key={elem._id} skill={elem} />
                        ))
                    }
                    {
                        (skills?.slice(skills.length / 2, skills.length)).map((elem, i) => (
                            <Skill key={elem._id} skill={elem} directionLeft/>
                        ))
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default Skills