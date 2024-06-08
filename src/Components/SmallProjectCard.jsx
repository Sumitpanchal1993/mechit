import React from 'react'
import icon from '../Media/Logo.png'

function SmallProjectCard() {
  return (
    <div className='small_project'>
        <div className='small_color_div'>
            <img src={icon} alt="image" />
        </div>
        <div>
            <div><h3>Title</h3></div>
            <div><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptates quod sit labore repellat laboriosam quam rem quidem eligendi impedit, molestias voluptas porro veniam ea eos quas nobis iusto nam!</p></div>
            <div><button className='mybtn'>Try Me Once <span>Check</span></button></div>
        </div>
    </div>
  )
}

export default SmallProjectCard