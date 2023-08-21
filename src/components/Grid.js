import React from 'react'

const Grid = () => {
    return (
        <>
            <div className='grids'>
                <div className="grid-box">
                    <img className="grid-img" src="https://media.geeksforgeeks.org/auth-dashboard-uploads/read.png" alt='img' />
                    <h2 className='grid-box-text'>How to Implement Reveal on Scroll in React using Tailwind CSS ?</h2>
                    <p className='grid-box-text'>In this article, we’ll see how to implement reveal on scroll in React using Tailwind CSS. The reveal...</p>
                </div>
                <div className="grid-box">
                    <img className="grid-img" src="https://media.geeksforgeeks.org/auth-dashboard-uploads/practice.png" alt='img' />
                    <h2 className='grid-box-text'>Explore Practice Problems</h2>
                    <p className='grid-box-text'>Solve DSA Problems. Filter based on topic tags and company tags. Get curated problem lists by GFG ex...</p>
                </div>
                <div className="grid-box">
                    <img className="grid-img" src="https://media.geeksforgeeks.org/auth-dashboard-uploads/learn.png" alt='img' />
                    <h2 className='grid-box-text'>DSA Self Paced</h2>
                    <p className='grid-box-text'> Most popular course on DSA trusted by over 75,000 students! Built with years of experience by indus...</p>
                </div>
            </div>
        </>
    )
}

export default Grid
