import Image from "next/image";
import CheckoutDetailForm from "../../components/organisms/Checkout/CheckoutDetail/CheckoutDetailForm";
import CheckoutDetailPlace from "../../components/organisms/Checkout/CheckoutDetail/CheckoutDetailPlace";
import Button from "../../components/atom/Button";
import { useState } from "react";

const index = () => {
  const [submit, setsubmit] = useState(true);
  return (
    <>
      <div className="img-stepper text-center mb-5">
        <Image src="/img/stepper1.svg" width={280} height={60} alt="stepper" />
      </div>
      <div className="title text-center">
        <h4>Booking Information</h4>
        <p className="text-info fw-light">
          Please fill up the blank fields below
        </p>
      </div>
      <div className="book-form row my-4 d-flex justify-content-center ">
        <CheckoutDetailPlace />
        <CheckoutDetailForm />
      </div>
      <div className="d-flex justify-content-center align-items-center my-5">
        <div className="row d-flex flex-column mb-5">
          <div className="col-md">
            {submit && (
              <Button
                title="Continue To Book"
                addClassName="w-100 mb-3"
                link="/checkout/checkout-payment"
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

export default index;
