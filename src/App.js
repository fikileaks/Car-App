//Importing React Packages
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import SearchDetail from './pages/SearchDetail'
import SearchPage from './pages/SearchPage'
import SearchResult from './pages/SearchResult'
import DetailExample from './pages/DetailExample'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
      <Routes>
        <Route path='/searchpage' element={<SearchPage />}></Route>
      </Routes>
      <Routes>
        <Route path='/result' element={<SearchResult />}></Route>
      </Routes>
      <Routes>
        <Route path='/result/:id' element={<SearchDetail />}></Route>
      </Routes>
      {/* Routes Contoh Detail Mobil, karena API nya eror mulu */}
      <Routes>
        <Route path='/detail' element={<DetailExample />}></Route>
      </Routes>
    </div>
  )
}

export default App
