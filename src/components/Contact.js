function Contact() {
  const handleClick = (e) => {
    if (e.target.style.textDecoration) {
      e.target.style.removeProperty("text-decoration");
    } else {
      e.target.style.setProperty("text-decoration", "line-through");
    }
  };

  return (
    <>
      <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
        <div className="flex flex-col justify-center text-center max-w-screen-lg mx-auto h-full pt-10">
          <div className="pb-4">
            <p className="text-5xl font-bold inline border-b-4 border-pink-500">Get To Know Me!</p>
            <p className="pt-10 text-2xl">
              I am open to <span className="text-[#39C600]">Job</span> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience please don't hesitate to <span className="text-[#39C600]">contact</span> me.
            </p>
            <p onClick={handleClick} className="email w-fit mx-auto pt-5 text-2xl">
              hengjchan@gmail.com
            </p>
            <p className="pt-7">Submit the form below to get in touch with me!</p>
          </div>

          <div className="flex justify-center">
            <form action="" className="flex flex-col w-full md:w-1/2">
              <input type="text" name="name" placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />

              <input type="text" name="name" placeholder="Enter your email" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
              <textarea name="message" rows="10" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let's Connect</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

{
  /* <h1>Get To Know Me!</h1>
          <div>I am open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience please don’t hesitate to contact me.</div>
          <h3>hengjchan@gmail.com</h3>
          <p>GET IN TOUCH!</p>
          <p>LinkedIn</p>
          <p>Github</p>
          <p>Instagram</p>
          <p>Facebook</p> */
}
