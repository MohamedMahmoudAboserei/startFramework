import React, { useEffect } from 'react'

export default function Contact() {

    useEffect(() => {
    document.title='Contact'
    })
    
    return <>
        <section className="my-6 pt-6 mx-auto min-h-[75vh]">
            <div className="text-gray-900 text-center">
                <h2 className="uppercase mb-6 text-4xl font-bold">Contact section</h2>
                <div className="flex justify-center items-center pb-6">
                    <div className="h-1 w-20 bg-gray-900"></div>
                    <i className="fa-solid fa-star px-4"></i>
                    <div className="h-1 w-20 bg-gray-900"></div>
                </div>
            </div>
            <form className="w-3/5 max-xl:w-4/5 max-lg:w-11/12 mt-12 mx-auto p-4 static animate__animated animate__fadeInDownBig">
                <div className="input-container relative mb-6 z-0">
                    <input type="text" id="userName" className="input-field w-full p-4 outline-none border-b border-solid border-[#dee2e6]" placeholder=" " />
                    <label htmlFor="userName" className="input-label">userName</label>
                </div>
                <div className="input-container relative mb-6">
                    <input type="text" id="userAge" className="input-field w-full p-4 outline-none border-b border-solid border-[#dee2e6]" placeholder=" " />
                    <label htmlFor="userAge" className="input-label">userAge</label>
                </div>
                <div className="input-container relative mb-6">
                    <input type="email" id="userEmail" className="input-field w-full p-4 outline-none border-b border-solid border-[#dee2e6]" placeholder=" " />
                    <label htmlFor="userEmail" className="input-label">userEmail</label>
                </div>
                <div className="input-container relative mb-6">
                    <input type="password" id="userPassword" className="input-field w-full p-4 outline-none border-b border-solid border-[#dee2e6]" placeholder=" " />
                    <label htmlFor="userPassword" className="input-label">userPassword</label>
                </div>
                <button className='bg-[#1abc9c] p-3 mt-6 text-white rounded-xl outline-none hover:bg-[#409180] duration-500'>Send message</button>
            </form>
        </section>
    </>
}
