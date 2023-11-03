import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./slider.scss";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import slides from "./slider.json";

const Slider = () => {
  const pagination = {
    clickable: true,
  };
  return (
    <Swiper
      navigation={true}
      effect={"fade"}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={pagination}
      modules={[Navigation, Pagination, EffectFade, Autoplay]}
      className="slider"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="content">
            <h2>{slide.title}</h2>
            <p>{slide.desc}</p>
          </div>
          <img
            src={require(`../../../assets/img/slider/${slide.image}`)}
            alt={slide.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
