import React from 'react'
import { Link } from 'react-router-dom'
import {menu} from '../Static Data/Menu'
import './Nav.css'
function Navbar() {
  return (
    <>
    <div>
    <ul>
    {menu.map((obj)=>{
        return(
            <li key={obj.id}><Link to={obj.link}>{obj.icon}{obj.title}</Link></li>
        )
    })}
    </ul>
    </div>      
    </>
  )
}
export default Navbar

