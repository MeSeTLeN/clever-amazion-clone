import React from 'react'
import './Home.css'
import Product from '../Product/Product'

import home from '../../assets/img_desktop/Home/home.jpg'
import laptop from '../../assets/img_desktop/Product/laptop.jpg'
import monitor from '../../assets/img_desktop/Product/monitor.jpg'
import TB from '../../assets/img_desktop/Product/2TB.jpg'
import memory from '../../assets/img_desktop/Product/memory.jpg'
import microSD from '../../assets/img_desktop/Product/microSD.jpg'
import microphone from '../../assets/img_desktop/Product/microphone.jpg'

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img src={home} alt='home' />

        <div className='home__row'>
          <Product
            id='0'
            title='Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver'
            price={364.99}
            image={laptop}
            rating={4}
          />
          <Product
            id='1'
            title='Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox - 1-Year Rescue Service (STGX2000400)'
            price={59.99}
            image={TB}
            rating={5}
          />
        </div>

        <div className='home__row'>
          <Product
            id='2'
            title='HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)'
            price={174.99}
            image={monitor}
            rating={2}
          />
          <Product
            id='3'
            title='Samsung (MZ-V7E1T0BW) 970 EVO SSD 1TB - M.2 NVMe Interface Internal Solid State Drive with V-NAND Technology, Black/Red'
            price={139.99}
            image={memory}
            rating={4}
          />
          <Product
            id='4'
            title='SanDisk 128GB Ultra MicroSDXC UHS-I Memory Card with Adapter - 120MB/s, C10, U1, Full HD, A1, Micro SD Card - SDSQUA4-128G-GN6MA'
            price={20.38}
            image={microSD}
            rating={5}
          />
        </div>

        <div className='home__row'>
          <Product
            id='5'
            title='Blue Yeti USB Mic for Recording & Streaming on PC and Mac, 3 Condenser Capsules, 4 Pickup Patterns, Headphone Output and Volume Control, Mic Gain Control, Adjustable Stand, Plug & Play – Blackout'
            price={143.99}
            image={microphone}
            rating={4}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
