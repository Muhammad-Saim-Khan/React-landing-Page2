import React from "react";
import Image5 from "../assets/web.png";
import Image6 from "../assets/fliter.jpeg";
import Image7 from "../assets/graphic.jpg";
import Image8 from "../assets/degital.png";
import Image9 from "../assets/blockchain.jpg";

const Four = () => {
  return (
    <div>
      <section className="shadow-custom">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-[50px] font-sans text-[#006838] container  px-5 py-24 text-center justify-center font-bold capitalize">
            <h4>IT Trainings offering in Jawan Pakistan</h4>
          </div>
          <div className="flex flex-wrap justify-center -m-4 relative  duration-300 group">
            <div className="lg:w-1/4 md:w-1/2 p-[10px] rounded-[16px] m-[20px] transform hover:shadow-2xl hover:scale-110 duration-300">
              <div className="h-full flex flex-col items-center text-center ">
                <img
                  className="bg-transparent  flex-shrink-0 rounded-lg w-full h-56 object-cover object-center border-solid mb-4"
                  src={Image5}
                  alt=""
                />
                <div className="w-full ">
                  <h2 className="font-medium text-lg text-gray-900">
                    Web and Mobile Application Development
                  </h2>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-[10px] rounded-[16px] m-[20px]  transform hover:shadow-2xl hover:scale-110 duration-300">
              <div className="h-full flex flex-col items-center text-center ">
                <img
                  className="bg-transparent  flex-shrink-0 rounded-lg w-full h-56 object-cover object-center border-solid mb-4"
                  src={Image6}
                  alt=""
                />
                <div className="w-full">
                  <h2 className="font-medium text-lg text-gray-900">
                    Flutter Mobile Application Development
                  </h2>
                </div>
              </div>
            </div>{" "}
            <div className="lg:w-1/4 md:w-1/2 p-[10px] rounded-[16px] m-[20px] transform hover:shadow hover:scale-110 duration-300">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  className="bg-transparent  flex-shrink-0 rounded-lg w-full h-56 object-cover object-center border-solid mb-4"
                  src={Image7}
                  alt=""
                />
                <div className="w-full">
                  <h2 className="font-medium text-lg text-gray-900">
                    Graphic Design And Video Editing
                  </h2>
                </div>
              </div>
            </div>{" "}
            <div className="lg:w-1/4 md:w-1/2 p-[10px] rounded-[16px] m-[20px] transform hover:shadow-2xl hover:scale-110 duration-300">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  className="bg-transparent  flex-shrink-0 rounded-lg w-full h-56 object-cover object-center border-solid mb-4"
                  src={Image8}
                  alt=""
                />
                <div className="w-full">
                  <h2 className="font-medium text-lg text-gray-900">
                    Digital And Social Media Marketing
                  </h2>
                </div>
              </div>
            </div>{" "}
            <div className="lg:w-1/4 md:w-1/2 p-[10px] rounded-[16px] m-[20px] transform hover:shadow-2xl hover:scale-110 duration-300">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  className="bg-transparent  flex-shrink-0 rounded-lg w-full h-56 object-cover object-center border-solid mb-4"
                  src={Image9}
                  alt=""
                />
                <div className="w-full">
                  <h2 className="font-medium text-lg text-gray-900">
                    BlockChain Development
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Four;
