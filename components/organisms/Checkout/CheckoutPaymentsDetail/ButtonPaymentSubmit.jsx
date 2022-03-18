import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { checkoutBook } from "../../../../services/booking";
import Button from "../../../atom/Button";

const ButtonPaymentSubmit = (props) => {
  const { bookingData } = props;
  const { itemID } = useSelector((state) => state.itemReducer);
  const [loading, setLoading] = useState(false);
  const {
    image,
    accountHolder,
    bankFrom,
    bookingEndDate,
    bookingStartDate,
    duration,
    email,
    firstname,
    lastname,
    phoneNumber,
  } = bookingData;

  const router = useRouter();
  const bookingSubmit = async () => {
    const data = new FormData();
    data.append("accountHolder", accountHolder);
    data.append("image", image);
    data.append("bankFrom", bankFrom);
    data.append("bookingEndDate", bookingEndDate);
    data.append("bookingStartDate", bookingStartDate);
    data.append("email", email);
    data.append("firstname", firstname);
    data.append("lastname", lastname);
    data.append("item", itemID._id);
    data.append("duration", duration);
    data.append("phoneNumber", phoneNumber);
    try {
      setLoading(true);
      const response = await checkoutBook(data);
      if (response.error) {
        if (!Array.isArray(response.message)) {
          toast.error(response.message);
        } else {
          response.message.map((msg) => {
            toast.error(msg);
          });
        }
      } else {
        toast.success(response.message);
        setLoading(false);
        return router.replace("/checkout/checkout-complete");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center my-5">
      <div className="row d-flex flex-column mb-5">
        <div className="col-md">
          {image && accountHolder && bankFrom ? (
            <Button
              title="Continue To Book"
              addClassName={`w-100 mb-3 ${loading && "disabled"}`}
              onClick={() => bookingSubmit()}
              shadow
            />
          ) : (
            ""
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
  );
};

export default ButtonPaymentSubmit;
