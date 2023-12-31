import React, { Fragment } from "react";
import "./Placement.css";
import Placement1 from "./ABESIT-Recuriters.jpg";
import NavigationBar from "../../Navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import amazon from "./amazon - 600.png";
import adobe from "./unnamed (1).jpg";
import google from "./images (1) (1).png"
import facebook from "./ced66ecfc53814d71f8774789b55cc76.png";
import Tcs from "./Tcs.png";
import stats from "./1672056430phpgry7Fn.jpeg"
const Placements = () => {
  return (
    <Fragment>
      <NavigationBar />
      <div className="nine">
        <h1>
          Placemo<span>ABESIT</span>
        </h1>
      </div>
      <div className="container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={facebook} alt="Tcs" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={amazon} alt="amazon" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={adobe} alt="adobe" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={google} alt="google" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Tcs} alt="Tcs" />
          </SwiperSlide>
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
      <div  className="imagestyle" >
      < img src ={stats} alt="stats"/>
      </div>
    </Fragment>
  );
};
export default Placements;
