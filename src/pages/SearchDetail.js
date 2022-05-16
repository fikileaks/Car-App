import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
/* import Footer from '../components/Footer'
import Navigation from '../components/Navigation' */

export default function SearchDetail() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(true)
  const [carDetail, setCarDetail] = useState([])

  const params = useParams()

  useEffect(() => {
    const url = `https://rent-cars-api.herokuapp.com/admin/car/${params.id}`
    setLoading(true)
    setError(false)
    axios
      .get(url)
      .then((res) => {
        console.log(res)
        console.log(res.data)
        console.log(res.data.id)
        setCarDetail([res.data])
        setLoading(false)
        setError(false)
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
      })
  }, [params.id])

  return (
    <>
      <Navigation />
      {loading && <div>Loading Data...</div>}
      {!loading && !error && (
        <div className='container'>
          {/* Deskripsi Paket */}
          <div className='SECTIONKIRI bg-green-100'>
            <h3>Tentang Paket</h3>
            <ul>
              Include
              <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
              <li> Sudah termasuk bensin selama 12 jam </li>
              <li>Sudah termasuk Tiket Wisata</li>
              <li>Sudah termasuk Pajak</li>
            </ul>
            <ul>
              Exclude
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
              <li> Tidak termasuk akomodasi penginapan</li>
            </ul>
            <div className=''>
              Refund, Reschedule, Overtime
              <ul>
                Exclude
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                <li> Tidak termasuk akomodasi penginapan</li>
              </ul>
            </div>
          </div>
          {/* Car Detail */}
          <div className='SECTIONKANAN'>
            <ul>
              {carDetail.map(({ id, name, category }) => (
                <li key={id}>
                  <h1>{name}</h1>
                  <h1>{category}</h1>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {!loading && error && <div>Error Apinya</div>}
      <Footer />
    </>
  )
}
