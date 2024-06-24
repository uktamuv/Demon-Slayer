import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './header'
import Secsion from './secsion'
import Cards from './cards'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=' bg-fixed mt-[150px] pt-[50px]'  style={{ backgroundImage: 'url("src/imgs/1ky0e1mr4w261.jpg" ', width:'100%', }}>
    <div className=' w-[100%] h-[170px] bg-[#000000]  fixed z-50 top-[0px]'>
    <Header/>
    </div>
  <Secsion/>
  <Cards/>
    </div>
   
  </React.StrictMode>,
)
