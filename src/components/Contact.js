import SocialMedia from "./SocialMedia";

function Contact() {
  return (
    <>
      <div name="// contact" className="w-full h-screen px-5 bg-gradient-to-b from-black to-gray-800 text-white border-2 border-solid border-green-700">
        <div className="flex flex-col justify-center text-center max-w-screen-lg h-full">
          <div className="">
            <p className="text-3xl md:text-5xl font-bold inline border-b-4 border-pink-500">Get To Know Me!</p>
            <p className="mt-3 text-md md:text-2xl">
              I am open to <span className="text-[#39C600]">Job</span> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience please don't hesitate to <span className="text-[#39C600]">contact</span> me.
            </p>
            {/* <p  className="email w-fit mx-auto pt-5 text-2xl">
              hengjchan@gmail.com
            </p> */}
            <SocialMedia />

            <p className="pt-5">Send me a message!</p>
          </div>

          <div className="flex justify-center border-2 border-solid border-red-700 items-center">
            <form action="" className="flex flex-col w-full">
              <input type="text" name="name" placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />

              <input type="text" name="name" placeholder="Enter your email" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
              <textarea name="message" rows="10" className="h-2/5 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let's Connect</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
