const HeaderPaymentDetail = (props) => {
  const { title, subTitle } = props;
  return (
    <div className="title text-center">
      <h4>{title}</h4>
      <p className="text-info fw-light">{subTitle}</p>
    </div>
  );
};

export default HeaderPaymentDetail;
