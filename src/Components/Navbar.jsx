import React from 'react'
import { Link } from 'react-router-dom'
import { menu } from '../Static Data/Menu'
import './Nav.css'
import Mylogo from '../Media/Logo.png'

function open(){
  document.querySelector('.menubtn').style.display ='none'
  document.querySelector('.closebtn').style.display ='block'
  document.querySelector('.navMenu').style.display ='block'
}
function close(){
  document.querySelector('.menubtn').style.display ='block'
  document.querySelector('.closebtn').style.display ='none'
  document.querySelector('.navMenu').style.display ='none'
}




function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={Mylogo} alt="" />          
        </div>
        <div className="menubtn" onClick={open}>
           <span className="material-symbols-outlined">menu</span>
        </div>
        <div className="closebtn" onClick={close}>
          <span className="material-symbols-outlined">close</span>
        </div>


        <div className='navMenu'>
          <ul>
            {menu.map((obj) => {
              return (
                <li key={obj.id}><Link to={obj.link}>{obj.icon}{obj.title}</Link></li>
              )
            })}
          </ul>
        </div>
      </nav>
    </>
  )
}
export default Navbar

