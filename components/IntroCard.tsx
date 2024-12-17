import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const IntroCard = () => {
  return (
    <div className='space-y-4 mt-10'>
      <p className="resumeText">I&apos;m a 10x web developer with expertise in React, JavaScript, Next.js, and modern web technologies. I specialize in building high-performance, SEO-friendly websites with pixel-perfect, accessible user interfaces. By blending thoughtful design with robust engineering, I create seamless digital experiences that are optimized for usability, scalability, and exceptional performance.</p>

      <p className="resumeText">I&apos;m currently a Project Manager at <Linker text="Bloomin" link="https://www.thebloomin.com" /> , a digital agency that focuses on helping startups design pitch decks and build strong branding. In my role, I bridge the gap between design and development, overseeing web development projects to ensure they align with client goals and deliver exceptional user experiences. I collaborate closely with teams to create high-performance, accessible websites that are both visually impactful and technically robust.</p>

     <p className='resumeText md:block hidden'> In the past, I worked as a Frontend Developer at <Linker text='Beadaut' link='https://www.beadaut.com' />, where I contributed to building an AI-powered platform for personalized learning. This experience allowed me to combine cutting-edge technology with intuitive, user-friendly interfaces, delivering solutions that enhanced user engagement and learning outcomes. My background spans diverse environments, from startups to established organizations, equipping me with the versatility to tackle complex challenges and drive impactful results.</p>

     <p className='resumeText'>In my spare time, I enjoy reading and playing logic-based games like Scrabble and chess, which keep me sharp and challenge my strategic thinking.</p>
    </div>
  )
}

export default IntroCard

const Linker = ({ text, link }: {
  text: string,
  link: string
}) => {
  return (
    <Link href={link} target='_blank' className='text-text font-semibold'>{text} <span> <ArrowUpRight className='text-teal-500 w-3 inline-block -mt-2' /></span></Link>
  )
}