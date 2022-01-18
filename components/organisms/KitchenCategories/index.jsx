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

const KitchenCategories = () => {
  return (
    <section className="backyard mt-5">
      <h2>Apartments with kitchen set</h2>
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
              img="/img/image-category-10.jpg"
              place="Anggana"
              loc="Bogor,Indonesia"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FeturedCategory
              img="/img/image-category-12.jpg"
              place="Anggana"
              loc="Bogor,Indonesia"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FeturedCategory
              img="/img/image-category-1.jpg"
              place="Anggana"
              loc="Bogor,Indonesia"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FeturedCategory
              img="/img/image-category-12.jpg"
              place="Anggana"
              loc="Bogor,Indonesia"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FeturedCategory
              img="/img/image-category-11.jpg"
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

export default KitchenCategories;
