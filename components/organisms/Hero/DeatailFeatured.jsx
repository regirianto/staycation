import Button from "../../atom/Button";
import Reached from "./Reached";

const DeatailFeatured = () => {
  return (
    <div className="col-lg-6">
      <h1 className="lh-base fw-bolder">
        Forget Busy Work,
        <br />
        Start Next Vacation
      </h1>
      <div className="row flex-column mt-3">
        <div className="col-md-7">
          <p className="text-muted fs-6 fw-lighter lh-lg">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
        </div>
        <div className="col-md-5 flex-row my-3 ">
          <Button title="Show Me Now" />
        </div>
        <div className="row mt-5">
          <Reached icon="/icon/icon1.png" count="80409" info="travelers" />
          <Reached icon="/icon/icon2.png" count="862" info="treasure" />
          <Reached icon="/icon/icon3.png" count="1492" info="cities" />
        </div>
      </div>
    </div>
  );
};

export default DeatailFeatured;
