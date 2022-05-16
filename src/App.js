//Importing React Packages
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import SearchResult from './pages/SearchResult'

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
    </div>
  )
}

export default App
