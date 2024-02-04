import React, { useEffect, useState } from 'react';
import './Home.css';
import video from '../../assets/video1.mp4';
import { GrLocation } from "react-icons/gr";
import { HiFilter } from 'react-icons/hi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { TbApps } from 'react-icons/tb';
import { FiFacebook } from 'react-icons/fi';
import { SiTripadvisor } from 'react-icons/si';
import { BsListTask } from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  //scroll animation->fade-up
  useEffect(() => {
    Aos.init({duration: 2000})
  }, []);

  const[price, setPrice] = useState('1000');

  return (
    <section className='home'>

      <div className='overlay'></div>
      <video src={video} muted autoPlay loop type='video/mp4'></video>

      <div className='homeContent container'>

        <div className='textDiv'>
          <span data-aos='fade-up' className='smallText'>
            Our Packages
          </span>
          <h1 data-aos='fade-up' className='homeTitle'>Search your Holiday</h1>
        </div>

        <div data-aos='fade-up' className='cardDiv grid'>

          <div className='destinationInput'>
            <label htmlFor='city'>Search your destination:</label>
            <div className='input flex'>
              <input type='text' placeholder='Enter name here....' />
              <GrLocation className='icon' />
            </div>
          </div>

          <div className='dateInput'>
            <label htmlFor='date'>Select your date:</label>
            <div className='input flex'>
              <input type='date'/>
            </div>
          </div>

          <div className='priceInput'>
            <div className='label_total flex'>
              <label htmlFor='price'>Min price:</label>
              <h3 className='total'>${price}</h3>
            </div>
            <div className='input flex'>
              <input type='range' max='5000' min='1000' onChange={(event) => setPrice(event.target.value)}/>
            </div>
          </div>

          <div className='searchOptions flex'>
            <HiFilter className='icon'/>
            <span>MORE FILTERS</span>
          </div>

        </div>

        <div data-aos='fade-up' className='homeFooterIcons flex'>
          <div className='rightIcons'>
            <FiFacebook className='icon'/>
            <AiOutlineInstagram className='icon'/>
            <SiTripadvisor className='icon'/>
          </div>
          <div className='leftIcons'>
            <BsListTask className='icon'/>
            <TbApps className='icon'/>
          </div>
        </div>

      </div>

    </section>
  )
}
