import { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../../../atom/Form/Input";

const ChekoutPaymentForm = (props) => {
  const { accountHolder, bankFrom } = props;
  const dispatch = useDispatch();
  const updateDataBook = (name, value) => {
    dispatch({
      type: "BOOKING_CHECKOUT",
      name,
      value,
    });
  };

  return (
    <div className="col-lg-4  book-form">
      <Input
        label="Upload Proof of Payment"
        name="image"
        type="file"
        accept="image/*"
        onChange={(e) => updateDataBook(e.target.name, e.target.files[0])}
      />
      <Input
        label="Bank From"
        name="bankFrom"
        type="text"
        value={bankFrom}
        onChange={(e) => updateDataBook(e.target.name, e.target.value)}
      />
      <Input
        label="Bank Account Owner's Name"
        name="accountHolder"
        type="text"
        value={accountHolder}
        onChange={(e) => updateDataBook(e.target.name, e.target.value)}
      />
    </div>
  );
};

export default ChekoutPaymentForm;
