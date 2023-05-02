"use client";
import { useState } from "react";

export interface IFormInput {
  label?: string;
  name: string;
  type?:
    | "number"
    | "text"
    | "email"
    | "password"
    | "date"
    | "time"
    | "tel"
    | "url";
  placeholder?: string;
  required?: boolean;
  value?: string;
  pattern?: string;
  errorMessage?: string;
  autoComplete?: "off" | "on";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showError?: boolean;
}

export interface FormValues {
  [key: string]: string;
}

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
    showError = false,
  } = props;
  const [focused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState<string>(value || "");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (pattern && !RegExp(pattern).test(newValue)) {
      setFocused(true);
    } else {
      setFocused(false);
    }
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="input-group">
      {label && (
        <label className="input-label" htmlFor={name}>
          {label}
        </label>
      )}

      <div
        className={[
          "input-element",
          focused && pattern && !RegExp(pattern).test(inputValue || "")
            ? "invalid"
            : "",
        ].join(" ")}
      >
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          value={inputValue}
          onChange={handleInputChange}
          pattern={pattern}
          autoComplete={autoComplete}
        />
      </div>

      {showError ? (
        <div className="error-message">{errorMessage}</div>
      ) : focused && pattern && !RegExp(pattern).test(inputValue || "") ? (
        <div className="error-message">{errorMessage}</div>
      ) : (
        ""
      )}
    </div>
  );
}
