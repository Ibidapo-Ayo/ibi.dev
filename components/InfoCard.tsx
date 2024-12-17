import Link from 'next/link'
import React from 'react'
import Socials from './Socials'

const InfoCard = () => {
    return (
        <div className='w-full space-y-5 flex flex-col justify-between h-[22vh] lg:h-[80vh]'>
            <div className='space-y-4'>
                {/* <div className='w-12 h-12 rounded-full shadow-sm'>
                    <Image src={"/logo.jpg"} alt='Ibidapo Ayomide image' height={1000} width={1000} className='h-full w-full object-cover rounded-full' />
                </div> */}
                <div className='space-y-2'>
                    <Link href={"/"} className='w-40'><h1 className='lg:text-5xl text-4xl font-[600] tracking-tighter text-text'>Ibidapo Ayomide V.</h1></Link>
                    <h2 className='text-text text-xl tracking-tighter'>Front End Engineer</h2>
                </div>
                <div className='w-full md:w-80'>
                    <p className='text-md text-text-100 tracking-tight'>I build accessible, pixel-perfect digital experiences for the web.</p>
                </div>
            </div>
            <Socials />
        </div>
    )
}

export default InfoCard