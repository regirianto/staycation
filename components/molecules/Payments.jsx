import Image from "next/image";
import React from "react";

const Payments = () => {
  return (
    <div className="payment-methode d-flex flex-wrap justify-content-evenly align-items-center">
      <div className="payments text-center">
        <Image src="/img/bca.svg" width={100} height={100} alt="payment" />
        <p>8012 1231 Regi Rianto</p>
      </div>
      <div className="payments text-center">
        <Image src="/img/mandiri.svg" width={100} height={100} alt="payment " />
        <p>8012 1231 Regi Rianto</p>
      </div>
      <div className="payments text-center">
        <Image src="/img/gopay.svg" width={100} height={100} alt="payment " />
        <p>0877712314 Regi Rianto</p>
      </div>
    </div>
  );
};

export default Payments;
