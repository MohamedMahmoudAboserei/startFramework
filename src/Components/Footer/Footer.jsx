import React from 'react'

export default function Footer() {
  return <>
    <footer className="w-full text-white">
        <div className="bg-[#2c3e50] p-10 text-center flex justify-evenly max-md:flex-col max-md:justify-center ">
                <div className="w-[30%] max-md:w-[100%] max-md:py-5">
                    <h3 className="font-bold text-3xl pt-5">LOCATION</h3>
                    <p className="pt-2">2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
                <div className="w-[30%] max-md:w-[100%] max-md:py-5">
                    <h3 className="font-bold text-3xl pt-5">AROUND THE WEB</h3>
                    <div className="pt-5 max-md:px-5 space-x-3">
                        <a href="" className="border-2 rounded-[100%] p-2 hover:bg-[#1abc9c] hover:border-[#1abc9c] duration-500"><i className="fa-brands fa-facebook"></i></a>
                        <a href="" className="border-2 rounded-[100%] p-2 hover:bg-[#1abc9c] hover:border-[#1abc9c] duration-500"><i className="fa-brands fa-twitter"></i></a>
                        <a href="" className="border-2 rounded-[100%] p-2 hover:bg-[#1abc9c] hover:border-[#1abc9c] duration-500"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="" className="border-2 rounded-[100%] p-2 hover:bg-[#1abc9c] hover:border-[#1abc9c] duration-500"><i className="fa-solid fa-globe"></i></a>
                    </div>
                </div>
                <div className="w-[30%] max-md:w-[100%] max-md:py-5">
                    <h3 className="font-bold text-3xl pt-5">ABOUT FREELANCER</h3>
                    <p className="pt-5"> Freelance is a free to use, licensed Bootstrap theme created by Route </p>
                </div>
        </div>
        <div className="bg-[#1a252f]">
            <p className="p-4 text-center">Copyright © Your Website 2021</p>
        </div>
    </footer>
  </>
}
