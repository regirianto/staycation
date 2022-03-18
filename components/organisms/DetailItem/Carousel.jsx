import Image from "next/image";

const Carousel = (props) => {
  const { image } = props;
  const IMG_URL = process.env.NEXT_PUBLIC_IMG_URL;

  return (
    <div
      id="carouselExampleControls"
      className="carousel slide mb-5"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {image.map((img, i) => {
          return (
            <div
              className={`carousel-item ${i == 0 && "active"}`}
              style={{ width: "100%", height: "500px" }}
              key={img._id}
            >
              <Image
                src={`${IMG_URL}/${img.imageUrl}`}
                className="d-block w-100"
                alt="image-items"
                layout="fill"
                objectFit="contain"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden p-5">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
