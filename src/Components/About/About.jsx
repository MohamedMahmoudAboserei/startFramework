import React, { useEffect } from 'react'

export default function About() {

  useEffect(() => {
    document.title='About'
  })

  return <>
    <section className="bg-[#1abc9c] w-full px-20 py-36 flex align-middle justify-center items-center min-h-[85vh] animate__animated animate__fadeInDownBig">
        <div className="text-center flex justify-center items-center flex-col pb-10">
            <div className="pt-6 text-white">
                <h1 className="uppercase mb-3 mx-auto font-bold text-5xl">about component</h1>
                <div className="flex justify-center items-center py-6">
                    <div className="h-1 w-20 bg-white"></div>
                    <i className="fa-solid fa-star px-4"></i>
                    <div className="h-1 w-20 bg-white"></div>
                </div>
                <div className="container">
                    <div className="flex justify-center align-middle text-left px-12 max-lg:px-0 mx-56 max-lg:mx-0 max-md:flex-col">
                        <p className="pr-5 max-md:pr-0 max-md:pb-10">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        <p className="pl-5 max-md:pl-0">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </>
}
