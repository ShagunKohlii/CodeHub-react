import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "grey",borderRadius: "50%", fontSize:"50px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
   
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "grey",borderRadius: "50%" }}
            onClick={onClick}
        />
    );
}

const Dsaslide = () => {


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <>
            <div className=''>
                <h2>DSA</h2>
                <Slider {...settings}>
                    <div>
                        <div className="dsa-box dsa-text">Array</div>
                    </div>
                    <div>
                        <div className="dsa-box dsa-text">Analysis of Algo</div>
                    </div>
                    <div>
                        <div className="dsa-box dsa-text">Linked List</div>
                    </div>
                    <div>
                        <div className="dsa-box dsa-text">Searching Algo</div>
                    </div>
                    <div>
                        <div className="dsa-box dsa-text">Stack</div>
                    </div>
                    <div>
                        <div className="dsa-box dsa-text">Sorting Algo</div>
                    </div>
                    <div>
                        <div className="dsa-box dsa-text">Sorting Queue</div>
                    </div>
                    <div>
                        <div className="dsa-box dsa-text">Graph</div>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default Dsaslide
