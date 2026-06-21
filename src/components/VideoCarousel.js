import React, { useRef,useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import VideoPlayer from "./Videoplayer1";

const VideoCarousel = ({ videos }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
const handleVideoEnded = () => {
    if (activeIndex < videos.length - 1) {
      swiperRef.current?.slideNext();
    }
  };
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      slidesPerView={1}
      spaceBetween={20}
      onSwiper={(swiper) => {
    swiperRef.current = swiper;
  }}
      onSlideChange={(swiper) =>
        setActiveIndex(swiper.activeIndex)
      }
      style={{
        width: "95%",
      }}
    >
      {videos.map((video, index) => (
        <SwiperSlide key={index}>
          <VideoPlayer
            url={video}
            playing={activeIndex === index}
            onEnded={handleVideoEnded}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default VideoCarousel;