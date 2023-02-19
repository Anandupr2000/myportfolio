import { urlFor } from '@/sanity'
import { BasicInfo } from '@/typings'
import urlBuilder from '@sanity/image-url/lib/types/builder'
import Link from 'next/link'
import React,{useEffect} from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from './BackgroundCircles'

type Props = {
    basicInfo: BasicInfo
}
function Hero({ basicInfo }: Props) {
    // console.log(basicInfo?.heroImage)
    // console.log(urlFor(basicInfo?.heroImg).url())

    const [text, count] = useTypewriter({
        words: [
            `${basicInfo?.name}`,
            "a Developer",
            "a Designer"
        ],
        loop: true,
        delaySpeed: 2500
    })
    useEffect(() => {}, [basicInfo])

    return (
        <div className='h-screen flex flex-col space-y-5 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img
                className='relative -top-0 md:-top-14 rounded-full h-52 w-52 md:h-72 md:w-72 mx-auto object-cover'
                // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJAJIyT6RZRb-NKPLStQqD9swbs0DiHIlx4w&usqp=CAU" 
                src={urlFor(basicInfo?.heroImg).url()} 
                alt="" />
            <div className='z-10 space-y-3'>
                <h2 className='text-sm uppercase text-gray-400 tracking-[13px]'>software developer</h2>
                <div className='text-5xl lg:text-6xl font-semibold px-10 flex flex-col sm:block'>
                    <span>
                        I am {" "}
                    </span>
                    <span>
                        <span className='text-red-500 mr-3'> {text}</span>
                        {/* for cursor */}
                        <Cursor cursorColor='rgb(250,230,230)' />
                    </span>

                </div>
                <div>
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>
                    <Link href="#experience">
                        <button className="heroButton">Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">Projects</button>
                    </Link>
                    <Link href="#contact">
                        <button className="heroButton">Contact Me</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
