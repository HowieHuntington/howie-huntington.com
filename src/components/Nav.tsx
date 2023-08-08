import Link from "next/link";
import Hambuger from "./Hamburger";
// This component is for future use of a navigation bar
const Nav = () => {
  return (
    <div className="pt-4 md:pt-16 sticky top-0">
      <header className="z-50 flex justify-end bg-h-bg w-full">
        <nav>
          <div className="sm:hidden flex items-center">
            <Hambuger />
          </div>
          <ul className="hidden sm:flex gap-4 text-h-text text-xl font-medium">
            <li className="flex items-center">
              <Link
                href="/"
                className="transform transittransform transition duration-75 hover:scale-110 hover:font-semibold flex justify-center items-center"
              >
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                href="/projects"
                className="transform transition duration-75 hover:scale-110 hover:font-semibold flex justify-center items-center"
              >
                Projects
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                href="/experience"
                className="transform transition duration-75 hover:scale-110 hover:font-semibold flex justify-center items-center"
              >
                Experience
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                href="/chat"
                className="transform transition duration-75 hover:scale-110 hover:font-semibold flex justify-center items-center"
              >
                Chat
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
