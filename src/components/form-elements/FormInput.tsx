"use client";
import { useState } from "react";

interface IFormInput {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  pattern?: string;
  errorMessage?: string;
  autoComplete?: "off" | "on";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export interface FormValues {
  [key: string]: string;
}

export type Inputs = {
  name: string;
  type?: string;
  placeholder?: string;
  errorMessage?: string;
  required?: boolean;
  pattern?: string;
}[];

export default function FormInput(props: IFormInput) {
  const {
    name,
    label,
    type = "text",
    placeholder,
    onChange,
    value,
    required = false,
    pattern,
    errorMessage = "Please enter a valid value!",
    autoComplete = "off",
  } = props;
  const [focused, setFocused] = useState(false);

  return (
    <div className="input-group">
      <div
        className={[
          "input-element",
          focused && pattern && !RegExp(pattern).test(value || "")
            ? "invalid"
            : "",
        ].join(" ")}
      >
        {label && <label htmlFor={name}>{label}</label>}
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          pattern={pattern}
          autoComplete={autoComplete}
          onBlur={() => {
            if (pattern && !RegExp(pattern).test(value || "")) {
              setFocused(true);
            }
          }}
        />
      </div>
      <div className="error-message">{errorMessage}</div>
    </div>
  );
}
