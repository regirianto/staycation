import Image from "next/image";
import Link from "next/link";

const FeturedCategory = (props) => {
  const { img, place, city, country, href } = props;
  return (
    <div className="col-md mb-5 px-2">
      <div className="imgWrapper">
        <Link href={href}>
          <a>
            <Image
              src={img}
              width={263}
              height={180}
              alt={place}
              className="d-inline-block rounded rounded-lg img-thumb"
            />
          </a>
        </Link>
      </div>
      <div className="info">
        <p className="place">{place}</p>
        <p className="loc">
          {city},{country}
        </p>
      </div>
    </div>
  );
};

export default FeturedCategory;
