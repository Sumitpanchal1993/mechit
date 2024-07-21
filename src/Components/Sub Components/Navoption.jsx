import React from 'react'
import Menu from '../../Media/Menu.svg'
import Close from '../../Media/Close.svg'
import './Navoption.css'

const links = ["Home", "About", "Portfolio", "Contact"];

function Navoption() { 
    function showoption(){
        let element = document.querySelector('.dropdown')
        if(element.style.display !== 'none' ){
            element.style.display ='none'
            document.querySelector('.dummyBtn img').src= Menu
        }else{
            element.style.display ='block'
            document.querySelector('.dummyBtn img').src= Close
        }
        
    }
    
    console.log()
  return (
    <>
        <button className='dummyBtn' onClick={showoption}><img src={Menu} alt="" /></button>
        <div className='dropdown'>
            <ul>
                {links.map((item, index)=>{
                    return(
                        <li key={index}><a href={`#${item}`}>{item}</a></li>
                    )
                })}
            </ul>
        </div>
    </>
  )
}

export default Navoption