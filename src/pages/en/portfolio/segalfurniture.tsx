import React from 'react'
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { AiFillSound } from 'react-icons/ai';
import Navbar from '../../../components/pages-en/Navbar';
import { motion, Variants } from "framer-motion";
import BasicMeta from "../../../components/meta-en/BasicMeta";
import OpenGraphMeta from "../../../components/meta-en/OpenGraphMeta";
import TwitterCardMeta from "../../../components/meta-en/TwitterCardMeta";
import ShemaMeta from "../../../components/meta-en/ShemaMeta";
import { CldImage, CldOgImage } from 'next-cloudinary';
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
}
  
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}
const eliasFashion = () => {
  const title = 'segal furniture ecommerce';
  const url = '/en/portfolio/segalfurniture';
  const description = 'segalfurniture.com made by Line IT Company - Best Web Development Company In Egypt and the Arab world';
  const keywords = [ "Best Web Development Company In Egypt","Website Company","Mobile App Company","SEO Company"," Best Brice Web Development Company"," Front-End Company"," Back-End Company"," Full-Stack Company", "Line IT Company"]

  return (
    <>
        <BasicMeta 
            url={url} 
            title={title}
            description={description}
            keywords={keywords}
        />
        <OpenGraphMeta 
            url={url} 
            title={title}
            description={description}
        />
        <TwitterCardMeta 
            url={url} 
            title={title} 
            description={description}
        />
        <ShemaMeta
            url={url} 
            title={title}
            description={description}
      />

            <Navbar ar="/portfolio/segalfurniture" />
        <motion.div variants={container}
    initial="hidden"
    whileInView="visible" className="flex lg:flex-row flex-col justify-around items-center lg:mt-20 md:mt-24 sm:mt-28 mt-14 min-w-7xl md:h-[auto]">
      {/* image area */}
      <motion.div variants={item} className="md:ml-10 mx-0 md:mx-10 lg:ml-20 md:mr-10 lg:mr-0 order-first">
      <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/work-segal_ayesev.webp" width={2000} height={2000} alt='segalfurniture.com made by Line IT Company - Best Web Development Company In Egypt and the Arab world' objectFit="cover" />
        <CldOgImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/work-segal_ayesev.webp" width={2000} height={2000} alt='segalfurniture.com made by Line IT Company - Best Web Development Company In Egypt and the Arab world' objectFit="cover" />
      </motion.div>
      {/* textual area */}
      <div className="flex flex-col items-center justify-start md:ml-20 md:w-[-webkit-fill-available] mx-10 mt-10 md:mt-0">
        <p className="bg-[#E84E36] font-semibold text-base p-1 text-white rounded">site idea  
</p>
        <p className="md:text-xl text-xl text-center font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          It is a fully responsive e-commerce and furniture selling website for the Segal Fair in Egypt that was designed with the purpose of displaying and selling the various products of the fair to facilitate browsing. The site works on all screens and offers many services such as: offers, discounts, articles on various products, writing keywords for users looking for a captain or a model in general, and developing the brand online with the best search engine optimization.
        </p>
        <div className="mt-10 flex justify-center items-center gap-5">
        <a target='_blank' href='https://www.segalfurniture.com/en' className="text-white bg-[#E84E36] font-semibold rounded-full px-5 md:py-4 py-2 hover:bg-black hover:shadow-lg">
            Vist Website segal
          </a>
          <a target='_blank' href='https://www.youtube.com/@lineit-company/videos' className="bg-gray-50 rounded-full shadow-lg p-2">
            <BsFillPlayCircleFill className="text-[#E84E36] md:text-5xl text-4xl hover:text-black hover:shadow-lg" />
          </a>
        </div>
      </div>
    </motion.div>

    </>
  )
}

export default eliasFashion;