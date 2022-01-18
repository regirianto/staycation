import Image from "next/image";
import Link from "next/link";

const FeturedCategory = (props) => {
  const { img, place, loc } = props;
  return (
    <div className="col-md mb-5 px-1">
      <div className="imgWrapper">
        <Link href="/">
          <a>
            <Image
              src={img}
              width={263}
              height={180}
              alt=""
              className="d-inline-block"
            />
          </a>
        </Link>
      </div>
      <div className="info">
        <p className="place">{place}</p>
        <p className="loc">{loc}</p>
      </div>
    </div>
  );
};

export default FeturedCategory;
