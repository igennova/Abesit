import React from "react";
import Slider from "react-slick";
import building from "./hostel-1.webp"
import building2 from "./canteen-3.webp"
import building3 from "./class-222.webp"
import building4 from "./class-26.webp"
import building5 from "./about-overview-img.webp"
import building6 from "./building3.jpg"
const Image=()=>{
    
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
            };
          
          return (
            <Slider {...settings}>
              <div>
                <img className="img-fluid"  width={500} src={building5} alt=""/>
              </div>
              <div>
              <img className="img-fluid" width={500}   src={building6} alt=""/>
              </div>
              <div>
              <img className="img-fluid" width={500}  src={building2} alt=""/>
              </div>
              <div>
              <img className="img-fluid" width={500}  src={building4} alt=""/>
              </div>
              <div>
              <img className="img-fluid" width={500}  src={building} alt=""/>
              </div>
              <div>
              <img className="img-fluid" width={500}   src={building3} alt=""/>
              </div>
            </Slider>
          );
        }
export default Image
    
