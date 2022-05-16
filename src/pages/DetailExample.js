import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import SearchBox from '../components/SearchBox'
export default function SearchDetail() {
  return (
    <>
      <Navigation />
      <div className='relative h-56'>
        <div className='w-full h-[1000px] bottom-0 bg-violet-200 absolute -z-20'></div>
      </div>
      <div className='relative'>
        <SearchBox />
      </div>

      <div className='font-helvetica flex  mx-auto mt-20 justify-center max-w-[26rem] sm:max-w-xl md:max-w-4xl lg:max-w-6xl'>
        <div className='SECTIONKIRI bg-white shadow-md basis-2/3 rounded-lg p-6'>
          <h3 className='font-bold text-sm'>Tentang Paket</h3>
          <ul className='font-light text-sm mt-4 list-disc list-inside'>
            Include
            <li className='font-light text-sm text-slate-800 mt-2'>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
            <li className='font-light text-sm text-slate-800'> Sudah termasuk bensin selama 12 jam </li>
            <li className='font-light text-sm text-slate-800'>Sudah termasuk Tiket Wisata</li>
            <li className='font-light text-sm text-slate-800'>Sudah termasuk Pajak</li>
          </ul>
          <ul className='font-light text-sm mt-4 list-disc list-inside'>
            Exclude
            <li className='font-light text-sm text-slate-800 mt-2'>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li className='font-light text-sm text-slate-800'>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
            <li className='font-light text-sm text-slate-800'> Tidak termasuk akomodasi penginapan</li>
          </ul>
          <div className='font-bold text-sm mt-4 list-disc'>
            Refund, Reschedule, Overtime
            <ul className='list-disc list-inside'>
              <li className='font-light text-sm text-slate-800 mt-2'>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li className='font-light text-sm text-slate-800'>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
              <li className='font-light text-sm text-slate-800'> Tidak termasuk akomodasi penginapan</li>
            </ul>
          </div>
        </div>
        <div className='SECTIONkANAN basis-1/3  flex justify-end'>
          <li className=' bg-white  w-80 h-auto p-6 flex flex-col gap-4 rounded-lg shadow-lg'>
            {/* image */}
            <div className='w-auto h-52 flex items-center '>
              <img src='https://via.placeholder.com/600/92c952' alt='cardetail' className='object-cover w-full h-full overflow-hidden' />
            </div>
            {/* Description text */}
            <div className='bg-white flex flex-col gap-4'>
              <p className='font-normal text-sm'>avanza</p>
              <p className='font-bold text-base'>Rp 500000 /hari</p>
              <p className='font-normal text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <p className='font-normal text-sm'>Medium</p>
              <p>tersedia</p>
            </div>
            <button className='px[auto] py-3 bg-green-500 text-white font-bold text-sm rounded-sm'>Pesan Sekarang</button>
          </li>
        </div>
      </div>

      <Footer />
    </>
  )
}
