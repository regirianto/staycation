import React from "react";

const Input = (props) => {
  const { label, type, name, ...rest } = props;
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control text-seccondary"
        id={name}
        aria-describedby="emailHelp"
        placeholder="Please type here..."
        name={name}
        {...rest}
      />
    </div>
  );
};

export default Input;
