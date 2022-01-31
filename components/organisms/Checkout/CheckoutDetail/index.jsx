import Image from "next/image";
import ReactNumberFormat from "react-number-format";

const CheckoutDetail = (props) => {
  const { src, price, night, place, city, country } = props;
  return (
    <>
      <Image src={src} width={450} height={280} alt="'booking img" />
      <div className="info-book-detail row d-flex ">
        <div className="detail-place col-md-5 mb-1">
          <p className="m-0 fs-5">{place}</p>
          <p className="text-info fw-light my-0 fs-6">
            {city},{country}
          </p>
        </div>
        <div className="detail-price col-md-6">
          <p>
            <ReactNumberFormat
              displayType="text"
              prefix="$ "
              value={price}
              thousandSeparator
            />{" "}
            USD <span className="text-info">per</span> {night} night
          </p>
        </div>
      </div>
    </>
  );
};

export default CheckoutDetail;
