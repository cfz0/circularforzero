import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { Autoplay } from "swiper";
import { CMS_URL } from "api/cms";

// install Swiper modules
const HowWeWork = ({ data }) => {
  const [swiper, setSwiper] = useState({});
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center mt-24">
      <h1 className="text-4xl font-bold text-center">
        How CircularForZero Works?
      </h1>

      <Swiper
        slidesPerView={1.03}
        pagination={{ clickable: true }}
        onSlideChange={({ activeIndex }) => setActive(activeIndex)}
        onSwiper={(swip) => setSwiper(swip)}
        style={{ maxWidth: "100vw", padding: "0 30px" }}
        autoplay={{ delay: 4000 }}
        modules={[Autoplay]}
      >
        {data.map((item, i) => (
          <SwiperSlide
            key={i}
            onMouseEnter={() => swiper.autoplay.stop()}
            onMouseLeave={() => swiper.autoplay.start()}
          >
            <div
              className={`flex lg:flex-row flex-col justify-between items-center relative border shadow rounded py-10 sm:px-10 px-5 mt-10 ${
                i > 0 && "ml-10"
              }`}
            >
              <div className="absolute top-4 left-4 bg-[#00897B] text-white w-[60px] h-[60px] text-xl font-bold flex items-center justify-center rounded-full">
                <p>0{i + 1}</p>
              </div>

              <img
                src={`${CMS_URL}${item?.image?.data?.attributes?.url}`}
                alt=""
              />
              <div className="sm:ml-10 lg:text-left text-center ml-0">
                {/* <h3 className="font-bold text-primary text-lg lg:mt-0 mt-5">
                  {item?.sub_heading}
                </h3> */}
                <h1 className="text-3xl font-bold mb-5">{item?.sub_heading}</h1>
                <p>{item?.description}</p>
              </div>
              {i !== 0 && i === active && (
                <div
                  className="absolute top-1/2 transform-y-1/2 -left-6 bg-white shadow-2xl rounded-full w-[50px] h-[50px] flex items-center justify-center border cursor-pointer "
                  onClick={() => swiper.slidePrev()}
                >
                  <IoMdArrowDropleft
                    size={50}
                    className="mr-1 text-[#00897B] cursor-pointer"
                  />
                </div>
              )}

              {i !== data.length - 1 && i === active && (
                <div
                  className="absolute top-1/2 z-10 transform-y-1/2 -right-6 bg-white shadow-2xl rounded-full w-[50px] h-[50px] flex items-center justify-center border cursor-pointer "
                  onClick={() => swiper.slideNext()}
                >
                  <IoMdArrowDropright
                    size={50}
                    className="ml-1 text-[#00897B] cursor-pointer"
                  />
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HowWeWork;
