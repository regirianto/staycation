import moment from "moment";
import NumberFormat from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../atom/Button";
import InputDate from "../../atom/Form/InputDate";
import Number from "../../atom/Form/InputNumber";
import { useRouter } from "next/router";

const FormBook = (props) => {
  const { night, price, total, id } = props;
  const dispatch = useDispatch();
  const router = useRouter();
  const { data } = useSelector((state) => state.dataReducer);
  const startDate = moment(data[0].startDate).format("YYYY/MM/DD");
  const endDate = moment(data[0].endDate).format("YYYY/MM/DD");

  const updateDataBook = (name, value) => {
    dispatch({
      type: "BOOKING_CHECKOUT",
      name,
      value,
    });
  };

  return (
    <div className="col-lg-6">
      <div className="card p-5 border border-info border-1 rounded-3">
        <h3 className="mb-3">Start Booking</h3>
        <h3>
          <span className="text-success fs-3 me-2">
            <NumberFormat
              displayType="text"
              decimalSeparator="."
              thousandSeparator=","
              prefix="$ "
              value={price}
            />
          </span>
          per night
        </h3>
        <div className="row d-flex flex-column mt-1 align-items-center justify-content-center">
          <div className="col-md mb-2">
            <p className="text-start  my-1">How long you will stay?</p>
            <Number />
          </div>
          <div className="col-md mb-3">
            <p className="text-start my-1">Pick a Date</p>
            <InputDate />
            <p className="mt-3">
              <span className="text-info fw-light">You will pay </span>
              {
                <NumberFormat
                  displayType="text"
                  decimalSeparator="."
                  thousandSeparator=","
                  prefix="$ "
                  suffix=" USD"
                  value={total}
                />
              }
              <span className="text-info fw-light mx-1">for</span>
              {night} night
            </p>
          </div>
        </div>
        <div className="col-md">
          <Button
            title="Continue to Book"
            addClassName="w-100"
            shadow
            onClick={() => {
              updateDataBook("duration", night);
              updateDataBook("bookingStartDate", startDate);
              updateDataBook("bookingEndDate", endDate);
              router.push(`/checkout/${id}`);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FormBook;
