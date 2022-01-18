import Image from "next/image";
import Button from "../../atom/Button";

const Testimonial = () => {
  return (
    <div className="row  my-5">
      <div className="col-md-4">
        <Image
          src="/img/testimonial-landingpages.jpg"
          width={405}
          height={541}
          alt=""
          className={`testimonialImg`}
        />
      </div>
      <div className="col-md-8 d-flex my-auto ">
        <div className="row d-flex flex-column ">
          <div className="col-md ">
            <h3 className="mb-5">Happy Family</h3>
            <Image src="/icon/ic_star.png" width={36} height={36} />
            <Image src="/icon/ic_star.png" width={36} height={36} />
            <Image src="/icon/ic_star.png" width={36} height={36} />
            <Image src="/icon/ic_star.png" width={36} height={36} />
            <Image src="/icon/ic_star.png" width={36} height={36} />
            <h4>
              What a great trip with my family and I should try again next time
              soon ...
            </h4>
            <p className="fw-light">Angga, Product Designer</p>
          </div>
          <div className="col-md mt-5">
            <Button title="Read Their Story" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
