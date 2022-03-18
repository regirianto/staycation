import Image from "next/image";
import { useSelector } from "react-redux";
import Payments from "../../../molecules/Payments";
import ButtonPaymentSubmit from "./ButtonPaymentSubmit";
import CheckoutDetailPaymentPrice from "./CheckoutDetailPaymentPrice";
import ChekoutPaymentForm from "./ChekoutPaymentForm";
import HeaderPaymentDetail from "./HeaderPaymentDetail";

const CheckoutPayment = () => {
  const { bookingData } = useSelector((state) => state.bookReducer);
  const { itemID } = useSelector((state) => state.itemReducer);

  const subTotal = itemID.price * bookingData.duration;
  return (
    <>
      <div className="img-stepper text-center mb-5">
        <Image src="/img/stepper2.svg" width={280} height={60} alt="stepper" />
      </div>
      <HeaderPaymentDetail
        title={"Payment"}
        subTitle={"Kindly follow the instructions below"}
      />
      <div className="book-form row my-5 d-flex justify-content-center ">
        <div className="col-lg-6">
          <CheckoutDetailPaymentPrice subTotal={subTotal} />
          <Payments />
        </div>
        <ChekoutPaymentForm
          accountHolder={bookingData.accountHolder}
          bankFrom={bookingData.bankFrom}
        />
      </div>
      <ButtonPaymentSubmit bookingData={bookingData} />
    </>
  );
};

export default CheckoutPayment;
