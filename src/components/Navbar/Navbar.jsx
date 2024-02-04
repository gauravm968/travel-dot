import React, { useState } from 'react';
import { TbGridDots } from "react-icons/tb";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import './Navbar.css';

export default function Navbar() {
  const [active, setActive] = useState('navbar');

  //toggle navbar
  const showNavbar = () => {
    setActive('navbar activeNavbar');
  }
  //remove navbar
  const removeNavbar = () => {
    setActive('navbar');
  }

  return (
    <section className='navbarSection'>
      <header className='header flex'>

        <div className='logoDiv'>
          {/* use <Link to='/'> */}
          <a href='/' className='logo flex'>
            <h1>
              <MdOutlineTravelExplore className='icon'/>Travel.
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className='navLists flex'>
            <li className='navItem'>
              <a href='#/' className='navLink'>Home</a>
            </li>
            <li className='navItem'>
              <a href='#/' className='navLink'>Packages</a>
            </li>
            <li className='navItem'>
              <a href='#/' className='navLink'>Shop</a>
            </li>
            <li className='navItem'>
              <a href='#/' className='navLink'>About</a>
            </li>
            <li className='navItem'>
              <a href='#/' className='navLink'>Pages</a>
            </li>
            <li className='navItem'>
              <a href='#/' className='navLink'>News</a>
            </li>
            <li className='navItem'>
              <a href='#/' className='navLink'>Contact</a>
            </li>
            <button className='btn'>
              <a href='#/'>BOOK NOW</a>
            </button>
          </ul>

          <div onClick={removeNavbar} className='closeNavbar'>
            <AiFillCloseCircle className='icon'/>
          </div>
        </div>

        <div onClick={showNavbar} className='toggleNavbar'>
          <TbGridDots className='icon'/>
        </div>

      </header>
    </section>
  )
}
