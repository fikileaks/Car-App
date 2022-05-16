import React from 'react'
import Facebook from '../image/icon_facebook.svg'
import Instagram from '../image/icon_instagram.svg'
import Mail from '../image/icon_mail.svg'
import Twitch from '../image/icon_twitch.svg'
import Twitter from '../image/icon_twitter.svg'

const Footer = () => {
  return (
    <>
      <footer className=' font-helvetica font-normal text-sm flex flex-col md:flex-row justify-between mx-auto md:my-24 my-6 max-w-[26rem] sm:max-w-xl md:max-w-4xl lg:max-w-6xl'>
        <div className=''>
          <p className='mb-4'>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p className='mb-4'>binarcarrental@gmail.com</p>
          <p className='mb-4'>081-233-334-808</p>
        </div>
        <div className='font-semibold mb-4'>
          <p className='mb-4'>Our services</p>
          <p className='mb-4'>Why Us</p>
          <p className='mb-4'>Testimonial</p>
          <p>FAQ</p>
        </div>
        <div className=' border-red-700 mb-4'>
          <p className='mb-4'>Connect with us</p>
          <div className='flex gap-4'>
            <img src={Facebook} alt='Facebook' className='w-8' />
            <img src={Instagram} alt='Instagram' className='w-8' />
            <img src={Mail} alt='Mail' className='w-8' />
            <img src={Twitch} alt='Twitch' className='w-8' />
            <img src={Twitter} alt='Twitter' className='w-8' />
          </div>
        </div>
        <div className=''>
          <p className='mb-4'>Copyright Binar 2022</p>
          <div className='mb-4'>Car App</div>
        </div>
      </footer>
    </>
  )
}

export default Footer
