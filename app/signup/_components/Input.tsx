interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export default function Input({ id, label, ...props }: InputProps) {
  return (
    <div className="w-full relative">
      <input
        id={id}
        {...props}
        className="peer w-full px-4 pt-6 pb-2 text-base rounded border placeholder:text-cream/50 placeholder:font-normal font-semibold border-cream focus:border-white outline-none"
      />
      <label
        htmlFor={id}
        className="absolute left-4 -translate-y-1/2 duration-200 cursor-text top-4 text-xs peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-4 peer-focus:text-xs"
      >
        {label}
      </label>
    </div>
  );
}
