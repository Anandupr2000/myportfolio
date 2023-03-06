import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion'
import Link from 'next/link';
import { Social } from '@/typings';
import Router from 'next/dist/server/router';
import { useRouter } from 'next/router';


type Props = {
    socials: Social[]
}

function Header({ socials }: Props) {
    let router = useRouter()
    return (
        <header className='sticky top-0 pt-5 md:px-10 flex items-center justify-between mx-auto z-20 xl:items-  center bg-[rgb(36,36,36)]'>
            {/* social icons */}
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0.5,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.2
                }}
                className='flex flex-row items-center'>
                {/* Social icons */}
                {
                    socials.map(social => (
                        <SocialIcon
                            key={social._id}
                            url={social.url}
                            target=" "
                            bgColor='transparent'
                            fgColor='cyan' />
                    ))
                }
                {/* <SocialIcon url="https://twitter.com/jaketrent" target=" "
                    bgColor='transparent' fgColor='cyan' />
                <SocialIcon url="https://twitter.com/jaketrent" target=" "
                    bgColor='transparent' fgColor='cyan' /> */}
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0.5,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1
                }}
                className='flex flex-row items-center text-gray-100 cursor-pointer'>
                <div className='button' onClick={(e)=>{router.push("#contact")}}>
                    <span>
                        <SocialIcon bgColor='transparent' fgColor='gray' network='email' href="#contact" />
                        <h1 className="hidden md:inline-flex">Get in Touch</h1>
                    </span>
                </div>
            </motion.div>
        </header>
    )
}

export default Header