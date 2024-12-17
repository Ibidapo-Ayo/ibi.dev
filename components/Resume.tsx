import React from 'react'
import IntroCard from './IntroCard'
import ResumeCard from './ResumeCard'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const Resume = () => {
  return (
    <div className='space-y-14 md:space-y-16 lg:space-y-24 w-full pb-20'>
      <IntroCard />
      <ResumeCard />

      <div><Link href={"Ibidapo_Ayomide_Victor_CV_NEW.pdf"} download={true} className='text-text tracking-tight text-sm'>View Full Resume <ArrowUpRight className='w-3 text-teal-500 inline-block hover:-translate-y-1 hover:translate-x-1 transition-all duration-200' /></Link></div>
    </div>
  )
}

export default Resume