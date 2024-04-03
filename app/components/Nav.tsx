import Link from "next/link";

export default function Nav() {
  const navigation = [
    { name: "About", href: "#intro" },
    { name: "Blog", href: "#blog" },
    { name: "Ask", href: "#chatbot" },
    { name: "Studio", href: "/studio" },
  ];
  return (
    <nav className="hidden md:flex flex-row items-center space-x-4">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="font-work-sans relative group overflow-hidden text-textOnLight dark:text-textOnDark hover:text-LightPrimary dark:hover:text-DarkPrimary"
        >
          {item.name}
          <span className="w-0 h-0.5 bg-LightPrimary dark:bg-DarkPrimary absolute bottom-0 left-0 group-hover:w-full transition-all duration-300" />
        </Link>
      ))}
    </nav>
  );
}
