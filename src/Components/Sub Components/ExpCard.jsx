import React from 'react'
import './ExpCard.css'

function ExpCard({item}) {
  return (
    <>
        <div className="expCardBase flex">
            <div className="year flex">
                <span>{item.year}</span>
                <div className="arrow"></div>
                <div className="dot"></div>
            </div>
            <div className="exp_detail">
                <div className="comp_Name">
                    <h2>{item.title}</h2>
                    <p>{item.co_name}</p>
                    <p>{item.location}</p>
                </div>
                <div className="describe">
                    <p>{item.splz}</p>
                </div>
                <div className="describe">
                    <p>{item.percent}</p>
                </div>
                <div className="describe">
                    <p>{item.role}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ExpCard