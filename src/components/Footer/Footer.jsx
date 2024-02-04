import React, { useEffect } from 'react'
import './Footer.css';
import video2 from '../../assets/video2.mp4';
import { FiChevronRight, FiSend } from 'react-icons/fi';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Footer() {
   //scroll animation->fade-up
   useEffect(() => {
    Aos.init({duration: 2000})
  }, []);

  return (
    <section className='footer'>

      <div className='videoDiv'>
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className='secContent container'>

        <div className='contactDiv flex'>
          <div data-aos='fade-up' className='text'>
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div data-aos='fade-up' className='inputDiv flex'>
            <input type='text' placeholder='Enter Email Address'/>
            <button className='btn flex' type='submit'>
                SEND <FiSend className='icon'/>
            </button>
          </div>
        </div>

        <div className='footerCard flex'>

          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <a href='/' className='logo flex'>
                <MdOutlineTravelExplore className='icon' />Travel.
              </a>
            </div>
            <div data-aos='fade-up' className='footerParagraph'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum dolorum voluptates maiores asperiores necessitatibus, magnam assumenda obcaecati fugiat quidem! Omnis aperiam animi nisi, cumque possimus atque dolorem, officiis corrupti.
            </div>
            <div data-aos='fade-up' className='footerSocials flex'>
              <AiOutlineTwitter className='icon' />
              <AiFillYoutube className='icon' />
              <AiFillInstagram className='icon' />
              <FaTripadvisor className='icon' />
            </div>
          </div>

          <div className='footerLinks grid'>
            <div data-aos='fade-up' data-aos-duration='3000' className='linkGroup group1'>
              <span className='groupTitle'>
                OUR AGENCY
              </span>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Services
              </li> 
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Insurance
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Agency
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Tourism
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Payment
              </li>
            </div>

            <div data-aos='fade-up' data-aos-duration='3000' className='linkGroup group2'>
              <span className='groupTitle'>
                PARTNERS
              </span>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Bookings
              </li> 
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Rent Cars
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Hostel World
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Trivago
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Trip Advisor
              </li>
            </div>

            <div data-aos='fade-up' data-aos-duration='3000' className='linkGroup group3'>
              <span className='groupTitle'>
                LAST MINUTE
              </span>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                London
              </li> 
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                California
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Indonesia
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Europe
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Oceania
              </li>
            </div>
          </div>

          <div className='footerDiv flex'>
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - GauravM 2024</small>
          </div>

        </div>

      </div>

    </section>
  )
}
