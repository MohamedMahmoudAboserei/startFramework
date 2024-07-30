import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { menuOutline, closeOutline } from 'ionicons/icons';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return <>
    <nav className="bg-[#2c3e50] w-full fixed z-50">
      <div className="container text-white p-8 flex justify-around align-middle text-center items-center font-bold mx-auto">
        <h2 className="text-white text-3xl uppercase"><Link to=''>Start Framework</Link></h2>
        <ul className={`md:flex bg-[#2c3e50] md:items-center md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 transition-all ease-in duration-500 ${menuOpen ? 'top-[70px] opacity-100' : 'top-[-400px] opacity-0 md:opacity-100 md:top-0'}`}>
          <li className="mx-4 my-6 md:my-0">
            <NavLink to='about' className="text-xl hover:text-[#1abc9c] duration-500">About</NavLink>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <NavLink to='portfolio' className="text-xl hover:text-[#1abc9c] duration-500">Portfolio</NavLink>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <NavLink to='contact' className="text-xl hover:text-[#1abc9c] duration-500">Contact</NavLink>
          </li>
        </ul>
        <span className="text-3xl cursor-pointer mx-3 md:hidden block" onClick={toggleMenu}>
          <IonIcon icon={menuOpen ? closeOutline : menuOutline} />
        </span>
      </div>
    </nav>
  </>
}
