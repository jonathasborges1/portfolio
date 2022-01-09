import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (

    <div className='grid grid-cols-12 gap-6 px-4 my-4 sm:px-20 md:px-32 lg:px-48 my-14'   >
     
        <div className='col-span-12 p-4 my-4 text-center bg-white rounded-2xl lg:col-span-3'>
            <Sidebar/>
        </div>

        <div className='flex flex-col col-span-12 my-4 bg-white rounded-2xl lg:col-span-9'>
            <Navbar/>
            <Component {...pageProps} />
        </div>
     
    </div>

  )
}

export default MyApp
