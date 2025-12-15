import { ChangeEvent, FC, useId } from "react";

interface InputProps {
  label: string;
  value: string | number;
  onChange: (arg0: ChangeEvent) => void;
}

export const Input: FC<InputProps> = ({ label, value, onChange }) => {
  const id = useId();
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>{label}</label>
      <input id={id} value={value} onChange={onChange}></input>
    </div>
  );
};
