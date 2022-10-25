import React from "react";
import "./input.css";

function Input({ name, placeholder }) {
  return <input className="input" type={name} placeholder={placeholder} />;
}

export default Input;
