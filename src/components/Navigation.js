// Importing Packages and Hook
import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  let links = [
    { name: 'Our Services', link: '/' },
    { name: 'Why Us', link: '/' },
    { name: 'Testimonial', link: '/' },
    { name: 'FAQ', link: '/' },
  ]
  return (
    <>
      <nav className='relative flex justify-between font-helvetica container  mx-auto my-6 max-w-[26rem] sm:max-w-xl md:max-w-4xl lg:max-w-6xl '>
        <Link to='/' className='flex items-center text-xl font-bold text-slate-900'>
          Car App
        </Link>
        <ul className='flex justify-center items-center gap-8  '>
          {links.map((link) => (
            <li>
              <Link to={link}>{link.name}</Link>
            </li>
          ))}
          <button className='bg-green-600 text-white text-sm font-bold py-3 px-2 rounded-sm'>
            <Link to='/'>Register</Link>
          </button>
        </ul>
      </nav>
    </>
  )
}

export default Navigation
