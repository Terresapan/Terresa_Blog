import Image from "next/image";
import Icons from "./Icons";

export default function Intro() {
  return (
    <section
      id="intro"
      className="lg:flex flex-row items-center max-w-7xl mx-auto"
    >
      <div className="md:pr-6">
        <h1 className="name">Hi, I am Terresa!</h1>
        <p className="w-5/6 mx-auto pt-6 text-xl font-semibold text-center leading-8 text-textOnLightVariant dark:text-textOnDark">
          I am an <span className="tag">AI Engineer</span> with the creative
          vision of a <span className="tag">Technical Artist </span>
          and the strategic mind of a{" "}
          <span className="tag">Social Media Strategist.</span> Join me as we
          explore creative ways to use AI for impactful social media.
        </p>
        <Icons />
      </div>
      <Image
        className="w-full md:w-3/4 lg:max-w-sm pt-12 items-center mx-auto rounded-xl drop-shadow-md"
        src={"/Hero01.png"}
        alt="backdrop image"
        width={2048}
        height={2732}
        priority
      />
    </section>
  );
}
