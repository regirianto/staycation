import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Breadcrumb = (props) => {
  const { currentPage, previousPage } = props;
  const router = useRouter();
  return (
    <nav aria-label="breadcrumb ">
      <ol className="breadcrumb user-select-none">
        <li className="breadcrumb-item ">
          <p
            className="text-decoration-none fw-light"
            role="button"
            onClick={() => router.back()}
          >
            {previousPage}
          </p>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {currentPage}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
