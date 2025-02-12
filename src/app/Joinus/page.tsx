import React from "react";
import Link from "next/link";
import { SiNike } from "react-icons/si";

const Joinus = () => {
  return (
    <div className="container mx-auto flex flex-col items-center py-32 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
     
      <div className="pb-4">
        <SiNike className="text-black" size={60} />
      </div>
      <h2 className=" text-center font-bold text-xl sm:text-2xl md:text-3xl pb-2">BECOME A NIKE MEMBER</h2>
      
      <p className=" sm:w-30 md:w-96   text-center text-[#8D8D8D] pb-2 text-sm sm:text-lg">
        Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.
      </p>


      <form action="" className="flex flex-col w-full sm:w-3/4 md:w-2/3 lg:w-1/2 bg-white  p-6 rounded-md">
        

        <input
          className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
          type="text"
          placeholder="Email Address"
        />

      
        <input
          className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
          type="text"
          placeholder="Password"
        />

       
        <input
          className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
          type="text"
          placeholder="First Name"
        />

      
        <input
          className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
          type="text"
          placeholder="Last Name"
        />

        <input
          className="w-full border-[#E5E5E5] rounded-md mb-2 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
          type="text"
          placeholder="Date of Birth"
        />

        <p className="pb-3 text-[#8D8D8D] text-sm text-center">
          Get a Nike Member Reward every year on your Birthday.
        </p>

        
        <select
          className="w-full border-[#E5E5E5] text-[#8D8D8D] rounded-md mb-2 px-4 py-3 border-[2px]"
          name=""
          id=""
        >
          <option className="text-[#8D8D8D]" value="">
            India
          </option>
          <option className="text-text-secondary-gray" value="">
            United States
          </option>
          <option className="text-text-secondary-gray" value="">
            United Kingdom
          </option>
          <option className="text-text-secondary-gray" value="">
            Pakistan
          </option>
          <option className="text-text-secondary-gray" value="">
            Canada
          </option>
        </select>

    
        <div className="flex flex-row  gap-5 text-[#8D8D8D] mt-3 ">
          <div className="border-[#E5E5E5] rounded-md py-4 border-[2px] w-full sm:w-1/2 text-center text-text-secondary-gray">Male</div>
          <div className="border-[#E5E5E5] rounded-md py-4 border-[2px] w-full sm:w-1/2 text-center text-text-secondary-gray">Female</div>
        </div>

      
        <div className="flex justify-between text-[#8D8D8D] items-center py-5">
          <div>
            <input type="checkbox" id="remember" />
            <label className="ml-2 cursor-pointer" htmlFor="remember">
              Sign up for emails to get updates from Nike on products, offers and your Member benefits
            </label>
          </div>
        </div>

      
        <p className="text-[#8D8D8D] text-center pb-6 text-sm">
          By creating an account, you agree to Nike&apos;s{" "}
          <Link className="underline" href="#">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link className="underline" href="#">
            Terms of Use
          </Link>.
        </p>

     
        <button
          type="submit"
          className="bg-black text-white rounded-sm py-2 px-3 md:py-3 md:px-6 hover:bg-gray-700 transition duration-200 "
        >
          JOIN US
        </button>

       
        <p className="text-center pt-3 text-sm">
          <span className="text-text-secondary-gray">Already a Member? </span>
          <span className="underline">Join Us.</span>
        </p>
      </form>
    </div>
  );
};

export default Joinus;
