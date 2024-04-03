import Link from "next/link";
import { LightDarkToggle } from "./toggle/LightDarkToggle";
import Nav from "./Nav";

export const Header = () => {
  return (
    <header
      className="px-6 py-4 border-b border-LightSurface/50 dark:border-DarkSurface bg-LightSurface/50 dark:bg-DarkSurface/50 fixed top-0 left-0 right-0 drop-shadow-md backdrop-blur-md
     transition-colors z-50"
    >
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between">
        <Link href={"/"}>
          <span className="text-LightAccent dark:text-DarkAccent text-md font-semibold">
            Terresa
          </span>
          <span className="text-LightPrimary dark:text-DarkPrimary text-lg font-bold">
            Blog
          </span>
        </Link>
        <div className="flex flex-row items-center space-x-12">
          <Nav />
          <LightDarkToggle />
        </div>
      </div>
    </header>
  );
};
