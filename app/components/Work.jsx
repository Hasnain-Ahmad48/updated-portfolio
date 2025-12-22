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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {workData.map((project, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden bg-white shadow-md 
                 hover:-translate-y-1 hover:shadow-lg 
                 transition-all duration-300"
          >
            <div
              className="aspect-[16/10] bg-cover bg-center w-full"
              style={{backgroundImage: `url(${project.bg_Image})`}}
            />

            <div className="py-4 px-5 flex items-center justify-between">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
              <Link
                href={project.url}
                target="_blank"
                className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] hover:bg-lime-300 transition"
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
      <a href="" className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500">
        show more <Image src={assets.right_arrow_bold} alt="right arrow" className="4" />
      </a>
    </div>
  );
};

export default Work;
