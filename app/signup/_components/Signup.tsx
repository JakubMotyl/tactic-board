"use client";
import { useState } from "react";
import Form from "./Form";
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { FaApple } from "react-icons/fa6";

const SOCIALS_LOGIN = [
  {
    name: "Facebook",
    icon: <FaFacebook />,
  },
  {
    name: "Apple",
    icon: <FaApple />,
  },
  {
    name: "Google",
    icon: <FaGoogle />,
  },
];

export default function Signup() {
  const [signup, setSignup] = useState(true);
  return (
    <section className="min-h-dvh flex items-end 2xl:pb-20 pb-10 justify-center">
      <div className="flex flex-col justify-between items-center md:max-w-90 sm:max-w-80 max-w-65 w-full 2xl:h-[60dvh] h-[65dvh]">
        {/* BUTTONS */}
        <div className="flex items-center rounded-4xl">
          <button
            className={`sign-btn ${
              signup
                ? "bg-cream text-bg"
                : "text-cream bg-bg hover:bg-cream/30 hover:text-white"
            }`}
          >
            Register
          </button>
          <button
            className={`sign-btn ${
              !signup
                ? "bg-cream text-bg"
                : "text-cream bg-bg hover:bg-cream/30 hover:text-white"
            }`}
          >
            Login
          </button>
        </div>
        {/* SOCIALS LOGIN */}
        <div className="div flex items-center gap-4">
          {SOCIALS_LOGIN.map((social) => (
            <button
              key={social.name}
              aria-label={`Login with ${social.name}`}
              className="md:text-3xl text-2xl cursor-pointer hover:scale-110 duration-200"
            >
              {social.icon}
            </button>
          ))}
        </div>
        <div className="flex items-center w-full">
          <div className="h-0.5 w-full bg-cream rounded"></div>
          <span className="font-black text-white px-4 md:text-xl text-lg">
            or
          </span>
          <div className="h-0.5 w-full bg-cream rounded"></div>
        </div>
        <Form />
      </div>
    </section>
  );
}
