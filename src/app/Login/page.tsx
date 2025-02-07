import React from "react";
import Link from "next/link";

import { SiNike } from "react-icons/si";

const Login = () => {
  return (
    <div className="flex flex-col  mx-2 md:mx-0 items-center py-28  md:py-40 px-6">
      <div className="pb-3 sm:pb-2">
        <SiNike className="text-black" size={60} />
      </div>
      <h2 className="sm:w-auto md:w-60  text-center font-bold pb-3 sm:text-xl ">
        YOUR ACCOUNT FOR EVERYTHING NIKE
      </h2>
      <form action="" className="flex flex-col  sm:w-96">
   
        <input
          className=" sm:w-full border-[#E5E5E5] rounded-md mb-3 px-3 py-2 border-[2px] placeholder:text-text-secondary-gray sm:text-sm"
          type="text"
          placeholder="Email Address"
        />
        
        <input
          className=" sm:w-full border-[#E5E5E5] rounded-md mb-3  px-3 py-2 border-[2px] placeholder:text-text-secondary-gray sm:text-sm"
          type="text"
          placeholder="Password"
        />

        <div className="flex md:flex-row justify-between items-center py-3 sm:py-2 sm:flex-col sm:items-start sm:text-sm">
          <div>
            <input type="checkbox" id="remember" />
            <label
              className=" cursor-pointer text-[#8D8D8D]"
              htmlFor="remember"
            >
              Keep me signed in
            </label>
          </div>
          <div>
            <span>
              <a href="#" className="text-[#BCBCBC] sm:text-sm">
                Forgotten your password?
              </a>
            </span>
          </div>
        </div>

        <p className="text-[#8D8D8D] text-center pb-4  sm:text-sm">
          By logging in, you agree to Nike&apos;s{" "}
          <Link className="underline" href="#">
            Privacy Policy
          </Link>{" "}
          and <Link className="underline" href="#">
            Terms of Use
          </Link>.
        </p>

        <button
          type="submit"
          className="bg-black text-white rounded-sm py-2 hover:bg-gray-700 transition duration-200 sm:w-full sm:text-sm"
        >
          SIGN IN
        </button>

     
        <p className="text-center py-3 sm:text-sm">
          <span className="text-[#8D8D8D]">Not a Member? </span>
          <span className="underline">Join Us.</span>
        </p>
      </form>
    </div>
  );
};

export default Login;






