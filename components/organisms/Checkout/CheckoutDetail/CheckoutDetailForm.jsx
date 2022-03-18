import { useDispatch } from "react-redux";
import Input from "../../../atom/Form/Input";

const CheckoutDetailForm = (props) => {
  const { firstname, lastname, email, phoneNumber } = props;
  const dispatch = useDispatch();
  const updateDataBook = (name, value) => {
    dispatch({
      type: "BOOKING_CHECKOUT",
      name,
      value,
    });
  };
  return (
    <div className="col-lg-4 book-form">
      <Input
        label="First Name"
        name="firstname"
        type="text"
        onChange={(e) => {
          updateDataBook(e.target.name, e.target.value);
        }}
        value={firstname}
      />
      <Input
        label="Last Name"
        name="lastname"
        type="text"
        onChange={(e) => {
          updateDataBook(e.target.name, e.target.value);
        }}
        value={lastname}
      />
      <Input
        label="Email Address"
        name="email"
        type="email"
        onChange={(e) => {
          updateDataBook(e.target.name, e.target.value);
        }}
        value={email}
      />
      <Input
        label="Phone Number"
        name="phoneNumber"
        type="text"
        onChange={(e) => {
          updateDataBook(e.target.name, e.target.value);
        }}
        value={phoneNumber}
      />
    </div>
  );
};

export default CheckoutDetailForm;
