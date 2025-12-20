import {assets, infoList} from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.profile_img}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            I am an experienced FullStack Developer with 2+ year of professional
            experience in building web applications. I specialize in both
            frontend and backend development, utilizing technologies such as
            React, Next.js, Node.js, and Express.js. My expertise includes
            creating responsive user interfaces, developing RESTful APIs, and
            managing databases like MongoDB and MySQL. I am passionate about
            writing clean, efficient code and continuously learning new
            technologies to enhance my skills. Let`s work together to bring your
            ideas to life!
          </p>

          <ul>
            {infoList.map(({icon, iconDark, title, description},index) => (
              <li key={index}>
                <Image src={icon} alt="" />
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
