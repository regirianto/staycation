import ImgThumbLg from "./ImgThumbLg";
import ImgThumbSm from "./ImgThumbSm";

const MostPicked = () => {
  return (
    <section className="most-picked my-5 ">
      <h2>Most Picked</h2>
      <div className={`row mt-4 `}>
        <ImgThumbLg />
        <div
          className={`col-md-8 d-flex flex-wrap flex-fill align-content-between justify-content-around mt-1 `}
        >
          <ImgThumbSm
            img="/img/image-mostpicked-2.jpg"
            price={2}
            place="Ocean Land"
            city="Bandung Indonesia"
          />
          <ImgThumbSm
            img="/img/image-mostpicked-3.jpg"
            price={2}
            place="Ocean Land"
            city="Bandung Indonesia"
          />
          <ImgThumbSm
            img="/img/image-mostpicked-4.jpg"
            price={2}
            place="Ocean Land"
            city="Bandung Indonesia"
          />
          <ImgThumbSm
            img="/img/image-mostpicked-5.jpg"
            price={2}
            place="Ocean Land"
            city="Bandung Indonesia"
          />
        </div>
      </div>
    </section>
  );
};

export default MostPicked;
