import React from "react";
import Image3 from "../assets/image.jpg";
import Image4 from "../assets/bg.png";
const Three = () => {
  return (
    <div>
      <section className="text-gray-600 ">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <img
              className="rounded-[50%] border-solid mx-auto text-center max-w-[100%] h-auto border-radius-50px"
              height={"200px"}
              width={"200px"}
              src={Image3}
              alt=""
            />
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
            <h2 className="flex  text-[#006838] font-bold font-sans justify-center text-center text-[40px] w-[100%] r tracking-wider ">
              MUHAMMAD ALI MUGHAL
            </h2>
            <p className="text-gray-500">Founder of Jawan Pakistan</p>
          </div>
          <br />
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <img
              className="inline-block w-20 h-24 mt-[-25px] text-gray-400 mb-8 "
              src={Image4}
              alt=""
            />
            <p className="leading-relaxed text-lg">
              We aim to be most efficient provider of business process
              outsourcing services by setting the industry standards for cost
              and quality of services. Our long term success will be driven by
              our relentless focus on recruiting and developing the most
              talented pool of human capital in our industry.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Three;
