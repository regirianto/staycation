import Link from "next/link";
import Image from "next/image";
import Style from "../../../styles/FeaturedImg.module.css";
import NumberFormat from "react-number-format";
const ImgThumbLg = (props) => {
  const { title, city, price, country, img, href } = props;
  return (
    <div className="col-md-4 d-flex justify-content-center">
      <div className={`${Style.featuredWrapperLg}`}>
        <Link href={href}>
          <a>
            <div className={`${Style.imgWrapperLg}`}>
              <Image
                src={img}
                className="rounded-3"
                alt={title}
                layout="fill"
                objectFit="cover"
              />
              <div className={`${Style.price}`}>
                <p className={`${Style.hour}`}>
                  <NumberFormat
                    displayType="text"
                    prefix="$"
                    thousandSeparator=","
                    decimalSeparator="."
                    value={price}
                    className="fw-bold me-1"
                  />
                  per night
                </p>
              </div>
              <div className={`${Style.loc} text-white align-content-center`}>
                <p className={`${Style.place}`}>
                  {title}
                  <br />
                  <span className={`${Style.city}`}>
                    {city} {country}
                  </span>
                </p>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ImgThumbLg;
