import React from "react";
import Me from "../Assets/me.jpg";

const About = () => {
  return (
    <div>
      <p className="text-xl text-center">
        My name is | <span className="font-bold">Jason Kanggara</span>
      </p>
      <img src={Me} alt="Jason K" className="w-4/5 mx-auto my-3" />
      <p className="text-justify">
        I'm currently a computer science student studying at Institut Teknologi
        Bandung, I have experience in both frontend web development and backend
        development mostly using Javascript/Typescript.
      </p>
    </div>
  );
};

export default About;
