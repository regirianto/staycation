import { useDispatch, useSelector } from "react-redux";
const Number = () => {
  const { data } = useSelector((state) => state);
  const dispact = useDispatch();

  return (
    <div className="input-group user-select-none">
      <span
        className={`input-group-text fw-bold text-white fs-5 ${
          data[0].perNight() > 1 ? "bg-danger " : ""
        } `}
        onClick={() => {
          if (data[0].perNight() > 1) {
            dispact({ type: "DECREMENT_DAY" });
          }
        }}
        role="button"
      >
        -
      </span>
      <input
        type="text"
        className="form-control text-center px-5 py-2"
        value={`${data[0].perNight()} night`}
        readOnly
      />
      <span
        className="input-group-text bg-success text-white fs-5 fw-bold"
        onClick={() => {
          dispact({ type: "INCREMENT_DAY" });
        }}
        role="button"
      >
        +
      </span>
    </div>
  );
};

export default Number;
