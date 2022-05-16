import axios from 'axios'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import SearchBox from '../components/SearchBox'

export default function SearchResult() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [car, setCar] = useState([])

  useEffect(() => {
    setLoading(true)
    axios
      .get('https://rent-cars-api.herokuapp.com/admin/car')
      .then((res) => {
        console.log(res)
        setCar(res.data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
      })
  }, [])

  return (
    <>
      <Navigation />
      <div className='relative h-56'>
        <div className='w-full h-[1000px] bottom-0 bg-violet-200 absolute -z-20'></div>
      </div>
      <div className='relative'>
        <SearchBox />
      </div>
      {/*! LOADING SECTION !*/}
      {loading && (
        <div className='grid place-items-center text-center'>
          <div className='text-9xl font-bold text-slate-500'>Loading Data...</div>
        </div>
      )}
      {/*! RUNNING SECTION ! */}
      {!loading && !error && (
        <ul className='flex flex-wrap items-center justify-center gap-10 mx-auto  max-w-[26rem] sm:max-w-xl md:max-w-4xl lg:max-w-6xl font-helvetica mt-8'>
          {/* // parameter : id, name, category, price, status, image */}
          {car.map(({ name, status, id, category, price, image }) => (
            <li key={id} className=' bg-white w-80 h-auto p-6 flex flex-col gap-4 rounded-lg shadow-lg'>
              {/* image */}
              <div className='w-auto h-52 flex items-center '>
                <img src={image} alt={name} className='object-cover w-full h-11/12 overflow-hidden' />
              </div>
              {/* Description text */}
              <div className='bg-white flex flex-col gap-4'>
                <p className='font-normal text-sm'>{name}</p>
                <p className='font-bold text-base'>Rp {price} /hari</p>
                <p className='font-normal text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p className='font-normal text-sm'>{category}</p>
                {status === true ? <p className='font-normal text-sm'>tersedia</p> : <p className='font-normal text-sm'>tak tersedia</p>}
              </div>
              <button className='px[auto] py-3 bg-green-500 text-white font-bold text-sm rounded-sm'>
                <Link to={'/result/' + id}>Pilih Mobil</Link>
              </button>
            </li>
          ))}
        </ul>
      )}
      {!loading && error && <div>error mas browww</div>}
      <Footer />
    </>
  )
}
