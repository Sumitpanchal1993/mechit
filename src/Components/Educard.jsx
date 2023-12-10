import React, { useEffect } from 'react'
import './Educard.css'


function Educard(props) {
    useEffect(() => {
        let progOD = document.querySelector('.prog_OD');
        let progVal = document.querySelector('.prog_data');
        let progStart = 0.0;
        let progEnd = 73;
        let progSpeed = 50;
        let progress = setInterval(() => {
            progStart++;
            if (progStart == progEnd) {
                clearInterval(progress)
            }
            (progVal.textContent = progStart + '%')
            progOD.style.background = `conic-gradient(teal ${(360 / 100 * progStart)}deg, grey 0deg) `

        }, progSpeed)
    })


    return (
        <>
            <div className='edu_base'>
                <div className="progress">
                    <div className='prog_OD'>
                        <div className='prog_ID'>
                            <div className='prog_data'>{props.percent}%</div>

                        </div>
                    </div>
                    <h5>Percentage</h5>
                </div>
                <hr />
                <div className="edu_detail">
                    <div className='edu_class'><h4>{props.title}</h4></div>
                    <div><p><b>From:</b> {props.school}</p></div>
                    <div><p><b>City: </b>{props.city}</p></div>
                    <div><p><b>Specialization:</b> {props.splz}</p></div>
                    <div><p><b>Percentage</b> {props.percent}</p></div>
                    <div><p><b>Passing Year:</b> {props.year}</p></div>

                </div>
                <div>
                    <button>Know More</button>
                </div>
            </div>
        </>
    )
}




export default Educard
