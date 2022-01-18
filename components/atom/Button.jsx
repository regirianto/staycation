import React from "react";

const Button = (props) => {
  const { title, ...nativeProps } = props;
  return (
    <button className="btn btn-primary px-5 py-2" {...nativeProps}>
      {title}
    </button>
  );
};

export default Button;
