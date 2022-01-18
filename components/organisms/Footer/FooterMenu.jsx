import React from "react";

const FooterMenu = (props) => {
  const { title, link1, link2, link3, href1, href2, href3 } = props;
  return (
    <div className="col-md-4">
      <h5>{title}</h5>
      <p className="mb-2">
        <a
          className="text-decoration-none text-secondary fw-light"
          href={href1}
        >
          {link1}
        </a>
      </p>
      <p className="mb-2">
        <a
          className="text-decoration-none text-secondary fw-light"
          href={href2}
        >
          {link2}
        </a>
      </p>
      <p className="mb-2">
        <a
          className="text-decoration-none text-secondary fw-light"
          href={href3}
        >
          {link3}
        </a>
      </p>
    </div>
  );
};

export default FooterMenu;
