import CheckoutDetail from ".";
import { useSelector } from "react-redux";
const CheckoutDetailPlace = () => {
  const IMG_URL = process.env.NEXT_PUBLIC_IMG_URL;
  const { itemID } = useSelector((state) => state.itemReducer);
  const { bookingData } = useSelector((state) => state.bookReducer);
  const price = itemID.price;
  const duration = bookingData.duration;
  const total = price * duration;

  return (
    <div className="col-lg-6 info-book overflow-hidden">
      <CheckoutDetail
        src={`${IMG_URL}/${itemID.image[0].imageUrl}`}
        place={itemID.title}
        city={itemID.city}
        country={itemID.country}
        night={duration}
        price={total}
      />
    </div>
  );
};

export default CheckoutDetailPlace;
