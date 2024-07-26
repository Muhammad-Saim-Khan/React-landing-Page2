import React from "react";
import Image2 from "../assets/2.png";

const Two = () => {
  return (
    <div>
      <section className="text-gray-600 shadow-custom">
        <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded max-w-[100%] h-auto border-solid"
              src={Image2}
              alt=""
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="text-[#006838] font-sans font-bold capitalize title-font sm:text-4xl text-3xl mb-4 ">
              Mission And Vision{" "}
              <br className="text-[#006838] font-sans font-bold capitalize hidden lg:inline-block" />
              Behind Jawan Pakistan
            </h1>
            <p className="mb-8 leading-relaxed">
              Our vision is to bring our students into the 21st century through
              innovation and modern technology. To create a better every day
              life for every people. This program is not only impacting the
              youth in monetary perspective but it is also creating some
              deep-rooted, long-term psychological effects e.g. minimizing
              frustration among the unemployed youth.
            </p>
            <p className="mb-8 leading-relaxed">
              Our mission is to provide high quality education that connects
              young people with opportunities to transform their lives. The
              educated youngsters who remain unemployed gets frustrated,
              depressed and disheartened when they do not succeed in getting
              their dream jobs. This training reinforces the educated youth to
              earn well through freelancing, develop variety of skills through
              specified domains and promote entrepreneurial culture that diverts
              youths potentials for constructive purposes. This energy diversion
              definitely make the youth more confident, self-reliant and
              constructive asset for a progressing economy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Two;
