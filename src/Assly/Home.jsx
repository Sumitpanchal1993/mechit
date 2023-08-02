import React from 'react'
// import MyButton from '../Components/MyButton'
import '../Assly/Home.css'
import Poster from '../Media/Poster3.png'



function Home() {
  return (
    <>
      <div className="homecontainer">
      <div className='title'>
        <h1 >Hello Visitor's</h1>
        <h1>Welcome to the Website of:</h1>
        <h1 className='myHeading'>Sumit Panchal</h1>
      </div>
      

      <div className='poster'>
        <img src={Poster} alt="" />
      </div>
      <div className="skill">
        <h1 className='myheading'>
          Key Skills:
        </h1>
        <ul>
          <li>React JS Application</li>
          <li>Java Script </li>
          <li>CSS (Cascade Style Sheet)</li>
          <li>HTML5 (Hyper Text Markup Languages)</li>
          <li>Redux Integration</li>
          <li>Python</li>
          <li>Node JS</li>
        </ul>

      </div>


      <div>
        <button>Know</button>
      </div>
      
      
      </div>


    </>
  )
}

export default Home
