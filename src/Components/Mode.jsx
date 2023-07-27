import '../Components/Mode.css';
import React from 'react'

function Mode() {
  return (
    <div className='togglemode'>
      <span className="material-symbols-outlined active" >light_mode</span>
      <span className="material-symbols-outlined">dark_mode</span>
    </div>
  )
}

export default Mode
