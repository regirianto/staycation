import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import FeturedCategory from "../../molecules/feturedCategory";

const BackyardCategories = () => {
  return (
    <section className="backyard mt-5">
      <h2>Houses with beauty backyard</h2>
      <div className="row mt-4">
        <Swiper
          modules={[Pagination, A11y, Autoplay, Scrollbar, Navigation]}
          spaceBetween={4}
          slidesPerView={2}
          autoplay={true}
          pagination={{ clickable: true, dynamicBullets: true }}
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
              img="/img/image-category-1.jpg"
              place="Anggana"
              loc="Bogor,Indonesia"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FeturedCategory
              img="/img/image-category-2.jpg"
              place="Anggana"
              loc="Bogor,Indonesia"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FeturedCategory
              img="/img/image-category-3.jpg"
              place="Anggana"
              loc="Bogor,Indonesia"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FeturedCategory
              img="/img/image-category-4.jpg"
              place="Anggana"
              loc="Bogor,Indonesia"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FeturedCategory
              img="/img/image-category-5.jpg"
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

export default BackyardCategories;
