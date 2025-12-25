import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export default function Input({ id, label, ...props }: InputProps) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="w-full p-3 text-sm rounded border placeholder:text-cream/50 placeholder:font-normal font-semibold border-cream focus:border-white outline-none"
      />
    </div>
  );
}
