import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';


const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('review.json')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  return (
    <>
      {/* title */}
      <div className="md:w-4/12 mx-auto text-center my-8">
        <p className="text-red-600 mb-2">TESTIMONIALS</p>
        <h3 className="text-2xl uppercase">What People Say About Our Services</h3>
      </div>

      <div className="py-10 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper">
            {reviews.map(review => (
              <SwiperSlide key={review._id}>
                <div className="bg-white rounded-lg shadow p-6 border lg:flex-col h-[400px]">
                  <div className="relative overflow-y-auto">
                    <img src={review.img} alt="Review" className="mx-auto w-24 h-24 rounded-full mb-7 z-10" />
                    <div className="pl-4">
                      <span className="flex items-center justify-center">
                        <FaQuoteLeft className="text-red-500 text-[35px] mb-2" />
                      </span>

                      <p className="text-gray-700 mb-4">{review.details}</p>
                      <h3 className="text-lg font-semibold">{review.name}</h3>
                      <p className="text-gray-700 mb-4">{review.position}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>

  );
};

export default Testimonials;
