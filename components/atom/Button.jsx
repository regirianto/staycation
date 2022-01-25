import Link from "next/link";
import React from "react";

const Button = (props) => {
  const { title, shadow, link, ...nativeProps } = props;
  const className = `btn btn-primary px-5 py-2 ${shadow ? "shadow" : ""}`;

  if (!link) {
    return (
      <button className={className} {...nativeProps}>
        {title}
      </button>
    );
  }
  return (
    <Link href={link}>
      <a>
        <button className={className} {...nativeProps}>
          {title}
        </button>
      </a>
    </Link>
  );
};

export default Button;
