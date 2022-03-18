import axios from "axios";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { getBankPayments } from "../../services/booking";

const Payments = (props) => {
  const IMG_URL = process.env.NEXT_PUBLIC_IMG_URL;
  const [banks, setBanks] = useState([
    {
      _id: "",
      name: "",
      bankAccountNumber: "",
      bankAccountName: "",
      image: "",
    },
  ]);
  const getBank = useCallback(async () => {
    const response = await getBankPayments();
    const data = response.data;
    setBanks(data);
  }, []);

  useEffect(() => {
    getBank();
  }, []);
  return (
    <div className="payment-methode d-flex flex-wrap justify-content-evenly align-items-center">
      {banks.map((bank) => {
        return (
          <div className="payments text-center" key={bank._id}>
            <Image
              src={`${IMG_URL}/${bank.image}`}
              width={100}
              height={100}
              alt="payment"
            />
            <p>{`${bank.bankAccountNumber} ${bank.bankAccountName}`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Payments;
