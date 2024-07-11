import React from 'react'
import ProjectCard from './Sub Components/ProjectCard'
import Folio from "../Media/Proj 1.png";
import Ecommerce from "../Media/Proj 3.png";
import HRM from "../Media/Proj 2.png";
import './Project.css'

const ProjectList = [
  {id:1, project: 'Portfolio Site', link:'https://mechit.vercel.app/',image:Folio,  description:'', },
  {id:2, project: 'E-Commerece App', link:'https://ecommerce-app-eight-theta.vercel.app/', image:Ecommerce, description:'', },
  {id:3, project: 'H.R.M. App', link:'https://mechit.vercel.app/', image:HRM, description:'', },
  {id:4, project: 'Static Website', link:'https://mechit.vercel.app/', image:'HRM', description:'', },
]



function Projects() {
  return (
    <>
      <div className='projectBase flex'>
        <div>
          <h2>My Works</h2>
        </div>
        <div className='project_list flex'>
          {ProjectList.map((item)=>{
            return(
              <ProjectCard key={item.id} item={item} />
            )
          })}      
     
        </div>
      </div>
       
    </>
  )
}

export default Projects