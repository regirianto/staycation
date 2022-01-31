import Image from "next/image";
const FeaturedImg = () => {
  return (
    <div className={`heroImg col-lg-6`}>
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
