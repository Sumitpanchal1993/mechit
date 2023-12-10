import React, { useEffect } from 'react'
import Educard from '../Components/Educard'


let edu_data = [
  { id: 1, tilte: 'Master of Business Administration', school: 'Prestige institute of Management and Research', city: 'Dewas M.P.', splz: 'System Information and Marketting', year: 2023, percent: 73 },
  { id: 2, tilte: 'Bachelor of Engineering', school: 'Mahakal Institute of Technology and Science', city: 'Ujjain M.P.', splz: 'Mechanical Engineering', year: 2015, percent: 73.20 },
  { id: 3, tilte: 'Higher Secondary School Certificate Exam (12th)', school: 'School For Excellence', city: 'Dewas M.P.', splz: 'Mathematics', year: 2011, percent: 80.80 },
  { id: 3, tilte: 'High School Certificate Exam (10th)', school: 'School For Excellence', city: 'Dewas M.P.', splz: 'All Subjects', year: 2009, percent: 81.83 },
  { id: 5, tilte: 'Post Graduate Diploma in Computer Application', school: 'Makhanlal Chaturvedi University', city: 'Dewas M.P.', splz: 'Computer Application', year: 2017, percent: 65.4 }
]





function Qualification() {



  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
      {edu_data.map((item, index) => {
        return (
          <Educard key={index} title={item.tilte} school={item.school} city={item.city} splz={item.splz} percent={item.percent} year={item.year} />
        )
      })}


    </div>
  )
}

export default Qualification
