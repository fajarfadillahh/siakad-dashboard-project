import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, FreeMode, Mousewheel } from "swiper";

// import swiper css
import "swiper/css";
import "swiper/css/free-mode";

// import components
import SwiperCard from "./SwiperCard";

// import mock
import SWIPERLIST from "../../_mock/swipers";

export default function SwiperSlider() {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={26}
      keyboard={{
        enabled: true,
      }}
      freeMode={true}
      mousewheel={true}
      modules={[Keyboard, FreeMode, Mousewheel]}
    >
      {SWIPERLIST.map((user) => {
        return (
          <SwiperSlide key={user.id} className="max-w-[250px]">
            <SwiperCard user={user} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
