import Input from "../../../atom/Form/Input";

const ChekoutPaymentForm = () => {
  return (
    <div className="col-lg-4  book-form">
      <Input label="Upload Proof of Payment" name="Bank" type="file" />
      <Input label="Payment Methode" name="Bank" type="text" />
      <Input label="Bank Account Owner's Name" name="nama" type="text" />
    </div>
  );
};

export default ChekoutPaymentForm;
