import React from 'react'
import Menu from '../../Media/Menu.svg'
import './Navoption.css'

const links = ["Home", "About", "Portfolio", "Contact"];

function Navoption() { 
    function showoption(){
        let element = document.querySelector('.dropdown')
        if(element.style.display == 'block' ){
            element.style.display ='none'
        }else{
            element.style.display ='block'
        }

    }

  return (
    <>
        <button className='dummyBtn' onClick={showoption}><img src={Menu} alt="" /></button>
        <div className='dropdown'>
            <ul>
                {links.map((item, index)=>{
                    return(
                        <li key={index}><a href="">{item}</a></li>
                    )
                })}
            </ul>
        </div>
    </>
  )
}

export default Navoption