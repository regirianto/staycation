import moment from "moment";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css filere
import { useDispatch, useSelector } from "react-redux";

const InputDate = () => {
  const [isShow, setIsShow] = useState(false);
  const { data } = useSelector((state) => state.dataReducer);
  const dispatch = useDispatch();

  return (
    <>
      <div className="input-group" onClick={() => setIsShow(!isShow)}>
        <span
          className="input-group-text bg-secondary"
          role="button"
          onClick={() => setIsShow(!isShow)}
        >
          <i className="far fa-calendar-alt text-white"></i>
        </span>
        <input
          readOnly
          type="text"
          className="form-control text-center"
          disabled
          value={`${moment(data[0].startDate).format("DD MMM")} - ${moment(
            data[0].endDate
          ).format("DD MMM")}`}
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      {isShow && (
        <DateRange
          editableDateInputs={true}
          duration={1}
          onChange={(item) => {
            dispatch({
              type: "UPDATE_DATA_BOOKING",
              payload: [item.selection],
            });
          }}
          moveRangeOnFirstSelection={false}
          ranges={data}
          minDate={new Date()}
          className="tes1 mt-2"
        />
      )}
    </>
  );
};

export default InputDate;
