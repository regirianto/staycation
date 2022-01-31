import Image from "next/image";
const checkoutComplete = () => {
  return (
    <div className="text-center vh-100">
      <div className="img-stepper mb-2">
        <Image src="/img/stepper3.svg" width={280} height={60} alt="stepper" />
      </div>
      <h1 className="my-2">Yay! Completed</h1>
      <Image
        src="/img/complete-checkout.svg"
        width={300}
        height={300}
        alt="complete"
      />
      <p className="text-info my-2">
        We will inform you via email later once the transaction has been
        accepted
      </p>
      <a href="/" className="btn btn-primary px-4 py-2 mt-2">
        Back to Home
      </a>
    </div>
  );
};

export default checkoutComplete;
