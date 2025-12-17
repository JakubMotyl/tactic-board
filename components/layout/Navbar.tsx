import { GiSoccerField } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar md:h-14 h-12 md:w-3/5 w-4/5">
      <div>
        <Link href={"/"} className="flex items-center gap-1">
          <GiSoccerField className="text-3xl" />
          <span className="text-[1.35rem] font-logo">TacticBoard</span>
        </Link>
      </div>
      <div className="flex items-center gap-10">
        <div className="nav-link">
          <a href="#creator">Go to creator</a>
          <IoMdArrowDropdown />
        </div>
        <div className="nav-link">
          <Link href="https://github.com/JakubMotyl/tactic-board">GitHub</Link>
        </div>
      </div>
    </nav>
  );
}
