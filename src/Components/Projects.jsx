import React from 'react'
import ProjectCard from './Sub Components/ProjectCard'
import './Project.css';
import Project from '../Static Data/Project'

function Projects() {
  return (
    <>
      <div className='projectBase flex' id='Portfolio'>
        <div>
          <h2>My Works</h2>
        </div>
        <div className='project_list flex'>
          {Project.map((item)=>{
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