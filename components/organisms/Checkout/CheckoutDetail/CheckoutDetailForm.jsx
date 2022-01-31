import Input from "../../../atom/Form/Input";

const CheckoutDetailForm = () => {
  return (
    <div className="col-lg-4 book-form">
      <Input label="First Name" name="firstname" type="text" />
      <Input label="Last Name" name="lastname" type="text" />
      <Input label="Email Address" name="email" type="email" />
      <Input label="Phone Number" name="phonenumber" type="text" />
    </div>
  );
};

export default CheckoutDetailForm;
