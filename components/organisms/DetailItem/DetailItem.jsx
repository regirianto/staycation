import React, { useState } from "react";
import Image from "next/image";
import parse from "html-react-parser";
const DetailItem = (props) => {
  const { item } = props;
  const URL_IMG = process.env.NEXT_PUBLIC_IMG_URL;
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="col-lg-6">
      <h5 className="fs-5">About the Place</h5>
      <div className="facilties d-flex">
        <ul className="d-flex list-unstyled align-items-center justify-content-center">
          {item.featured.map((feature) => {
            return (
              <li className="me-4" key={feature._id}>
                <Image
                  src={`${URL_IMG}/${feature.image}`}
                  width={35}
                  height={35}
                  objectFit="contain"
                  alt={feature.name}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <p className="lh-lg">
        {!readMore
          ? parse(item.desc.substring(0, 300) + " ...")
          : parse(item.desc)}
        <span
          className="fw-bold"
          onClick={() => setReadMore(!readMore)}
          role="button"
        >
          {!readMore ? "Read More" : "Read Less"}
        </span>
      </p>
    </div>
  );
};

export default DetailItem;
