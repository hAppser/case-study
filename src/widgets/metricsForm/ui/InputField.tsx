interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  value: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type,
  value,
  onChange,
  className,
}) => (
  <div>
    <label htmlFor={id} className="block font-medium">
      {label}
    </label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      className={className}
      required
    />
  </div>
);

export default InputField;
