"use client";

import { Bs, BsArrowRight, BsLinkedin } from "react-icons/bs";
import React, { useContext } from "react";

import { ActiveSectionContext } from "@/context/active-section-context";
import { FaGithubSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import introImg from "@/public/profile-pic.png";
import introImg2 from "@/public/Profile-pic-trans.png";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } =
    useContext(ActiveSectionContext);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 w-full sm:max-w-full text-center sm:mb-0 scroll-mt-[10rem]"
    >
      <div className="flex xl:flex-row flex-col-reverse items-center justify-center">
      
      {/* Intro text and link part */}
      <div className="flex basis-3/5 flex-col items-center justify-center">
      <motion.h1
        className="text-dark mb-10 mt-4 px-4 text-lg md:text-2xl font-medium !leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&lsquo;m Soham.</span> I&lsquo;m a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">2 years</span> of experience.
        {/* I enjoy building <span className="italic">sites & apps</span>. */}
        {" "}Just a usual programmer who enjoys using software design and development
        concepts to create web applications. Cloud technologies, software
        development, and web development are among my areas of interest. I can
        assist you in developing your great idea. Let&lsquo;s communicate and stay in
        contact.
      </motion.h1>
{/* 
      <motion.h3 className="text-dark mb-10 mt-4 px-4 md:text-md font-medium !leading-[1.5] sm:text-md">
        
      </motion.h3> */}

      <motion.div
        className="flex flex-col lg:flex-row items-center justify-center gap-4 px-6 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg font-medium">
        <Link
          href="#contact"
          className="group bg-primary text-primary px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-primary/90 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-dark text-dark px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        </div>

        <div className="flex flex-row items-center justify-center gap-4 px-4 text-lg font-medium">
          <a
            className="bg-primary p-4 text-primary hover:text-primary-400 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack "
            href="https://linkedin.com"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-primary p-4 text-primary flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
            href="https://github.com"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
      </div>

      {/* Intro image part */}
      <div className="flex basis-2/5 items-center justify-center">
        <div className="relative object-fill">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={introImg}
              alt="Soham Kansodaria"
              width="400"
              height="400"
              quality="95"
              priority={true}
              className="h-100 w-100 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-[19vw] sm:text-[5em]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.5,
            }}
          >
            💻
          </motion.span>
        </div>
      </div> 
      </div>
    </section>
  );
}
