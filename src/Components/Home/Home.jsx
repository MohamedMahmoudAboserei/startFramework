import React, { useEffect } from 'react'
import logo from '../../assets/img/avatars.svg'


export default function Home() {

  useEffect(() => {
    document.title='Home'
  })

  return <>
    <section className="bg-[#1abc9c] w-full p-40 flex align-middle justify-center items-center animate__animated animate__fadeInDownBig">
        <div className="text-center flex justify-center items-center flex-col pb-10">
            <img src={logo} alt="Avatar" className="w-64" />
            <div className="pt-6 text-white">
                <h1 className="uppercase mb-3 font-bold text-5xl">start Framework</h1>
                <div className="flex justify-center items-center py-6">
                    <div className="h-1 w-20 bg-white"></div>
                    <i className="fa-solid fa-star px-4"></i>
                    <div className="h-1 w-20 bg-white"></div>
                </div>
                <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </div>
    </section>
  </>
}
