import {useEffect} from "react" 
import { GiWorld } from "react-icons/gi";
import { BsBrush, BsHash, BsMagic } from "react-icons/bs";
import { AiOutlineLaptop, AiOutlineMobile, AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineArrowLongRight, HiArrowTrendingUp } from "react-icons/hi2"
import Link from "next/link";
import { motion, Variants } from "framer-motion";
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
const OurServices = [
  {
    name: "تصميم المواقع",
    link: "/services/web-development-company",
    icon: AiOutlineLaptop,
  },
  {
    name: "تصميم التطبيقات",
    link: "/services/app-development-company",
    icon: AiOutlineMobile,
  },
  {
    name: "التسويق الالكتروني",
    link: "/services/digital-marketing-company",
    icon: GiWorld,
  },
  {
    name: "تصميم متجر الكتروني",
    link: "/services/ecommerce-company",
    icon: AiOutlineShoppingCart,
  },
  {
    name: "سوشيال ميديا",
    link: "/services/social-company",
    icon: BsHash,
  },
  {
    name: "تجربة واجهة الموقع",
    link: "/services/ui-ux-design-company",
    icon: BsMagic,
  },
  {
    name: "ديزاين",
    link: "/services/gr-design-company",
    icon: BsBrush,
  },
  {
    name: "تحسين محركات البحث",
    link: "/services/seo-company",
    icon: HiArrowTrendingUp,
  },
];

export default function Service() {
  return (
    <motion.div variants={container}
    initial="hidden"
    whileInView="visible"
  viewport={{ once: true }} className="py-12 bg-gray-100">
      <div className="max-w-full mx-12 md:mx-20 sm:mx-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#E84E36] font-semibold">
          خدماتنا
          </h2>
          <p className="mt-2 md:text-5xl text-3xl font-bold text-gray-900">
          تقديم الحلول من كل نوع
          </p>
        </div>

        <div dir="rtl" className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-8 md:gap-y-10">
            {OurServices.map((service) => (
              <Link href={service.link} key={service.name}>
                  <motion.div variants={item} className="bg-white md:ml-8 sm:ml-0 p-8 relative cursor-pointer rounded-lg transition-all shadow-black hover:shadow-md">
                  <dt>
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#E84E36] text-white">
                      <service.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    
                  </dt>
                  <p className="mt-4 text-xl leading-8 mb-4 font-bold text-gray-900">
                      {service.name}
                  </p>
                  <Link href={service.link}>
                    <a className="flex hover:text-[#E84E36] font-medium transition-all">
                    <HiOutlineArrowLongRight className="ml-2 h-6 w-6" aria-hidden="true" />  تفاصيل أكثر 
                    </a>
                  </Link>
                </motion.div>
              </Link>
            ))}
          </dl>
        </div>
      </div>
    </motion.div>
  );
}