import React from "react";
import Image from "next/image";
import {assets} from "@/assets/assets";
const SocialsLinks = () => {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-4">
      <a
        href=""
        target="_blank"
        className="w-10 h-10 flex items-center justify-center bg-black rounded-full border border-e-gray-400 hover:bg-black hover:text-white dark:bg-white dark:text-black transition"
      >
        <Image
          src={assets.linkedin}
          alt="Linkedin"
          className="w-5"
        />
      </a>

      <a
        href=""
        target="_blank"
        className="w-10 h-10 flex items-center justify-center bg-slate-600 rounded-full border border-e-gray-400 hover:bg-black hover:text-white dark:bg-white dark:text-black transition"
      >
        <Image
          src={assets.github_icon}
          alt="github"
          className="w-5"
        />
      </a>
    </div>
  );
};

export default SocialsLinks;
