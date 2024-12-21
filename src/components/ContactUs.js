const ContactUs = () => {
  return (
    <div className="w-6/12 m-auto">
      <h1 className="font-bold text-2xl p-4 m-4 text-center">
        Contact Us Page
      </h1>
      <form className="">
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Message"
        />
        <button className="border border-black p-2 m-2 bg-black text-white rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
