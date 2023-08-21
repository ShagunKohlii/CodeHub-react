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



const Webpage = () => {
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
                <h2>Web Development</h2>
                <Slider {...settings}>
                    <div>
                        <div className="dsa-box dsa-text web-box">HTML</div>
                    </div>
                    <div>
                        <div className="dsa-box dsa-text web-box">CSS</div>
                    </div>
                    <div>
                        <div className="dsa-box dsa-text web-box">Javascript</div>
                    </div>
                    <div>
                        <div className="dsa-box dsa-text web-box">PHP Tutorial</div>
                    </div>
                    <div>
                        <div className="dsa-box dsa-text web-box">Bootstrap</div>
                    </div>
                    <div>
                        <div className="dsa-box dsa-text web-box">ReactJS Tutorial</div>
                    </div>
                    <div>
                        <div className="dsa-box dsa-text web-box">NodeJS</div>
                    </div>
                    <div>
                        <div className="dsa-box dsa-text web-box">AngularJS</div>
                    </div>
                </Slider>
            </div>
    </>
  )
}

export default Webpage
