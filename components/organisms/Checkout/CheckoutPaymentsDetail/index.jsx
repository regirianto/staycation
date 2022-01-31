import Image from "next/image";
import { useState } from "react";
import Button from "../../../atom/Button";
import Payments from "../../../molecules/Payments";
import CheckoutDetailPaymentPrice from "./CheckoutDetailPaymentPrice";
import ChekoutPaymentForm from "./ChekoutPaymentForm";

const CheckoutPayment = () => {
  const [submit, setSubmit] = useState(true);
  return (
    <>
      <div className="img-stepper text-center mb-5">
        <Image src="/img/stepper2.svg" width={280} height={60} alt="stepper" />
      </div>
      <div className="title text-center">
        <h4>Payment</h4>
        <p className="text-info fw-light">
          Kindly follow the instructions below
        </p>
      </div>
      <div className="book-form row my-5 d-flex justify-content-center ">
        <div className="col-lg-6">
          <CheckoutDetailPaymentPrice subTotal={100} />
          <Payments />
        </div>
        <ChekoutPaymentForm />
      </div>
      <div className="d-flex justify-content-center align-items-center my-5">
        <div className="row d-flex flex-column mb-5">
          <div className="col-md">
            {submit && (
              <Button
                title="Continue To Book"
                addClassName="w-100 mb-3"
                link="/checkout/checkout-complete"
                shadow
              />
            )}
          </div>
          <div className="col-md">
            <Button
              title="Cancel"
              color="info"
              addClassName="w-100 text-white"
              link="/"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPayment;
