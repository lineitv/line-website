import React from 'react'
import { BsFillPlayCircleFill } from 'react-icons/bs';
import Navbar from '../../components/pages/Navbar';
import { motion, Variants } from "framer-motion";
import { CldImage, CldOgImage } from 'next-cloudinary';
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import ShemaMeta from "../../components/meta/ShemaMeta";
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
  const title = 'متجر سيجال لبيع الأثاث';
  const url = '/portfolio/segalfurniture';
  const description = 'متجر سيجال لبيع الأثاث من تصميم وتطوير شركة لاين اي تي - أفضل شركة تصميم مواقع وتطبيقات في مصر';
  const keywords = [ "أفضل شركة تصميم مواقع في مصر","شركة برمجة مواقع","شركة برمجة تطبيات هاتف","شركة سيو","أفضل سعر لشركة تصميم مواقع","شركة تطوير الواجهة الامامية","شركة تطوير الواجهة الخلفية","شركة تطوير مواقع كاملة", "شركة لاين اي تي"]

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
            <Navbar en="/en/portfolio/segalfurniture"/>


        <motion.div variants={container}
    initial="hidden"
    animate="visible" className="flex lg:flex-row flex-col justify-around items-center lg:mt-14 md:mt-24 sm:mt-28 mt-24 min-w-7xl md:h-[70vh]">
      <div className="flex flex-col items-center justify-center md:ml-20 md:w-[-webkit-fill-available] mx-10 mt-10 md:mt-0">
        <p className="bg-[#E84E36] font-semibold text-base p-1 text-white rounded">فكرة الموقع
        </p>
        <p dir='rtl' className="md:text-xl text-xl font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          إنه موقع ويب سريع الاستجابة للتجارة الإلكترونية وبيع الأثاث لمعرض سيجال في مصر تم تصميمه بغرض عرض وبيع المنتجات المختلفة للمعرض لتسهيل عملية التصفح. يعمل الموقع علي جميع الشاشات ويقدم العديد من الخدمات مثل: العروض والخصومات والمقالات على مختلف المنتجات وكتابة الكلمات الرئيسية للمستخدمين الذين يبحثون عن الكابتن او موديل بشكل عام وتطوير العلامة التجارية عبر الإنترنت مع أفضل تحسين محركات البحث.
        </p>
        <div className="mt-10 flex justify-center items-center gap-5">
        <a target='_blank' href='https://www.segalfurniture.com' className="text-white bg-[#E84E36] font-semibold rounded-full px-5 md:py-4 py-2 hover:bg-black hover:shadow-lg">
            مشاهدة الموقع
          </a>
          <a target='_blank' href='https://www.youtube.com/@lineit-company/videos' className="bg-gray-50 rounded-full shadow-lg p-2">
            <BsFillPlayCircleFill className="text-[#E84E36] md:text-5xl text-4xl hover:text-black hover:shadow-lg" />
          </a>
        </div>
      </div>
      <motion.div variants={item} className="md:mr-10 lg:mr-20 md:ml-10 lg:ml-0 lg:order-last order-first">
      <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/work-segal_ayesev.webp" width={2000} height={2000} alt='متجر سيجال لبيع الأثاث من تصميم وتطوير شركة لاين اي تي - أفضل شركة تصميم مواقع وتطبيقات في مصر' objectFit="cover" />
      <CldOgImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/work-segal_ayesev.webp" width={2000} height={2000} alt='متجر سيجال لبيع الأثاث من تصميم وتطوير شركة لاين اي تي - أفضل شركة تصميم مواقع وتطبيقات في مصر' objectFit="cover" />
      </motion.div>
    </motion.div>

    </>
  )
}

export default eliasFashion;