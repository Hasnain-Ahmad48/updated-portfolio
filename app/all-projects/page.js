"use client";

import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AllProjects = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
        }
        return false;
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        }
    }, [isDarkMode]);

    return (
        <>
            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

            <div className="w-full px-[12%] py-32 min-h-screen">
                <motion.h4
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-center mb-2 text-lg font-Ovo"
                >
                    My portfolio
                </motion.h4>

                <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-center text-5xl font-Ovo"
                >
                    All my projects
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
                >
                    A comprehensive list of all projects I have worked on, showcasing my journey and expertise in various technologies.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10 dark:text-black"
                >
                    {workData.map((project, index) => (
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            key={index}
                            className="rounded-lg overflow-hidden bg-white shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300 dark:shadow-md "
                        >
                            <div
                                className="aspect-[16/10] bg-cover bg-center w-full"
                                style={{ backgroundImage: `url(${project.bg_Image})` }}
                            />

                            <div className="py-4 px-5 flex items-center justify-between">
                                <div>
                                    <h2 className="font-semibold ">{project.title}</h2>
                                    <p className="text-sm text-gray-600">{project.description}</p>
                                </div>
                                <div className="flex gap-2">
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
                                    <Link
                                        href={project.github_url}
                                        target="_blank"
                                        className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] hover:bg-lime-300 transition"
                                    >
                                        <Image
                                            src={assets.github_icon}
                                            alt="github icon"
                                            className="w-5"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="flex justify-center mt-16">
                    <Link
                        href="/"
                        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 hover:bg-lightHover duration-500 dark:text-white dark:hover:bg-darkHover dark:border-white"
                    >
                        Go Back Home
                        <Image
                            src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
                            alt="right arrow"
                            className="w-4 rotate-180"
                        />
                    </Link>
                </div>
            </div>

            <Footer isDarkMode={isDarkMode} />
        </>
    );
};

export default AllProjects;
