import Image from "next/image";
import Style from "../../../styles/FeaturedImg.module.css";
const ImgThumbLg = () => {
  return (
    <div className="col-md-4 d-flex justify-content-center">
      <div className={`${Style.featuredWrapperLg}`}>
        <div className={`${Style.imgWrapperLg}`}>
          <Image
            src="/img/image-mostpicked-1.jpg"
            className="rounded-3"
            alt=""
            layout="fill"
            objectFit="contain"
          />
          <div className={`${Style.price}`}>
            <p className={`${Style.hour}`}>$3 per night</p>
          </div>
          <div className={`${Style.loc} text-white align-content-center`}>
            <p className={`${Style.place}`}>
              Ocean Land
              <br />
              <span className={`${Style.city}`}>Malang Indonesia</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgThumbLg;
