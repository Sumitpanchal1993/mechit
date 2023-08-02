import React from 'react'
import '../Components/ProjectCards.css'
import Logo from '../Media/Calc_img.jpg'
function Cards() {
  return (
    <>
    <div className='cardBody'>
      <div className='card_logo'><img src='https://cdn3d.iconscout.com/3d/premium/thumb/calculator-3671700-3061901.png' alt="Logo" /></div>
      <div><h1>Title</h1></div>
      <div><h4>Project Detail:</h4></div>
      <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit velit illum consectetur opti</p></div>
      <div>
      <h4>Technologies Used:</h4>
      <ul>
        <li>React JS</li>
        <li>React JS</li>
        <li>React JS</li>
        <li>React JS</li>
      </ul>
      </div>
      <div><h4>Project Link:</h4>
      <a href=""> Link to Project</a>
      </div>
      <div><button>Know More</button></div>

    </div> 
    </>
  )
}

export default Cards
