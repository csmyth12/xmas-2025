import { ChangeEventHandler, FC, useId } from "react";

interface InputProps {
  label: string;
  value: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input: FC<InputProps> = ({ label, value, onChange }) => {
  const id = useId();
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-2xl">
        {label}
      </label>
      <input
        id={id}
        value={value}
        onChange={onChange}
        autoComplete="off"
        className="border-xmas-red active:border-xmas-deep-red focus:border-xmas-deep-red text-xmas-red p-4 text-4xl rounded-sm"
      ></input>
    </div>
  );
};
