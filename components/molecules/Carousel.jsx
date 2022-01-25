import Image from "next/image";

const Carousel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide mb-5"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div
          className="carousel-item active"
          style={{ width: "100%", height: "500px" }}
        >
          <Image
            src="/img/image-mostpicked-4.jpg"
            className="d-block w-100"
            alt="..."
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div
          className="carousel-item"
          style={{ width: "100%", height: "500px" }}
        >
          <Image
            src="/img/image-mostpicked-2.jpg"
            className="d-block w-100"
            alt="..."
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div
          className="carousel-item"
          style={{ width: "100%", height: "500px" }}
        >
          <Image
            src="/img/image-mostpicked-3.jpg"
            className="d-block "
            alt="..."
            layout="fill"
            objectFit="contain"
          />
        </div>
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
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
