import Image from "next/image";
import style from "../../../styles/FeaturedImg.module.css";
const FeaturedImg = () => {
  return (
    <div className={`heroImg col-md-6`}>
      <Image
        src="/img/image 3.png"
        width={520}
        height={410.63}
        objectFit="fill"
        alt="banner"
      />
    </div>
  );
};

export default FeaturedImg;
