import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function NotFound() {

    useEffect(() => {
        document.title='Not Found'
    })

    return <>
        <section className="bg-[#1abc9c] w-full p-40 flex align-middle justify-center items-center h-[80vh] animate__animated animate__fadeInDownBig">
            <div className="text-center flex justify-center items-center flex-col pb-10">
                <div className="pt-6 text-white">
                    <h1 className="uppercase mb-3 font-bold text-5xl">Not Found</h1>
                    <div className="flex justify-center items-center py-6">
                        <div className="h-1 w-20 bg-white"></div>
                        <i className="fa-solid fa-star px-4"></i>
                        <div className="h-1 w-20 bg-white"></div>
                    </div>
                    <p className='mb-3 text-2xl'>
                        You Can Search here
                    </p>
                    <ul className='bg-[#2c3e50] p-3 gap-6 rounded-xl justify-center md:flex md:items-center transition-all ease-in duration-500'>
                        <li><Link to='' className='text-xl hover:text-[#1abc9c] duration-500'>Home</Link></li>
                        <li><Link to='about' className='text-xl hover:text-[#1abc9c] duration-500'>About</Link></li>
                        <li><Link to='portfolio' className='text-xl hover:text-[#1abc9c] duration-500'>Portfolio</Link></li>
                        <li><Link to='contact' className='text-xl hover:text-[#1abc9c] duration-500'>Contact</Link></li>
                    </ul>
                </div>
            </div>
    </section>
    </>
}
