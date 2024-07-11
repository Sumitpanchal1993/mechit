import React from 'react'

import './SkillCard.css'

function SkillCard({item}) {
  return (
    <>
      <div className='skillCardBase flex'>
        <div>
          <img src={item.logo} alt="ogo" />
        </div>
        <div>
          <h3>{item.language}</h3>
        </div>
        <div >
          {/* <label htmlFor="">Expertise</label> */}
          <input type="range" name="" id="" value={item.level} readOnly/>
        </div>
      </div>
    </>
  )
}

export default SkillCard