import React from 'react'

const Courses = (props) => {
    return (
        <>
            <div className="course-card">
                <div className="course-content">
                    <img className='courses-img' src={props.image}alt="img-course" />
                    <p className='courses-para'>{props.interest}</p>
                    <h2 className='courses-text'>{props.content}</h2>
                    <p className='courses-para'>{props.names}</p>
                </div>
            </div>
        </>
    )
}

export default Courses
