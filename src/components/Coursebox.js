import React from 'react'
import Courses from './Courses'

const Coursebox = () => {
    return (
        <>
            <div className='coursebox-grid'>
                
                    <Courses interest={'2k+ interested Coders'} names={'Begginer to Advance'} image={'https://media.geeksforgeeks.org/img-practice/banner/gate-live-course-thumbnail.png?v=19572'} content={'GATE CS & IT 2024'} />

                    <Courses interest={'87k+ interested Coders'} names={'Begginer to Advance'} image={'https://media.geeksforgeeks.org/img-practice/banner/complete-interview-preparation-thumbnail.png?v=19572'} content={'Complete Interview Preparation - Self Paced'} />

                    <Courses interest={'55k+ interested Coders'} names={'Begginer to Advance'} image={'https://media.geeksforgeeks.org/img-practice/banner/complete-guide-to-software-testing-automation-thumbnail.png?v=19572'} content={'Complete Guide to Software Testing and Automation: Master Java, Selenium and Cucumber'} />

                    <Courses interest={'9k+ interested Coders'} names={'Begginer to Advance'} image={'https://media.geeksforgeeks.org/img-practice/banner/Data-Structures-With-Python-thumbnail.png?v=19572'} content={'Data Structures & Algorithms in Python - Self Paced'} />

                    <Courses interest={'7k+ interested Coders'} names={'Begginer to Advance'} image={'https://media.geeksforgeeks.org/img-practice/banner/dsa-to-development-coding-guide-thumbnail.png?v=19572'} content={'DSA to Development: A Complete Guide'} />

                    <Courses interest={'15k+ interested Coders'} names={'Begginer to Advance'} image={'https://media.geeksforgeeks.org/img-practice/banner/devops-live-thumbnail.png?v=19572'} content={'DevOps Engineering - Planning to Production'} />
                
            </div>
        </>
    )
}

export default Coursebox
