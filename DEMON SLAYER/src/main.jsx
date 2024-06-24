import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './header'
import Secsion from './secsion'
import Cards from './cards'
import Data from './data'
import Sezon from './sezon'
import Footer from './footer'
import Fut from './fut'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=' overflow-hidden bg-fixed mt-[150px] pt-[50px]'  style={{ backgroundImage: 'url("/1ky0e1mr4w261.jpg" ', width:'100%', }}>
    <div className=' w-[100%] h-[170px] bg-[#000000]  fixed z-50 top-[0px]'>
    <Header/>
    </div>
  <Secsion/>
  <Cards/>
  <Data/>
  <Sezon/>
 <div className='bg-[#21509bb1] max-w-[1440px] mx-auto p-[50px]' >
 <Footer />
 <Fut/>
 </div>

  
    </div>
   
  </React.StrictMode>,
)
