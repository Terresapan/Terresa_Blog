import Link from "next/link";
import Form from "./Form";

export const Footer = () => (
  <footer className="px-6 py-12 bg-LightPrimary dark:bg-DarkPrimary text-textOnLightPrimary dark:text-textOnDarkPrimary mx-auto items-center justify-between">
    <div className="flex flex-col space-y-8 lg:flex-row items-center justify-between max-w-7xl mx-auto ">
      <div className="flex flex-col items-center lg:w-2/3">
        <Link
          href={"/"}
          className="pt-6 pb-2 text-4xl text-center tracking-wider md:text-6xl font-source-serif font-bold uppercase text-LightOnPrimary dark:text-DarkOnPrimary"
        >
          AI Powered Blogging
        </Link>
        <div className="py-2 text-md text-center tracking-wide md:text-xl font-work-sans font-semibold  text-LightOnPrimary dark:text-DarkOnPrimary">
          AI Artistry: Unleashing Creativity for Social Impact
        </div>
        <div className="hidden lg:block py-4 text-md tracking-wide font-source-serif font-semibold text-LightOnPrimary dark:text-DarkOnPrimary">
          © 2024 All Rights Reserved
        </div>
      </div>
      <Form />
      <div className="lg:hidden py-2 text-md tracking-wide font-source-serif font-semibold text-LightOnPrimary dark:text-DarkOnPrimary">
        © 2024 All Rights Reserved
      </div>
    </div>
  </footer>
);
