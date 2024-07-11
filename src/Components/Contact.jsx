import React from 'react'
import './Contact.css'
import EMAIL from '../Media/Email.svg'
import PHONE from '../Media/Phone.svg'
import LOCATION from '../Media/Location.svg'

function Contact() {
  return (
    <>
    <div className="contactBase flex" id='Contact'>
      <div>
        <h2>Contact Me</h2>
      </div>
      <div className='myContact flex'>
        <div className='contactTile flex'> 
          <img src={EMAIL} alt="" />
          <span> <a href="mailto:sumitpanchal08@gmail.com">sumitpanchal08@gmail.com</a></span>
        </div>
        <div className='contactTile flex'>
          <img src={PHONE} alt="" />
          <span> <a href="tel:8349102532">+91 8349102532</a></span>
        </div>
        <div className='contactTile flex'>
          <img src={LOCATION} alt="" />
          <span> <a href="#"><address> 28 Vivekanand Colony Moti Bunglaw Dewas MadhyaPradesh</address></a></span>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact