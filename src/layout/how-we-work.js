import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { Autoplay } from "swiper";
// import { CMS_URL } from "api/cms";

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
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={({ activeIndex }) => setActive(activeIndex)}
        onSwiper={(swip) => setSwiper(swip)}
        style={{ maxWidth: "100vw", padding: "0 30px" }}
        autoplay={{ delay: 4000 }}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 4,
          },
        }}
      >
        {data.map((item, i) => (
          <SwiperSlide
            key={i}
            onMouseEnter={() => swiper.autoplay.stop()}
            onMouseLeave={() => swiper.autoplay.start()}
          >
            <div
              className={`flex flex-col  items-center relative border shadow rounded py-10 sm:px-10 px-5 mt-10 max-w-[300px] min-h-[550px] ${
                i > 0 && "ml-10"
              }`}
            >
              <div className="absolute top-4 left-4 bg-[#00897B] text-white w-[60px] h-[60px] text-xl font-bold flex items-center justify-center rounded-full">
                <p>0{i + 1}</p>
              </div>

              {item?.sub_heading === "Reduce and Rethink Design" && (
                <img
                  src={`/assets/how-it-works/rethink.png`}
                  alt=""
                  className="w-[300px]"
                />
              )}
              {item?.sub_heading === "Reuse" && (
                <img
                  src={`/assets/how-it-works/reuse.png`}
                  alt=""
                  className="w-[300px]"
                />
              )}
              {item?.sub_heading === "Renew" && (
                <img
                  src={`/assets/how-it-works/renew.png`}
                  alt=""
                  className="w-[300px]"
                />
              )}
              {item?.sub_heading === "Recyle" && (
                <img
                  src={`/assets/how-it-works/recyle.png`}
                  alt=""
                  className="w-[300px]"
                />
              )}
              {item?.sub_heading === "Reverse Logistics" && (
                <img
                  src={`/assets/how-it-works/logistics.png`}
                  alt=""
                  className="w-[300px]"
                />
              )}

              <div className="text-center ml-0">
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
