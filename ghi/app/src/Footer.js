import React from "react";
import { Link } from "react-router-dom";
import { FaGithubSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { BsArrowRightSquare } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bottom-0 w-full bg-[#000000]">
      <div className="p-5 max-w-[1240px] mx-auto px-32 gap-8 grid lg:grid-cols-2">
        <div className="">
          <Link to="/" className="w-full text-3xl font-bold text-white hover:text-green-200">
            KIM'S CAR DEALERSHIP
          </Link>
          <p className="text-yellow-300 text-sm py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
          <div className="flex justify-between md:w-[50%] my-2">
            <FaGithubSquare size={30} color="white" />
            <FaInstagram size={30} color="white" />
            <FaTwitterSquare size={30} color="white" />
          </div>
        </div>
        <div className="ml-16 text-white">
          <h6 className="text-center font-medium pt-2 pb-2 text-3xl">Check Out My:</h6>
          <ul className="text-sm font-medium">
            <li className="py-2 flex items-center justify-center"><BsArrowRightSquare className="mr-2"/><a href="https://gitlab.com/robin_kim/car-dealership" target="_blank" rel="noopener noreferrer" className="hover:text-green-200">Gitlab Repository</a></li>
            <li className="flex items-center justify-center"><BsArrowRightSquare className="mr-2"/><a href="https://robin-portfolio-chi.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-green-200">Portfolio</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
