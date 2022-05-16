// Importing Packages and Hook
import React from 'react'

// Importing Files
import car from '../image/car.png'
import SearchBox from './SearchBox'

const HeaderSearch = () => {
  return (
    <>
      <div className='Wrapper relative font-helvetica'>
        <div className='flex flex-col justify-between md:items-center md:flex-row gap-10  mx-auto  max-w-[26rem] sm:max-w-xl md:max-w-4xl lg:max-w-6xl '>
          <div className='basis-1/2 lg:mb-16  '>
            <h1 className=' font-bold text-4xl leading-normal'>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <h4 className='font-normal text-sm leading-5 mt-4'>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</h4>
          </div>

          <div className='basis-1/2 self-end relative '>
            <img className='w-full h-auto relative z-10' src={car} alt='car' />
            <div className='absolute bottom-0 right-0 h-52 w-full  bg-blue-800 rounded-tl-[60px] '></div>
          </div>
        </div>

        <div className='absolute bottom-0 right-0 bg-indigo-50 w-full h-[10000px] -z-10'></div>
      </div>

      <SearchBox />
    </>
  )
}

export default HeaderSearch
