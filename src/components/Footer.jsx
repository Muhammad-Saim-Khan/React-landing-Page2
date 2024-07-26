import React from "react";
import Logo from "../assets/j3.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="mt-10 items-center text-gray-600">
        <div className="container justify-between px-5 py-5 mx-auto flex items-center md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a
              className="flex cursor-pointer title-font font-medium items-center md:justify-start justify-center text-gray-900"
              href="#"
            >
              <img
                className="max-w-[100%] h-auto block align-middle  items-center border-solid"
                src={Logo}
                alt=""
              />
            </a>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-green-900 tracking-widest text-sm mb-3">
              COMPANY
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-green-600 hover:text-gray-800" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="text-green-600 hover:text-gray-800" href="#">
                  About us
                </a>
              </li>{" "}
              <li>
                <a className="text-green-600 hover:text-gray-800" href="#">
                  Trainings
                </a>
              </li>{" "}
              <li>
                <a className="text-green-600 hover:text-gray-800" href="#">
                  Contact us
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-bold text-green-900 tracking-widest text-sm mb-3">
              CONTACT DETAILS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-green-600 hover:text-gray-800" href="#">
                  Muhammad Ali Mughal
                </a>
              </li>
              <li>
                <a className="text-green-600 hover:text-gray-800" href="#">
                  +923005292675
                </a>
              </li>
              <li>
                <a className="text-green-600 hover:text-gray-800" href="#">
                  jawantechpk@gmail.com
                </a>
              </li>
            </nav>
          </div>
        </div>
        <div className="bg-green-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-white-500 text-sm text-center sm:text-left">
              © 2022 JawanPakistan
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a
                className="text-white-500 transition-all duration-[1s]"
                href="#"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a className="ml-3 text-white-500" href="#">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a className="ml-3 text-white-500" href="#">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
