import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <a className="navbar-brand fs-4">
        <span className="text-primary">Stay</span>cation.
      </a>
    </Link>
  );
};

export default Logo;
