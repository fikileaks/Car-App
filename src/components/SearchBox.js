import React from 'react'
import { Link } from 'react-router-dom'
// import MyCombobox from './Combobox'

const SearchBox = () => {
  return (
    <>
      <div className='font-helvetica relative -mt-10 z-10 flex justify-center items-center gap-10 mx-auto rounded-lg shadow-md max-w-4xl h-28 bg-white'>
        <div>{/*<MyCombobox /> */}</div>
        <div>Pencarian</div>
        <button className='px-3 py-2 rounded-sm bg-green-600 hover:bg-opacity-80 text-sm font-bold text-white'>
          <Link to='/'>Cari Mobil</Link>
        </button>
      </div>
    </>
  )
}

export default SearchBox
