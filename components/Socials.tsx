import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Socials = () => {

    const socials = [
        {
            href: "/",
            Icon: Github,
        },
        {
            href: "/",
            Icon: Linkedin
        }
    ]

    return (
        <div className='flex space-x-4'>
            {socials.map((social, index) => {
                const { Icon, href } = social;
                return (
                    <Link href={href}><Icon className='text-teal-400' /></Link>
                )
            })}
        </div>
    )
}

export default Socials