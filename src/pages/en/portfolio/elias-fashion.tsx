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
  const title = 'Elias Website For Suits';
  const url = '/en/portfolio/elias-fashion';
  const description = 'elias-designer.com made by Line IT Company - Best Web Development Company In Egypt and the Arab world';
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

            <Navbar ar="/portfolio/elais-fashion" />
        <motion.div variants={container}
    initial="hidden"
    whileInView="visible" className="flex lg:flex-row flex-col justify-around items-center lg:mt-16 md:mt-24 sm:mt-28 mt-14 min-w-7xl md:h-[auto]">
      {/* image area */}
      <motion.div variants={item} className="md:ml-10 mx-0 md:mx-10 lg:ml-20 md:mr-10 lg:mr-0 order-first">
      <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/elias_vprqty.webp" width={2000} height={2000} alt="elias-designer.com made by Line IT Company - Best Web Development Company In Egypt and the Arab world" objectFit="cover" />
        <CldOgImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/elias_vprqty.webp" width={2000} height={2000} alt="elias-designer.com made by Line IT Company - Best Web Development Company In Egypt and the Arab world" objectFit="cover" />
      </motion.div>
      {/* textual area */}
      <div className="flex flex-col items-center justify-start md:ml-20 md:w-[-webkit-fill-available] mx-10 mt-10 md:mt-0">
        <p className="text-[#E84E36] font-semibold text-base">Line IT Company  
