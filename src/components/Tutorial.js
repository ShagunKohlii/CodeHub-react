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



const Tutorial = () => {
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
            <div >
                <h2>Tutorial</h2>
                <Slider {...settings}>
                    <div>
                        <div className="dsa-box dsa-text tut-box">Python</div>
                    </div>
                    <div>
                        <div className="dsa-box dsa-text tut-box">Java</div>
                    </div>
                    <div>
                        <div className="dsa-box dsa-text tut-box">C++</div>
                    </div>
                    <div>
                        <div className="dsa-box dsa-text tut-box">C</div>
                    </div>
                    <div>
                        <div className="dsa-box dsa-text tut-box">C#</div>
                    </div>
                    <div>
                        <div className="dsa-box dsa-text tut-box">GOlang</div>
                    </div>
                    <div>
                        <div className="dsa-box dsa-text tut-box">SQL</div>
                    </div>
                    <div>
                        <div className="dsa-box dsa-text tut-box">Android</div>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default Tutorial
