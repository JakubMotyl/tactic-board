import { GiSoccerField } from "react-icons/gi";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar px-2 sm:h-14 h-12 xl:w-3/5 sm:w-4/5 w-9/10">
      <div className="select-none">
        <Link href={"/"} className="flex items-center gap-1">
          <GiSoccerField className="md:text-3xl text-2xl" />
          <span className="md:text-[1.35rem] text-lg font-logo">
            TacticBoard
          </span>
        </Link>
      </div>
      <div className="nav-link md:text-base text-sm sm:px-4 sm:py-1.5 py-1 px-2">
        <Link href={"/signup"}>Sign Up</Link>
      </div>
    </nav>
  );
}
