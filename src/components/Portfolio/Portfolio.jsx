import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import banquet from "../../img/banquet.png";
import MusicApp from "../../img/musicapp.png";
import chatapp from "../../img/chatapp.png";
import netflix from "../../img/netflix.png";
import housing from "../../img/housing.png";
import ultron from "../../img/ultron.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>My Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://decentralised-election.netlify.app/">
          <img src={Sidebar} alt="" />
          </a>
          </SwiperSlide>
        <SwiperSlide>
          <a href="https://path-visualizer-bykhush.netlify.app/">
          <img src={Ecommerce} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="http://stackduo-podcasts.s3-website.ap-south-1.amazonaws.com/">
          <img src={MusicApp} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://shopping-store-yf0a.onrender.com/">
          <img src={HOC} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://ritiriwazhall.com/">
          <img src={banquet} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://khushal-chat-app.onrender.com/">
          <img src={chatapp} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://netflix-clone-ten-ashy.vercel.app/">
          <img src={netflix} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://housing-nextjs.vercel.app/">
          <img src={housing} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://ultronfinancials.com/">
          <img src={ultron} alt="" />
          </a>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Portfolio;
