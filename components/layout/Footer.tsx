import { FaGithub } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 border-t border-cream/30 flex items-center justify-center">
      <p className="text-sm text-cream/80 flex flex-col gap-2 items-center">
        &copy; {currentYear} Tactic Board.
        <a
          href="https://github.com/JakubMotyl"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cream hover:scale-105 duration-100"
          aria-label="GitHub profile"
        >
          <FaGithub size={20} />
        </a>
      </p>
    </footer>
  );
}
