import { useSelector } from "react-redux";
import Image from "next/image";
import Carousel from "../../components/molecules/Carousel";
import Number from "../../components/atom/Form/InputNumber";
import InputDate from "../../components/atom/Form/InputDate";
import Button from "../../components/atom/Button";
import Breadcrumb from "../../components/atom/Breadcrumb";
import Testimonial from "../../components/organisms/Testimonial";

const index = () => {
  const { data } = useSelector((state) => state);
  return (
    <div className="container">
      <section className="details">
        <div className="place text-center">
          <Breadcrumb />
          <h2 className="">Village Egg</h2>
          <p className="text-secondary fw-light fs-6">Bogor Indonesia</p>
        </div>
        <Carousel />
        <div className="row d-flex my-5">
          <div className="col-lg-6">
            <h5 className="fs-5">About the Place</h5>
            <div className="facilties d-flex">
              <ul className="d-flex list-unstyled align-items-center justify-content-center">
                <li className="me-4">
                  <Image
                    src="/icon/icon-airconditioner.svg"
                    width={35}
                    height={35}
                    objectFit="contain"
                  />
                </li>
                <li className="me-4">
                  <Image
                    src="/icon/icon-bathroom.svg"
                    width={35}
                    height={35}
                    objectFit="contain"
                  />
                </li>
                <li className="me-4">
                  <Image
                    src="/icon/icon-bedroom.svg"
                    width={35}
                    height={35}
                    objectFit="contain"
                  />
                </li>
                <li className="me-4">
                  <Image
                    src="/icon/icon-diningroom.svg"
                    width={35}
                    height={35}
                    objectFit="contain"
                  />
                </li>
              </ul>
            </div>
            <p className="lh-lg">
              Design is a plan or specification for the construction of an
              object or system or for the implementation of an activity or
              process, or the result of that plan or specification in the form
              of a prototype, product or process. The national agency for
              design: enabling Singapore to use design for economic growth and
              to make lives better. Such trends saw the demise of the
              soul-infused techno that typified the original Detroit sound.
              Robert Hood has noted that he and Daniel Bell both realized
              something was missing from techno in the post-rave era. Minimal
              techno is a minimalist subgenre of techno music. It is
              characterized by a stripped-down aesthetic that exploits the use
              of repetition and understated development. Minimal techno is
              thought to have been originally developed in the early 1990s by
              Detroit-based producers Robert Hood and Daniel Bell.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="card p-5 border border-info border-1 rounded-3">
              <h5 className="mb-3">Start Booking</h5>
              <h4>
                <span className="text-success">$280 </span>per night
              </h4>
              <div className="row d-flex flex-column mt-1  align-items-center justify-content-center">
                <div className="col-md mb-2">
                  <p className="text-start  my-1">How long you will stay?</p>
                  <Number />
                </div>
                <div className="col-md mb-3">
                  <p className="text-start my-1">Pick a Date</p>
                  <InputDate />
                </div>
              </div>
              <p>
                <span className="text-info fw-light">You will pay </span>
                $480 USD <span className="text-info fw-light">per</span>{" "}
                {data[0].perNight()} night
              </p>
              <Button title="Continue to Book" shadow />
            </div>
          </div>
          <Testimonial />
        </div>
      </section>
    </div>
  );
};

export default index;
