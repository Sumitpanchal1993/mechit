import React from 'react'
import Search from '../../Media/Search.svg'
import './Navsearch.css'

function Navsearch() {
  return (
   <>
    <div className='search flex'> 
      <input type="text" />
      <img src={Search} alt="Logo" />
    </div>
   </>
  )
}

export default Navsearch