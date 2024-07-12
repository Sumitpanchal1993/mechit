import React from 'react'
import Search from '../../Media/Search.svg'
import './Navsearch.css'

function Navsearch() {
  let elements = document.getElementById('root').innerText
  elements = elements.toLowerCase()

  const handleSearch = (str)=>{
      str = str.toLowerCase()
      if(elements.includes(str)){
        let k  = elements.search(str)  
        console.log(elements.slice(k, str.length))
      }  
  }


  return (
   <>
    <div className='search flex'> 
      <input type="text"  onChange={(e)=>{handleSearch(e.target.value)}}/>
      <img src={Search} alt="Logo" />
    </div>
   </>
  )
}

export default Navsearch