</p>
        <h2 className="font-bold text-center lg:text-5xl text-2xl  text-gray-800">
        Elias website for suits
        </h2>
        <p dir="rtl" className="md:text-xl text-xl text-center font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          Marketing your business through social media platforms
        </p>
        <div className="mt-10 flex justify-center items-center gap-5">
        <a target='_blank' href='https://en.elias-designer.com' className="text-white bg-[#E84E36] font-semibold rounded-full px-5 md:py-4 py-2 hover:bg-black hover:shadow-lg">
            Vist Website Elias
          </a>
          <a target='_blank' href='https://www.youtube.com/@lineit-company/videos' className="bg-gray-50 rounded-full shadow-lg p-2">
            <BsFillPlayCircleFill className="text-[#E84E36] md:text-5xl text-4xl hover:text-black hover:shadow-lg" />
          </a>
        </div>
      </div>
    </motion.div>

        <motion.div variants={container}
    initial="hidden"
    animate="visible" className="flex lg:flex-row flex-col justify-around items-center lg:mt-14 md:mt-24 sm:mt-28 mt-24 min-w-7xl md:h-[70vh]">
      <div className="flex flex-col items-center justify-center md:ml-20 md:w-[-webkit-fill-available] mx-10 mt-10 md:mt-0">
        <p className="bg-[#E84E36] font-semibold text-base p-1 text-white rounded">website idea
        </p>
        <p  className="md:text-xl text-xl font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          It is a responsive men’s suit shopping website that is designed with the purpose of displaying different fashions within the store for easy browsing. The site operates inside Egypt and offers many services such as: offers, discounts, articles on various products, writing keywords for users who are looking for men's suits, and developing the brand online with the best search engine optimization.
        </p>
        <div className="mt-10 flex justify-center items-center gap-5">
        <a target='_blank' href='https://en.elias-designer.com' className="text-white bg-[#E84E36] font-semibold rounded-full px-5 md:py-4 py-2 hover:bg-black hover:shadow-lg">
          Schedule a free consultation
          </a>
        </div>
      </div>
      <motion.div variants={item} className="md:mr-10 lg:mr-20 md:ml-10 lg:ml-0 lg:order-last order-first">
      <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/elias1_osbwqf.webp" width={2000} height={2000} alt="elias-designer.com made by Line IT Company - Best Web Development Company In Egypt and the Arab world" objectFit="cover" />
      </motion.div>
    </motion.div>

    <motion.div variants={container}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }} className="flex lg:flex-row flex-col justify-around items-center lg:mt-4 md:mt-4 sm:mt-4 mt-4 min-w-7xl md:h-[70vh]">
    <motion.div variants={item} className="lg:ml-20 md:ml-10 lg:order-first order-first">
    <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/elias3_rnienj.webp" width={2000} height={2000} alt="elias-designer.com made by Line IT Company - Best Web Development Company In Egypt and the Arab world" objectFit="cover" />
      </motion.div>
      <div className="flex flex-col items-center justify-center md:ml-20 md:w-[-webkit-fill-available] mx-10 mt-10 md:mt-0">
        <p  className="bg-[#E84E36] font-semibold text-base p-1 text-white rounded">SEO results
        </p>
        <p  className="md:text-xl text-xl font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          We collected all the tags related to the Elias Men's Suits brand, then fine-tuned them to ensure that the words we will write are search engine friendly accurately, and fill all the images and blog with words that are perfectly suitable for customers - - We are the best suitable company for your online business growth.
        </p>
        <div className="mt-10 flex justify-center items-center gap-5">
          <a target='_blank' href='https://www.youtube.com/@lineit-company/videos' className="bg-gray-50 rounded-full shadow-lg p-2">
            <BsFillPlayCircleFill className="text-[#E84E36] md:text-5xl text-4xl hover:text-black hover:shadow-lg" />
          </a>
        </div>
      </div>
    </motion.div>

    <motion.div variants={container}
    initial="hidden"
     whileInView="visible"
  viewport={{ once: true }} className="flex lg:flex-row flex-col justify-around items-center lg:mt-4 md:mt-4 sm:mt-4 mt-4 min-w-7xl md:h-[70vh]">
      <div className="flex flex-col items-center justify-center md:ml-20 md:w-[-webkit-fill-available] mx-10 mt-10 md:mt-0">
        <p className="bg-[#E84E36] font-semibold text-base p-1 text-white rounded">Grow Elias Online
        </p>
        <p  className="md:text-xl text-xl font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          We are now talking about the growth of the Elias men's suit brand
        </p>
        <ul  className='list-decimal md:text-base text-base font-semibold text-[rgba(38,39,41,.7)]'>
            <li>Solving the problem of the lack of branches on Google Maps</li>
            <li>A special page for all Brand Elias branches first in the search</li>
            <li>Work on all aspects that customers search for online to help the brand grow even further</li>
            <li>Add [Google Analytics، Facebook Pixel] Codes</li>
          </ul>
          <p  className="md:text-xl text-xl font-semibold text-[rgba(38,39,41,.7)] lg:block block">
          The result was amazing with high site views through search and social media. <AiFillSound className='inline' />
          </p>
        <div className="mt-10 flex justify-center items-center gap-5">
          <a target='_blank' href='https://www.youtube.com/@lineit-company/videos' className="bg-gray-50 rounded-full shadow-lg p-2">
            <BsFillPlayCircleFill className="text-[#E84E36] md:text-5xl text-4xl hover:text-black hover:shadow-lg" />
          </a>
        </div>
      </div>
      <motion.div variants={item} className="md:mr-10 lg:mr-20 md:ml-10 lg:ml-0 lg:order-last order-first">
      <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/elias3_rnienj.webp" width={2000} height={2000} alt="elias-designer.com made by Line IT Company - Best Web Development Company In Egypt and the Arab world" objectFit="cover" />
      </motion.div>
    </motion.div>

    <motion.div variants={container}
    initial="hidden"
     whileInView="visible"
  viewport={{ once: true }} className="flex lg:flex-row flex-col justify-around items-center lg:mt-4 md:mt-4 sm:mt-4 mt-4 min-w-7xl md:h-[70vh]">
    <motion.div variants={item} className="lg:ml-20 md:ml-10 lg:order-first order-first">
    <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/elias4_kgaqtc.webp" width={2000} height={2000} alt="elias-designer.com made by Line IT Company - Best Web Development Company In Egypt and the Arab world" objectFit="cover" />
      </motion.div>
      <div className="flex flex-col items-center justify-center md:ml-20 md:w-[-webkit-fill-available] mx-10 mt-10 md:mt-0">
        <p className="bg-[#E84E36] font-semibold text-base p-1 text-white rounded">Design and marketing
        </p>
        <ul  className='list-decimal md:text-xl text-xl font-semibold text-[rgba(38,39,41,.7)]'>
            <li>Design +20 photos</li>
            <li>Photography + 5 video</li>
            <li>Creating two advertising campaigns on Facebook and Instagram that include [video clips, photos].</li>
        </ul>
        <div className="mt-10 flex justify-center items-center gap-5">
        <a target='_blank' href='https://www.youtube.com/@lineit-company/videos' className="bg-gray-50 rounded-full shadow-lg p-2">
            <BsFillPlayCircleFill className="text-[#E84E36] md:text-5xl text-4xl hover:text-black hover:shadow-lg" />
          </a>
        </div>
      </div>
    </motion.div>

    <motion.div variants={container}
    initial="hidden"
     whileInView="visible"
  viewport={{ once: true }} className="flex lg:flex-row flex-col justify-around items-center lg:mt-4 md:mt-4 sm:mt-4 mt-4 min-w-7xl md:h-[70vh]">
    <motion.div variants={item} className="lg:ml-20 md:ml-10 lg:order-first order-first">
    <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/elias6_x9xv0s.webp" width={2000} height={2000} alt="elias-designer.com made by Line IT Company - Best Web Development Company In Egypt and the Arab world" objectFit="cover" />
      </motion.div>
      <motion.div variants={item} className="md:mr-10 lg:mr-20 md:ml-10 lg:ml-0 lg:order-last order-first">
      <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/elias5_vnbppg.webp" width={2000} height={2000} alt="elias-designer.com made by Line IT Company - Best Web Development Company In Egypt and the Arab world" objectFit="cover" />
      </motion.div>
    </motion.div>

    <motion.div variants={container}
    initial="hidden"
     whileInView="visible"
  viewport={{ once: true }} className="flex lg:flex-row flex-col justify-around items-center lg:mt-4 md:mt-4 sm:mt-4 mt-4 min-w-7xl md:h-[70vh]">
      <div className="flex flex-col items-center justify-center md:ml-20 md:w-[-webkit-fill-available] mx-10 mt-10 md:mt-0">
        <p className="bg-[#E84E36] font-semibold text-base p-1 text-white rounded">Need To Call Us?
        </p>
          <p className="mt-1 md:text-xl text-xl font-semibold text-[rgba(38,39,41,.7)] lg:block block">
<AiFillSound className='inline' /> +201025338973
          </p>
        <div className="mt-10 flex justify-center items-center gap-5">
        <a target='_blank' href='https://www.youtube.com/@lineit-company/videos' className="text-white bg-[#E84E36] font-semibold rounded-full px-5 md:py-4 py-2 hover:bg-black hover:shadow-lg">
            Follow Us On Youtube
          </a>
        </div>
      </div>
      <motion.div variants={item} className="md:mr-10 lg:mr-20 md:ml-10 lg:ml-0 lg:order-last order-first">
      <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/elias_vprqty.webp" width={2000} height={2000} alt="elias-designer.com made by Line IT Company - Best Web Development Company In Egypt and the Arab world" objectFit="cover" />
      </motion.div>
    </motion.div>
    </>
  )
}

export default eliasFashion;