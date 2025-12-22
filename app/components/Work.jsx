import {assets, workData} from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Work = () => {
  return (
    <div
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Wellcome to my web development portfolio! Explore a collection of my
        latest projects showcasing my skills in creating dynamic and responsive
        web applications.
      </p>
      {/* <div className="grid grid-cols-auto my-10 gap-5">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group "
            style={{backgroundImage: `url(${project.bg_Image})`}}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
              <div>
                <Image
                  alt="send icon"
                  src={assets.send_icon}
                  className="w-5"
                />
              </div>
            </div>
          </div>
        ))}
      </div> */}

      {/* simple code */}
    

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
  {workData.map((project, index) => (
    <div
      key={index}
      className="rounded-lg overflow-hidden bg-white shadow-md 
                 hover:-translate-y-1 hover:shadow-lg 
                 transition-all duration-300"
    >
      {/* IMAGE */}
      <div
        className="aspect-[16/10] bg-cover bg-center w-full"
        style={{ backgroundImage: `url(${project.bg_Image})` }}
      />

      {/* TEXT */}
      <div className="py-4 px-5 flex items-center justify-between">
        <div>
          <h2 className="font-semibold">{project.title}</h2>
          <p className="text-sm text-gray-600">{project.description}</p>
        </div>

        {/* CLICKABLE ARROW */}
        <Link
          href={project.url}
          target="_blank"
          className="p-2 rounded-full hover:bg-gray-100 transition"
        >
          <Image
            src={assets.send_icon}
            alt="send icon"
            className="w-5"
          />
        </Link>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Work;
