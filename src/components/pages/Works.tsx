import Link from "next/link";
import WorkElias from "../../../public/images/work-elias.webp";
import WorkIbrahim from "../../../public/images/work-ibrahim.webp";
import WorkMohamed from "../../../public/images/work-mohamed.webp";
import WorkSegal from "../../../public/images/work-segal.png";
import Image from "next/image";
import {FaLink , FaBookReader} from "react-icons/fa"
import { motion, Variants } from "framer-motion";
import { CldImage } from "next-cloudinary";
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
const OurWorks = [
  {
    name: "موقع الياس للبدل",
    image: 'https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/work-elias_yr0fxi.webp',
    link: "/portfolio/elias-fashion",
    website: "https://elias-designer.com",
  },
  {
    name: "موقع ابراهيم للفاشون",
    image: 'https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/work-ibrahim_zhhvse.webp',
    link: "/portfolio/ibrahim-fashion",
    website: "https://ibrahim.elias-designer.com",
  },
  {
    name: "موقع كابتن محمد عزام",
    image: 'https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/work-mohamed_nwbgho.webp',
    link: "/portfolio/mohamed-coach",
    website: "https://azamnutrition.com",
  },
  {
    name:  "متجر سيجال لبيع الأثاث",
    image: 'https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/work-segal_ayesev.webp',
    link: "/portfolio/segalfurniture",
    website: "https://www.segalfurniture.com",
  }
];
export default function Works() {
  return (
    <div className="py-12 bg-[#F2F5FB]">
      <div className="max-w-full mx-5 md:mx-20 sm:mx-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#E84E36] font-semibold">
            معرض الأعمال
          </h2>
          <p className="mt-2 md:text-5xl text-3xl font-bold text-gray-900">
          أعمال نفخر بها
          </p>
        </div>

        <div className="mt-10">
          <dl dir="rtl" className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-x-2 md:gap-y-6">
              
              {OurWorks.map(work => {
                return (
                    <motion.div variants={container}
                    initial="hidden"
                    whileInView="visible"
  viewport={{ once: true }} key={work.name} className="bg-white md:ml-8 sm:ml-0 pb-4 relative cursor-pointer rounded-lg text-center transition-all shadow-black hover:shadow-md">
                      <Link href={`${work.link}`}><motion.div variants={item} ><CldImage className="rounded-lg" src={`${work.image}`} width={2000} height={1500} alt={`${work.name} صممت بواسطة لاين اي تي - أفضل شركة تصميم مواقع وتطبيقات في مصر والوطن العربي`} objectFit="cover" /></motion.div></Link>
                      <div className="flex justify-center">
                      <a target="_blank" href={`${work.website}`} className="flex justify-center items-center font-semibold ml-2 px-5 py-2 bg-[#E84E36] rounded-lg text-white shadow-lg">
                            معاينة الموقع <FaLink className="mr-1" />
                          </a>
                        <Link href={`${work.link}`}>
                        <a className="flex justify-center items-center font-semibold px-5 py-2 bg-black rounded-lg text-white shadow-lg">
                            أقرء المزيد <FaBookReader className="mr-1" />
                          </a>
                        </Link>
                      </div>
                    </motion.div>
                )
              })}

          </dl>

          <div className=" flex justify-center mt-4">
              <Link href="/portfolio">
                  <a className="text-white inline-block bg-[#E84E36] font-semibold rounded-full px-5 md:py-4 py-2 hover:bg-black hover:shadow-lg">
                  جميع الأعمال
                  </a>
                </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WebWork() {
  return (
    <div className="py-4 bg-[#F2F5FB]">
      <div className="max-w-full mx-5 md:mx-20 sm:mx-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-2 md:text-5xl text-3xl font-bold text-gray-900">
          أحدث الأعمال
          </p>
        </div>

        <div className="mt-10">
          <dl dir="rtl" className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-x-2 md:gap-y-6">
              
              {OurWorks.map(work => {
                return (
                    <motion.div variants={container}
                    initial="hidden"
                    whileInView="visible"
  viewport={{ once: true }} key={work.name} className="bg-white md:ml-8 sm:ml-0 pb-4 relative cursor-pointer rounded-lg text-center transition-all shadow-black hover:shadow-md">
                      <Link href={`${work.link}`}><motion.div variants={item} ><CldImage className="rounded-lg" src={`${work.image}`} width={2000} height={1500} alt={`${work.name} صممت بواسطة لاين اي تي - أفضل شركة تصميم مواقع وتطبيقات في مصر والوطن العربي`} objectFit="cover" /></motion.div></Link>
                      <div className="flex justify-center">
                        <a target="_blank" href={`${work.website}`} className="flex justify-center items-center font-semibold ml-2 px-5 py-2 bg-[#E84E36] rounded-lg text-white shadow-lg">
                            معاينة الموقع <FaLink className="mr-1" />
                          </a>
                        <Link href={`${work.link}`}>
                        <a className="flex justify-center items-center font-semibold px-5 py-2 bg-black rounded-lg text-white shadow-lg">
                            أقرء المزيد <FaBookReader className="mr-1" />
                          </a>
                        </Link>
                      </div>
                    </motion.div>
                )
              })}

          </dl>

          <div className=" flex justify-center mt-4">
              <Link href="/portfolio">
                  <a className="text-white inline-block bg-[#E84E36] font-semibold rounded-full px-5 md:py-4 py-2 hover:bg-black hover:shadow-lg">
                     جميع الأعمال
                  </a>
                </Link>
          </div>
        </div>
      </div>
    </div>
  );
}