import React from "react";
import Image10 from "../assets/one.jpg";
import Image11 from "../assets/two.jpg";
import Image12 from "../assets/three.jpg";
import Image13 from "../assets/four.jpg";
import Image14 from "../assets/five.jpg";
import Image15 from "../assets/six.jpg";

const Five = () => {
  return (
    <div>
      <section>
        <div className="container mx-auto flex flex-wrap">
          <div className="text-[#006838] font-bold capitalize  text-[50px] font-sans container  px-5 py-20 text-center justify-center">
            <h4>Glimpses of sessions conducted by Jawan Pakistan</h4>
          </div>
          <div className="flex  m-auto flex-wrap md:-m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  className="w-full object-cover h-full object-center block"
                  src={Image10}
                  alt=""
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  className="w-full object-cover h-full object-center block"
                  src={Image11}
                  alt=""
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  className="w-full h-full object-cover object-center block"
                  src={Image12}
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  className="w-full h-full object-cover object-center block"
                  src={Image13}
                  alt=""
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  className="w-full object-cover h-full object-center block"
                  src={Image14}
                  alt=""
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  className="w-full object-cover h-full object-center block"
                  src={Image15}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Five;
