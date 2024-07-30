import React, { useState, useEffect } from 'react';
import port1 from '../../assets/img/port1.png';
import port2 from '../../assets/img/port2.png';
import port3 from '../../assets/img/port3.png';

export default function Portfolio() {

  useEffect(() => {
    document.title='Portfolio'
  })

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  const handleClickOutside = (event) => {
    if (event.target.classList.contains('modal-backdrop')) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      window.addEventListener('click', handleClickOutside);
    } else {
      window.removeEventListener('click', handleClickOutside);
    }
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isModalOpen]);

  const images = [port1, port2, port3, port1, port2, port3];

  return <>
      <section className="my-6 pt-10 pb-28">
        <div className="text-gray-900 text-center">
          <h2 className="uppercase mb-6 text-4xl font-bold">Portfolio Component</h2>
          <div className="flex justify-center items-center pb-6">
            <div className="h-1 w-20 bg-gray-900"></div>
            <i className="fa-solid fa-star px-4"></i>
            <div className="h-1 w-20 bg-gray-900"></div>
          </div>
        </div>
        <div className="flex justify-center items-center justify-items-center align-middle gap-10 flex-wrap animate__backInRight">
          {images.map((image, index) => (
            <div
              key={index}
              className="group w-3/12 animate__animated animate__fadeInDownBig max-lg:w-2/5 max-sm:w-11/12 rounded-lg relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
              onClick={() => openModal(image)}
            >
              <img
                className="h-full w-full rounded-lg object-cover transition-transform duration-500 group-hover:rotate-6 group-hover:scale-125"
                src={image}
                alt=""
              />
              <div className="absolute inset-0 bg-[#1abc9ce6] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              <div className="absolute inset-0 flex translate-y-[100%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          ))}
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 modal-backdrop">
            <div className="relative p-4 bg-white rounded-lg shadow-lg">
              <button
                className="absolute top-2 right-5 text-white text-5xl"
                onClick={closeModal}
              >
                &times;
              </button>
              <img
                src={selectedImage}
                alt="Large view"
                className="max-h-screen max-w-full"
              />
            </div>
          </div>
        )}
      </section>
    </>
}
