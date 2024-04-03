import { handleSubscription } from "../../actions";

export default function From() {
  return (
    <div className="sm:w-5/6 md:w-5/6 lg:w-1/3 p-8 flex flex-col space-y-8 bg-PrimaryContainer dark:bg-PrimaryContainerDark drop-shadow-md rounded-xl">
      <div className="flex flex-col space-y-2">
        <div className="text-3xl font-bold font-source-serif text-center tracking-wider text-textOnLight dark:text-textOnDark">
          Newsletters
        </div>
        <div className="text-xl font-work-sans text-center text-textOnLightVariant dark:text-textOnDark">
          Subscribe for More Blog Posts
        </div>
      </div>
      <form className="flex flex-col gap-24" action={handleSubscription}>
        <div className="self-stretch h-12 flex-col space-y-4">
          <input
            className="input"
            type="name"
            name="name"
            id="name"
            placeholder="Enter your name"
            required
            autoComplete="off"
          />
          <input
            className="input"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
            required
            autoComplete="off"
          />
        </div>
        <div className="btn btn:hover">
          <button className="text-textOnLightPrimary dark:text-textOnDarkPrimary text-base font-medium font-work-sans">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}
