import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Button from "../../components/atom/Button";
import CheckoutDetailForm from "../../components/organisms/Checkout/CheckoutDetail/CheckoutDetailForm";
import CheckoutDetailPlace from "../../components/organisms/Checkout/CheckoutDetail/CheckoutDetailPlace";

const Index = () => {
  const { bookingData } = useSelector((state) => state.bookReducer);
  const { itemID } = useSelector((state) => state.itemReducer);
  const { firstname, lastname, email, phoneNumber } = bookingData;

  const router = useRouter();
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
        <CheckoutDetailForm
          firstname={firstname}
          lastname={lastname}
          email={email}
          phoneNumber={phoneNumber}
        />
      </div>
      <div className="d-flex justify-content-center align-items-center my-5">
        <div className="row d-flex flex-column mb-5">
          <div className="col-md">
            {firstname && lastname && email && phoneNumber ? (
              <Button
                title="Continue To Book"
                addClassName="w-100 mb-3"
                onClick={() => router.push("/checkout/checkout-payment")}
                shadow
              />
            ) : (
              <span />
            )}
          </div>
          <div className="col-md">
            <Button
              title="Cancel"
              color="info"
              addClassName="w-100 text-white"
              onClick={() => router.replace(`/properties/${itemID._id}`)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
