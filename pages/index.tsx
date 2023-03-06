import React, { useEffect } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '../components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import { ArrowUpIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import Education from '@/components/Education'
import { GetStaticProps } from 'next'
import { Experience, BasicInfo, Project, Skill, Social } from '@/typings'
import { fetchBasicInfo } from '@/utils/fetchBasicInfo'
import { fetchExperiences } from '@/utils/fetchExperiences'
import { fetchProjects } from '@/utils/fetchProjects'
import { fetchSocials } from '@/utils/fetchSocials'
import { fetchSkills } from '@/utils/fetchSkills'


const inter = Inter({ subsets: ['latin'] })

type Props = {
  basicInfo: BasicInfo,
  experiences: Experience[],
  skills: Skill[],
  projects: Project[],
  socials: Social[]
}
// useEffect(() => { }, [])

export default function Home({ basicInfo, experiences, skills, projects, socials, }: Props) {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Anandu Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header socials={socials} />

      {/* Hero */}
      <section id="h" className='snap-start'>
        <Hero basicInfo={basicInfo} />
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About basicInfo={basicInfo} />
      </section>

      {/* Education */}
      <section id="education" className="snap-start">
        <Education />
      </section>
      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience experience={experiences} />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      {/* footer */}
      <Link href="#h">
        <footer className='sticky bottom-5 justify-end ml-auto w-min cursor-pointer'>
          <div className="flex justify-end m-2">
            <ArrowUpIcon className='w-10 h-10 bg-slate-500/30 rounded-full' />
          </div>
        </footer>
      </Link>
    </div>
  )
}

// export async function getStaticPaths() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api`);
//   const posts:[] = await res.json();

//   const paths = posts.map((post) => ({
//     // params: { id: post.id.toString() },
//   }));

//   return { paths, fallback: 'blocking' };
// }

export const getStaticProps: GetStaticProps<Props> = async () => {
  // export const getServerSideProps:GetStaticProps<Props> = async () => {

  // all data is fetched from baseurl which is "https://anandu-portfolio-5v92am8tq-21mp1820-ritacin.vercel.app/" @ vercel
  const basicInfo: BasicInfo = await fetchBasicInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: { basicInfo, experiences, skills, projects, socials, },
    // Nextjs will attempt to regenerate the page, when a request comes in atmost 10 sec
    revalidate: 10, // this is done to faster page generation via shared cache page sharing

  }
}