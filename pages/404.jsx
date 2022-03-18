import Image from "next/image";
import React from "react";
import Link from "next/link";
const notFound = () => {
  return (
    <div className="text-center vh-100 ">
      <div className="illustartion">
        <Image src="/img/404.svg" width={450} height={400} />
        <h5>Oops Page Not Found!</h5>
      </div>
      <Link href="/">
        <a className="btn btn-primary px-3 py-2 mt-3" alt="back">
          Back to Home
        </a>
      </Link>
    </div>
  );
};

export default notFound;
