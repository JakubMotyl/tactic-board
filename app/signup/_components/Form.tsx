import Input from "./Input";
export default function Form() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // CUSTOM ALLERT JESLI UZYTKOWNIK SIE FAKE ZALOGUJE
  };

  return (
    <form
      action="#"
      onSubmit={handleSubmit}
      className="flex flex-col w-full gap-6"
    >
      <div className="flex flex-col gap-3">
        <Input id="username" label="Username" type="text" placeholder=" " />
        <Input id="email" label="Email Adress" type="email" placeholder=" " />
        <Input id="password" label="Password" type="password" placeholder=" " />
      </div>
      <button
        type="submit"
        className="cursor-pointer py-4 rounded border border-cream text-bg bg-cream hover:bg-bg hover:text-cream transition-all duration-300 group"
      >
        <p className="group-hover:scale-110 duration-300">Create an account</p>
      </button>
    </form>
  );
}
