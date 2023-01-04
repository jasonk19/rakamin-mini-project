import React from "react";
import Me from "../Assets/me.jpg";

const About = () => {
  return (
    <div className="md:flex">
      <img src={Me} alt="Jason K" className="w-4/5 mx-auto my-3 md:w-[25%]" />
      <div className="md:mt-3 md:ml-3">
        <p className="text-xl text-center md:text-left mb-3">
          My name is | <span className="font-bold">Jason Kanggara</span>
        </p>
        <p className="text-justify md:w-1/2">
          I'm currently a computer science student studying at Institut
          Teknologi Bandung, I have experience in both frontend web development
          and backend development mostly using Javascript/Typescript.
        </p>
      </div>
    </div>
  );
};

export default About;
