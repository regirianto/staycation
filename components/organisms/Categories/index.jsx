import { SwiperSlide } from "swiper/react";
import FeturedCategory from "../../molecules/FeturedCategory";
import Swipper from "../../molecules/Swipper";

const CategoriesPropertie = (props) => {
  const { categoriesProperties } = props;
  const urlImg = process.env.NEXT_PUBLIC_IMG_URL;

  return (
    <section className="backyard mt-5">
      {categoriesProperties.map((item) => {
        return (
          <div key={item._id}>
            <h2>{item.name}</h2>
            <div className="row mt-4">
              <Swipper>
                {item.items.map((hotel) => {
                  return (
                    <SwiperSlide key={hotel._id}>
                      <FeturedCategory
                        img={`${urlImg}/${hotel.image[0].imageUrl}`}
                        place={hotel.title}
                        city={hotel.city}
                        country={hotel.country}
                        href={`/properties/${hotel._id}`}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swipper>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default CategoriesPropertie;
