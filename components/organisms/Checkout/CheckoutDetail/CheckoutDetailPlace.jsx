import CheckoutDetail from ".";

const CheckoutDetailPlace = () => {
  return (
    <div className="col-lg-6 info-book overflow-hidden">
      <CheckoutDetail
        src="/img/img-featured-3.jpg"
        place="Valhala Village"
        city="Bandung"
        country="Indonesia"
        night={2}
        price={48000}
      />
    </div>
  );
};

export default CheckoutDetailPlace;
