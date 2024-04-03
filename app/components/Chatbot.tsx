const Chatbot = () => {
  return (
    <section id="chatbot" className="max-w-7xl mx-auto space-y-12">
      <h1 className="heading">Tired of Reading? Just Ask!</h1>
      <form className="grid grid-cols-1 gap-6 lg:grid-cols-6 lg:items-center mx-auto">
        <div className="col-span-1 lg:col-span-5">
          <input
            className="input"
            type="text"
            name="text"
            id="text"
            placeholder="What is your blog website about?"
            required
            autoComplete="off"
          />
        </div>
        <div className="btn btn:hover col-span-1">
          <button className="btntext">Subscribe</button>
        </div>
      </form>
    </section>
  );
};

export default Chatbot;
