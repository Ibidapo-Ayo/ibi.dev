import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Socials = () => {

    const socials = [
        {
            href: "https://github.com/Ibidapo-Ayo?tab=repositories",
            Icon: Github,
        },
        {
            href: "https://www.linkedin.com/in/ayomide-ibidapo-1912541b4/",
            Icon: Linkedin
        },
        {
            href: "https://www.instagram.com/ibidapoayomide/",
            Icon: Instagram
        },
        {
            href: "https://x.com/the_ayomide01",
            Icon: Twitter
        }
    ]

    return (
        <div className='flex space-x-6'>
            {socials.map((social, index) => {
                const { Icon, href } = social;
                return (
                    <Link key={index} href={href} target='_blank'><Icon className='text-teal-400' /></Link>
                )
            })}
        </div>
    )
}

export default Socials