import React from "react";

export default function SwiperCard({ user }) {
  return (
    <div className="group relative overflow-hidden">
      <div className="relative overflow-hidden rounded-md">
        <img
          src={user.imageUrl}
          alt="swiper image"
          className="z-10 h-[300px] w-full origin-center object-cover transition-all duration-300 group-hover:scale-110"
        />

        {/* overlay */}
        <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-black/90 to-gray-900/0" />
      </div>

      <div className="absolute bottom-6 left-6 z-10">
        <h1 className="font-bold capitalize text-white">{user.title}</h1>
      </div>
    </div>
  );
}
