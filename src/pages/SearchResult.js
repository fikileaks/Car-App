import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

export default function SearchResult() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    setLoading(true)
    axios
      .get('https://pokeapi.co/api/v2/pokemon-species/')

      .then((res) => {
        setPokemon(res.data.results)
        console.log(res.data.results)

        setLoading(false)
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
      })
  }, [])

  /*   useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(false)
      try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/1/posts')
        setPhoto(data)
        console.log(data)
        console.log(data.userId)
        console.log(data.title)
        setLoading(false)
      } catch (error) {
        setError(true)
      }
    }
    fetchData()
  }, []) */

  return (
    <>
      <Navigation />
      {/*! LOADING SECTION !*/}
      {loading && (
        <div className='grid place-items-center text-center'>
          <div className='text-9xl font-bold text-slate-500'>Loading Data...</div>
        </div>
      )}
      {/*! RUNNING SECTION ! */}
      {!loading && !error && (
        <ul className='flex flex-wrap items-center justify-center gap-10'>
          {pokemon.map(({ name, id, url }) => (
            <div className='' key={id}>
              <div>{name}</div>
              <div>{id}</div>
              <div>{url}</div>
              {/* <img
                src='
                https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
                alt='pokemon'
              /> */}
            </div>
          ))}
        </ul>
      )}
      {!loading && error && <div>error mas browww</div>}
      {/*     <div className=''>
        <ul>
          <li>
            <div>
              <img src='' alt='' />
            </div>
            <div>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <button></button>
            </div>
          </li>
        </ul>
      </div> */}
      <Footer />
    </>
  )
}
