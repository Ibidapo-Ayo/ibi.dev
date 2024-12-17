import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ResumeCard = () => {
    const resumeCard = [
        {
            title: "Project Manager - Bloomin",
            description: "Executed detailed project plans targeting specific milestones using agile methodologies; leveraged tools like Jira for tracking progress on all tasks assigned within two weeks per cycle.",
            stacks: ["Asana", "Calendly", "Trello"],
            date: "2023 - Present",
            location: "Rwanda",
            href: "https://www.thebloomin.com"
        },
        {
            title: "React & Nextjs Developer - Beadaut",
            description: "Designed, built, and deployed company website products, including Bukky AI, while collaborating with backend developers to ensure functionality and contributing to scalable solutions that helped increase company revenue.",
            stacks: ["Javascript", "Typescript", "React"],
            date: "2024 - Present",
            location: "Japan",
            jobType: "Internship",
            href: "https://www.beadaut.com"
        },
        {
            title: "Frontend Developer - Techy",
            description: "I Collaborated in building a fully responsive WordPress website (techy.com.ng) and ensuring the blog is consistently updated with the latest news and trends in the tech space.",
            stacks: ["Wordpress"],
            date: "2021 - 2022",
            jobType: "Freelance",
            href: "/"
        }
    ]
    return (
        <div className='space-y-10'>
            {resumeCard.map((resume, index) => {
                return (
                    <div className='grid grid-cols-1 md:grid-cols-[auto,1fr] gap-5 md:gap-10' key={index}>
                        <h3 className='text-text-100 w-28 text-[13px]'>{resume.date}</h3>
                        <div className='space-y-4'>
                           <Link href={resume.href}> <h1 className='text-text tracking-tight text-sm hover:text-teal-500'>{resume.title} <ArrowUpRight className='w-3 text-teal-500 inline-block hover:-translate-y-1 hover:translate-x-1 transition-all duration-200' /> </h1></Link>
                            <p className='resumeText'>{resume.description}</p>

                            <div className='flex space-x-3'>
                                {resume.stacks.map((stack, index) => (
                                    <div key={index} className='w-auto px-6 py-1 rounded-full bg-teal-400/10 text-teal-400 text-[13px]'>{stack}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ResumeCard