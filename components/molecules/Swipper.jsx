import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper } from "swiper/react";

const Swipper = ({ children }) => {
  return (
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
      {children}
    </Swiper>
  );
};

export default Swipper;
