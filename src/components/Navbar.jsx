import React from "react";
import Logo from "../assets/j3.png";
import { FaCaretDown } from "react-icons/fa6";
const DropdownLinks = [
  {
    id: 1,
    name: "Web And Mobile Application Development",
    link: "/#",
  },
  {
    id: 2,
    name: "Flutter Application Development",
    link: "/#",
  },
  {
    id: 3,
    name: "Graphic Design and Video Editing",
    link: "/#",
  },
  {
    id: 4,
    name: "Digital and Social Media Marketing",
    link: "/#",
  },
  {
    id: 5,
    name: "Blockchain Development",
    link: "/#",
  },
];
const Navbar = () => {
  return (
    <header className="block isolation body-font">
      <div className="container mx-auto flex   flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          className="flex decoration-inherit bg-transparent font-medium items-center mb-4 md:mb-0"
          href="#"
        >
          <img height={"200px"} width={"250px"} src={Logo} alt="" />
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 	flex flex-wrap items-center text-base justify-center">
          <a
            className="text-[20px] text-black hover:text-[green] mr-5 "
            href="#"
          >
            Home
          </a>
          <a
            className="text-[20px] text-black  hover:text-[green] mr-5 "
            href="#"
          >
            About us
          </a>
          <a className="text-[20px] text-black hover:text-[green]  mr-5 group relative cursor-pointer">
            <a
              href="#"
              className="flex items-center hover:text-[green] gap-[2px] py-2"
            >
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block   w-[260px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2  hover:bg-[darkgreen] hover:text-white"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </a>
          <a
            className="text-[20px] text-black hover:text-[green]  mr-5 "
            href="#"
          >
            Contact us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
