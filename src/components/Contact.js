import SocialMedia from "./SocialMedia";
import { useRef } from "react";

function Contact() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <>
      <div name="// contact" className="w-full h-full md:h-screen px-5 bg-gradient-to-b from-black to-black text-white">
        <div className="flex flex-col mx-auto mt-20 justify-center text-center max-w-screen-lg">
          <div className="">
            <p className="text-3xl md:text-5xl font-bold inline border-b-4 border-pink-500">Get To Know Me!</p>
            <p className="mt-5 pt-2 text-md md:text-2xl">
              I am open to <span className="text-[#39C600]">Job</span> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience please don't hesitate to <span className="text-[#39C600]">contact</span> me.
            </p>
            <SocialMedia />

            <p className="pt-5">Send me a message!</p>
          </div>

          <div className="flex flex-col pt-4 justify-center items-center">
            <form action="https://getform.io/f/0bdb7c33-9cd5-492b-acae-f1790d7fa009" method="POST" className="flex flex-col items-center w-full">
              <input ref={nameRef} type="text" name="name" placeholder="Enter your name" className="h-2/5 w-4/5 md:w-3/5 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />

              <input ref={emailRef} type="text" name="name" placeholder="Enter your email" className="h-2/5 w-4/5 md:w-3/5 my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
              <textarea ref={messageRef} name="message" rows="10" className="w-4/5 md:w-3/5 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
              <button onSubmit={handleSubmit} className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-3 my-8 mx-auto flex items-center rounded-full hover:scale-110 duration-300">
                Let's Connect
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
