import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { BsStarHalf, BsStarFill } from "react-icons/bs";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="container mx-auto">
      {/* title */}
      <div className="md:w-4/12 mx-auto text-center my-8">
        <p className="text-red-600 mb-2">REVIEWS</p>
        <h3 className="text-2xl uppercase">
          What People Say About Our Services
        </h3>
      </div>
      {/* slider  */}
      <div>
        <div className="max-w-7xl my-12 mx-auto px-4 sm:px-6 lg:px-8">
          <Swiper
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={false}
            modules={[Navigation, Autoplay, Pagination]}
            className="mySwiper"
          >
            {reviews?.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="flex items-center justify-between border-2">
                  <div className="flex-1 pl-3 md:pl-12 md:py-24">
                    <p className="text-gray-500 max-w-[400px]">
                      "{review.details}"
                    </p>
                    <p className="flex gap-1 my-2 sm:my-4 text-pink-600">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarHalf />
                    </p>
                    <h5 className="font-semibold">{review.name}</h5>
                  </div>
                  <div className="flex-1 clip-path-reviews pl-3 md:pl-12 py-3 md:py-12 lg:py-24">
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-1 sm:gap-3 text-white md:ml-16 xl:ml-24">
                      <div className="">
                        <img
                          className="rounded-full w-24 sm:w-32  h-24 sm:h-32 my-2 mt-4"
                          src={review.img}
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold">
                          Junishi Tsuneoka
                        </h2>
                        <p>Marketing Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
