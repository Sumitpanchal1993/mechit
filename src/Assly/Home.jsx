import React from 'react'
// import MyButton from '../Components/MyButton'
import '../Assly/Home.css'
import Poster from '../Media/Poster3.png'



function Home() {
  return (
    <>
      <div className="homecontainer">
        <div className="home_lhs">
          <div className='title'>
            <h1 className='myHeading'>Sumit Panchal</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam sequi a error maxime asperiores magnam vero, ullam aspernatur illum aliquid unde porro perferendis similique laudantium ipsum incidunt nesciunt est repellendus.</p>
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
        <div className="home_rhs">
          <div className='poster'>
            <img src={Poster} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
