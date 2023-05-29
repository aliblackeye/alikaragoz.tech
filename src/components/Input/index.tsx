interface InputProps {
  label?: string;
  placeholder?: string;
  type?: "text" | "password" | "number";
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
}

export default function Input(props: InputProps) {
  // Destructing Props
  const {
    label,
    placeholder = "",
    type = "text",
    className = "",
    value,
    onChange,
    disabled,
    min,
    max,
    minLength,
    maxLength,
  } = props;
  return (
    <div className="form-input w-full">
      {label && <label className="!text-md font-semibold">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        min={min}
        max={max}
        minLength={minLength}
        maxLength={maxLength}
        className={`
          input
          outline-none
          border-none
          rounded-md
          p-4
          bg-[#314452]
          text-white
          font-semibold
          w-full
          tracking-widest
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          ${className ? className : ""}
          `}
      />
    </div>
  );
}
