import Link from "next/link";
import React from "react";

const Button = (props) => {
  const { title, shadow, link, color, addClassName, ...nativeProps } = props;
  const className = `btn btn-${!color ? "primary" : color} px-5 py-2 ${
    shadow ? "shadow" : ""
  } ${addClassName}`;

  if (!link) {
    return (
      <button className={className} role="button" {...nativeProps}>
        {title}
      </button>
    );
  }
  return (
    <Link href={link}>
      <a className="m-auto">
        <button className={className} role="button" {...nativeProps}>
          {title}
        </button>
      </a>
    </Link>
  );
};

export default Button;
