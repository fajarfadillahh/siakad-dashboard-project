import React from "react";

// import components & sections
import PageTitle from "../../../components/typography/PageTitle";
import SwiperSlider from "../../../sections/swiper/SwiperSlider";

export default function Swiper() {
  return (
    <>
      <PageTitle>Swiper</PageTitle>

      {/* swiper slider */}
      <div className="w-full">
        <SwiperSlider />
      </div>
    </>
  );
}
