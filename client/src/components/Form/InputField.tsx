import styles from './InputField.module.css';
export interface InputFieldProps {
  name: string;
  type:
    | "text"
    | "email"
    | "password"
    | "tel"
    | "url"
    | "textarea"
    | "select"
    | "number"
    | "date"
    | "time"
    | "datetime-local"
    | "week"
    | "month";
  placeholder?: string;
  value?: string | number;
  label?: string;
  onChange?: (e: React.ChangeEvent<any>) => void;
  required?: boolean;
  errorMessage?: string;
  unit?: string;
  options?: { value: string | number; label: string }[];
  isSubmitted?: boolean;
  disabled?: boolean;
  className?: string;
  inputRef?: (el: HTMLInputElement | HTMLSelectElement | null) => void;

}

const InputField: React.FC<InputFieldProps> = ({
  name,
  type = "text",
  value = "",
  label,
  placeholder,
  onChange,
  required,
  errorMessage,
  unit,
  options,
  isSubmitted,
  disabled,
  className = "",
  inputRef,
}) => {
  // Default onChange if none provided
  const handleChange =
    onChange ||
    ((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      console.warn(`No onChange function provided for ${name}.`));

  // Base input styling
  const inputClassList = [
    styles.inputBase,
    isSubmitted && (errorMessage || (required && !value)) ? styles.inputInvalid : styles.inputValid,
    disabled ? styles.inputDisabled : "",
    unit ? styles.inputUnitPadding : "",
  ];
  const inputClasses = inputClassList.join(" ").trim();

  return (
    <div className={`${styles.wrapper} ${className || "col-span-1"}`}>
  {label && (
    <div className={styles.labelWrapper}>
      <label htmlFor={name}>{label}</label>
      {required && <span className={styles.requiredMark}>*</span>}
    </div>
  )}

  {type === "textarea" ? (
    <textarea
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className={inputClasses}
      aria-invalid={!!errorMessage}
      required={required}
      disabled={disabled}
    />
  ) : type === "select" && options ? (
    <select
      id={name}
      name={name}
      value={value}
      required={required}
      onChange={handleChange}
      className={`${inputClasses} ${styles.select}`}
      aria-invalid={!!errorMessage}
      disabled={disabled}
      ref={inputRef}
    >
      <option value="">Select an option</option>
      {options.map(({ value, label }, index) => (
        <option key={index} value={value}>
          {label}
        </option>
      ))}
    </select>
  ) : (
    <div style={{ position: "relative", width: "100%" }}>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={handleChange}
        className={inputClasses}
        aria-invalid={!!errorMessage}
        disabled={disabled}
        ref={inputRef}
      />
      {unit && <span className={styles.unitLabel}>{unit}</span>}
    </div>
  )}

  {isSubmitted && errorMessage && (
    <p className={styles.errorMessage}>{errorMessage}</p>
  )}
</div>
  );
};
export default InputField;
