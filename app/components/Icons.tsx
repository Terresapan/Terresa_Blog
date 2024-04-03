import Image from "next/image";
import Link from "next/link";

export default function Icons() {
  return (
    <div className="pt-16 flex flex-row items-center mx-auto justify-center gap-4">
      <Link href="https://www.linkedin.com/in/terresa-pan-292443245/">
        <Image
          className="transition-transform duration-300 transform hover:scale-110"
          src="/icons/linkedin.svg"
          alt="LinkedIn icon, click to access my LinkedIn profile"
          width={0}
          height={0}
          style={{ width: "24px", height: "auto" }}
        />
      </Link>
      <Link href="https://www.youtube.com/channel/UCeH2CtREAgdUsG-53eSWR9Q">
        <Image
          className="transition-transform duration-300 transform hover:scale-110"
          src="/icons/youtube.svg"
          alt="Youtue icon, click to access my YouTube channel"
          width={0}
          height={0}
          style={{ width: "24px", height: "auto" }}
        />
      </Link>
      <Link href="">
        <Image
          className="transition-transform duration-300 transform hover:scale-110"
          src="/icons/instagram.svg"
          alt="instagram icon, click to access my instagram channel"
          width={0}
          height={0}
          style={{ width: "24px", height: "auto" }}
        />
      </Link>
      <Link href="https://www.tiktok.com/@contentscience">
        <Image
          className="transition-transform duration-300 transform hover:scale-110"
          src="/icons/tiktok.svg"
          alt="tiktok icon, click to access my tiktok channel"
          width={0}
          height={0}
          style={{ width: "24px", height: "auto" }}
        />
      </Link>
      <Link href="https://github.com/Terresapan">
        <Image
          className="transition-transform duration-300 transform hover:scale-110"
          src="/icons/github.svg"
          alt="Github icon, click to access my Github page"
          width={0}
          height={0}
          style={{ width: "24px", height: "auto" }}
        />
      </Link>
    </div>
  );
}
