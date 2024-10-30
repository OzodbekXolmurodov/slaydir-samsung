import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "./Carusel.scss";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Carusel = () => {
  return (
    <>
      <div className="conteaner carusel">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="img"
              src="https://optim.tildacdn.pro/tild6330-3263-4032-a365-326366346164/-/format/webp/noroot.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="img"
              src="https://optim.tildacdn.pro/tild6330-3263-4032-a365-326366346164/-/format/webp/noroot.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="img"
              src="https://optim.tildacdn.pro/tild6330-3263-4032-a365-326366346164/-/format/webp/noroot.png"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Carusel;
