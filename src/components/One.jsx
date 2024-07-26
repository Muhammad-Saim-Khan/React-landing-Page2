import React from "react";
import image1 from "../assets/1.png";
const One = () => {
  return (
    <div>
      <section className="text-gray-600 block">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-[#006838] font-sans font-bold capitalize title-font sm:text-4xl text-3xl mb-4 ">
              Introduction to <br className="hidden lg:inline-block" />
              Jawan Pakistan
            </h1>
            <p className="mb-8 leading-relaxed">
              The foundation of every state is the education and skills set of
              its youth. Jawan Pakistan is such an organization of Pakistan who
              is not only working on youth education but also enhancing skills
              set in youth either Free of cost or in a very low cost. This
              initiative, initially developed by a single person and with almost
              no seed capital, promotes entrepreneurship and innovation and
              Sustainable Development Goal, which promotes inclusive and
              sustainable economic growth.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded max-w-[100%] h-auto"
              src={image1}
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default One;
