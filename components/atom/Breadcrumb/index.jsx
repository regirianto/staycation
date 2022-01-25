import Link from "next/link";
import React from "react";

const Breadcrumb = () => {
  return (
    <nav aria-label="breadcrumb ">
      <ol className="breadcrumb user-select-none">
        <li className="breadcrumb-item ">
          <Link href="/">
            <a className="text-decoration-none" style={{ color: "#b0b0b0" }}>
              Home
            </a>
          </Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          House Details
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
