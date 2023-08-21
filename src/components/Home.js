import React from 'react'
import Navbar from './Navbar'
import Grid from './Grid'
import Slidebox from './Slidebox'
import Dsaslide from './Dsaslide'
import Webpage from './Webpage'
import Tutorial from './Tutorial'
// import Courses from './Courses'
import Coursebox from './Coursebox'
import Footer from './Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='background-linear'>
                <div className="home-text">
                    <h2 className='text-logo'>CodeHub</h2>
                    <p className='text-simple'>
                        Hello, What do you want to learn?
                    </p>
                    <div className="search-field">
                        <input className="search-bar" type="text" placeholder='Search here' />
                        <button className='search-btn'>Search</button>
                    </div>
                </div>
                {/* style={{ position: 'relative', bottom: '-100px' }} */}
                <div className='margin-top'><Grid /></div>
            </div>
            <Slidebox />
            <div className='Dsa-container'> <Dsaslide /></div>
            <div className='Dsa-container margin-top'><Webpage /></div>
            <div className='Dsa-container margin-top'><Tutorial /></div>
            <div className='margin-top course-page '>
                <Coursebox/>
            </div>
            <div className="footer-page margin-top">
                <Footer/>
            </div>
        </>
    )
}

export default Home
