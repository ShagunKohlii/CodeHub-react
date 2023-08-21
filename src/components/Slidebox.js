import React from 'react'
// import { Slide } from 'react-slideshow-image';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Slidebox = () => {


    return (

        <>
            <div className='grid-container'>
                <Carousel autoPlay={true} showArrows={false} infiniteLoop={true}>
                    <div >
                        <div className="flex-grid">
                            <div >
                                <img className='gimage' src="https://media.geeksforgeeks.org/wp-content/uploads/20230425154135/Best-ChatGPT-Alternatives.webp" alt="" /></div>

                            <div className='grid-content'>
                                <h2>ChatGPT</h2>
                                <p>ChatGPT is leading the world of chat AI and many people have started incorporating its use in there day to day life. The GPT-3 language model from OpenAI serves as the fou...</p>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className="flex-grid">
                        <div><img className='gimage' src="https://media.geeksforgeeks.org/wp-content/uploads/20230731164847/Share-your--exp-write-it-up-banner-resize.png" alt="" /></div>

                        <div className='grid-content'>
                            <h2>Write It Up Event 2023 | Share your Experiences on GeeksforGeeks</h2>
                            <p>Geeksforgeeks has come up with an event this year where you can share your experiences and win exciting goodies. As simple as it sounds, all you have to do is visit our po...</p>
                        </div>
                        </div>
                    </div>
                    <div >
                        <div className="flex-grid">
                        <div>
                            <img className='gimage' src='https://media.geeksforgeeks.org/wp-content/uploads/20230704113812/GeeksforGeeks-Community.webp' alt="" />
                        </div>
                        <div className='grid-content'>
                            <h2>GeeksforGeeks Community - Join Our Geeks Squad!</h2>
                            <p>In the modern era of online learning, hybrid work environments, and intense competition, college students struggle to choose the right computer science career path, Smart ...</p>
                        </div>
                        </div>
                    </div>
                </Carousel>
            </div>


        </>
    )
}

export default Slidebox
