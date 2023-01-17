import React from "react";
import Title from "./Title";

function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/2601802f-823d-4e7b-9793-2faa455e2114"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title id="contact">Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-dashed focus:outline-red-600"
          />

          <input
            type="text"
            name="email"
            placeholder="Email Address"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-dashed focus:outline-red-600"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-dashed focus:outline-red-600"
          />
          <button
            type="button"
            className=" mt-2 text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
          >
            Contact Me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
