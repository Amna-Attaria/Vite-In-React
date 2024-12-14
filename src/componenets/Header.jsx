import React from 'react'
import './Header.css'
function Header() {
  return (
   <>
        <div className='mb-5'>
        <img className='d-flex m-auto mt-5' src="/reactLogo.png" alt="" width={'120px'} />
        <h1 className='d-flex justify-content-center two'>React</h1>
        <h3  className='d-flex justify-content-center '>The library for web and native user interfaces</h3>
        <div  className='d-flex justify-content-center mt-3 mb-5'>
        <button type="button" class="btn btnOutlne1 text-light">Learn React</button>
        <button  type="button" class="btn btn-light btnOutlne">Refrence AI</button>
        </div>
        </div>
   </>
  )
}

export default Header
