import React from "react";
import FeturedCategory from "../../molecules/feturedCategory";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Autoplay, Pagination, Scrollbar } from "swiper";

const LivingRoomCategories = () => {
  return (
    <section className="living-room mt-5">
      <h2>Hotels with large living room</h2>
      <div className="row mt-4">
        <Swiper
          modules={[Pagination, A11y, Autoplay, Scrollbar]}
          spaceBetween={4}
          slidesPerView={2}
          autoplay={true}
          pagination={{ clickable: true }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 4,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <FeturedCategory
              img="/img/image-category-5.jpg"
              place="Anggana"
              loc="Bogor,Indonesia"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FeturedCategory
              img="/img/image-category-6.jpg"
              place="Anggana"
              loc="Bogor,Indonesia"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FeturedCategory
              img="/img/image-category-7.jpg"
              place="Anggana"
              loc="Bogor,Indonesia"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FeturedCategory
              img="/img/image-category-8.jpg"
              place="Anggana"
              loc="Bogor,Indonesia"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FeturedCategory
              img="/img/image-category-9.jpg"
              place="Anggana"
              loc="Bogor,Indonesia"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FeturedCategory
              img="/img/image-category-10.jpg"
              place="Anggana"
              loc="Bogor,Indonesia"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default LivingRoomCategories;
