import React from "react";
import Image from "next/image";
import { BsFillPlayCircleFill } from "react-icons/bs";
import HeroImage from "../../../public/images-en/talk.png";
import Link from "next/link";
import "animate.css"
import { motion, Variants } from "framer-motion";

const imageAnimate={
  offscreen:{x:-100, opacity:0},
  onscreen:{
  x:0,
  opacity:1,
  rotate:[0,10,0],
  transition: {type:"spring",
  bounce:0.4,
  duration:1}
}
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

function HomePage() {
  return (
    <motion.div variants={container}
    initial="hidden"
    animate="visible" className="bg-white flex lg:flex-row flex-col justify-around items-center lg:mt-14 md:mt-24 sm:mt-28 mt-24 min-w-7xl md:h-[90vh]">
      <div className="flex flex-col items-start justify-start md:ml-36 md:w-[-webkit-fill-available] mx-10 mt-10 md:mt-0">
        <p className="text-[#E84E36] text-left w-full font-semibold text-base">A leading company in designing websites and applications</p>
        <h2 className="font-bold lg:text-5xl text-left w-full text-2xl text-gray-800 mt-5">
        Line IT Company
        </h2>
        <p className="md:text-xl text-xl text-left w-full font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          We offer you digital solutions that help your business grow
        </p>
        <div className="mt-10 flex w-full mb-6 md:mb-0 items-center justify-center md:justify-start md:items-start gap-5">
          <Link href="/portfolio" >
            <a className="text-white bg-[#E84E36] font-semibold rounded-full px-5 md:py-4 py-2 hover:bg-black hover:shadow-lg">
              Our Work Gallery
            </a>
          </Link>
          <Link href="/portfolio" >
            <a className="text-white bg-[#E84E36] font-semibold rounded-full px-5 md:py-4 py-2 hover:bg-black hover:shadow-lg">
              Company
            </a>
          </Link>
        </div>
      </div>
      {/* image area */}
      <motion.div 
        variants={item}
        className="md:mr-10 lg:ml-30 md:ml-20 md:order-last order-first">
        <Image src={HeroImage} width={2000} height={2000} alt="dd" objectFit="cover" />
      </motion.div>
      {/* textual area */}
      
    </motion.div>
  );
}

export default HomePage;