import ReactNumberFormat from "react-number-format";

const CheckoutDetailPaymentPrice = (props) => {
  const { subTotal } = props;
  return (
    <div className="detail-price">
      <h5 className="mb-4">Payment Tranfer</h5>
      <p>
        Tax : <span>10%</span>
      </p>
      <p>
        Sub Total :{" "}
        <span>
          <ReactNumberFormat
            displayType="text"
            prefix="$ "
            value={subTotal}
            thousandSeparator
            suffix=" USD"
          />
        </span>
      </p>
      <p className="fw-bold">
        Total :{" "}
        <span>
          <ReactNumberFormat
            displayType="text"
            prefix="$ "
            value={subTotal + (subTotal * 10) / 100}
            thousandSeparator
            suffix=" USD"
          />
        </span>
      </p>
    </div>
  );
};

export default CheckoutDetailPaymentPrice;
