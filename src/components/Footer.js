import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AlternateEmailSharpIcon from '@mui/icons-material/AlternateEmailSharp';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-logo">
                    <div className='footerL'> <img src="/assets/code.png" alt="" srcset="" /></div>
                    <div className="footer-address">
                        <LocationOnIcon className='padding-f'/>
                                           A-143, 9th Floor, Sovereign Corporate Tower, Sector-136, Noida, Uttar Pradesh - 201305</div>
                    <div className="footer-email"><AlternateEmailSharpIcon className='padding-f'/>feedback@CodeHub.org</div>
                    <div className="medias padding-f">
                        <YouTubeIcon className='mediashover' fontSize='large' />
                        <InstagramIcon className='mediashover' fontSize='large' />
                        <TwitterIcon className='mediashover' fontSize='large' />
                        <LinkedInIcon className='mediashover' fontSize='large' />

                    </div>
                </div>

                <div className="footer-content">
                    <h3 className='footer-heads'>Company</h3>
                    <ul>
                        <li>About us</li>
                        <li>Legal</li>
                        <li>Careers</li>
                        <li>In Media</li>
                        <li>Contact Us</li>
                        <li>Advertise with us</li>
                    </ul>
                </div>

                <div className="footer-content">
                    <h3 className='footer-heads'>Explore</h3>
                    <ul>
                        <li>Job-A-Thon For Freshers</li>
                        <li>Job-A-Thon For Experienced</li>
                        <li>GfG Weekly Contest</li>
                        <li>Offline Classes (Delhi/NCR)</li>
                        <li>DSA in JAVA/C++</li>
                        <li>Master System Design</li>
                        <li>MMaster CP</li>
                    </ul>
                </div>

                <div className="footer-content">
                    <h3 className='footer-heads'>Languages</h3>
                    <ul>
                        <li>Python</li>
                        <li>Java</li>
                        <li>C++</li>
                        <li>PHP</li>
                        <li>GoLang</li>
                        <li>SQL</li>
                        <li>Android Tutorial</li>
                        <li>R Language</li>
                    </ul>
                </div>

                <div className="footer-content">
                    <h3 className='footer-heads'>DSA Concepts</h3>
                    <ul>
                        <li>DSA Strutures</li>
                        <li>Arrays</li>
                        <li>Strings</li>
                        <li>Linked List</li>
                        <li>Algorithms</li>
                        <li>Sorting</li>
                        <li>Mathematical</li>
                        <li>Dynamic Programming</li>
                    </ul>
                </div>
                <div className="footer-content">
                    <h3 className='footer-heads'>Web Development</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                        <li>ReactJs</li>
                        <li>AngularJs</li>
                        <li>NodeJs</li>
                    </ul>
                </div>




            </div>

        </>
    )
}

export default Footer
