import Image from "next/image";
import Link from "next/link";
import ReactNumberFormat from "react-number-format";
import Style from "../../../styles/FeaturedImg.module.css";

const ImgThumbSm = (props) => {
  const { img = "/", city, price, place, href = "/" } = props;
  return (
    <div className={`${Style.featuredWrapperSm} `}>
      <Link href={href}>
        <a>
          <div className={`${Style.imgWrapperSm}`}>
            <Image
              src={img}
              alt=""
              width={320}
              height={215}
              layout="fixed"
              objectFit="cover"
              className={`rounded-3`}
            />
          </div>
          <div className={`${Style.price}`}>
            <p className={`${Style.hour} fw-bold`}>
              <ReactNumberFormat
                value={price}
                displayType="text"
                prefix="$"
                thousandSeparator
              />
              <span className="fw-light"> per night</span>
            </p>
          </div>
          <div className={`${Style.loc} text-white align-content-center `}>
            <p className={`${Style.place}`}>
              {place}

              <p className={`${Style.city}`}>{city}</p>
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ImgThumbSm;
