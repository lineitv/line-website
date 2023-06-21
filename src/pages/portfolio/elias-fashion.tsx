import React from 'react'
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { AiFillSound } from 'react-icons/ai';
import Navbar from '../../components/pages/Navbar';
import { motion, Variants } from "framer-motion";
import Link from 'next/link';
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
  const title = 'موقع الياس للبدل';
  const url = '/portfolio/elias-fashion';
  const description = 'موقع الياس للبدل من تصميم وتطوير شركة لاين اي تي - أفضل شركة تصميم مواقع وتطبيقات في مصر';
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
            <Navbar en="/en/portfolio/elias-fashion"/>

        <motion.div variants={container}
    initial="hidden"
    whileInView="visible" className="flex lg:flex-row flex-col justify-around items-center lg:mt-16 md:mt-24 sm:mt-28 mt-14 min-w-7xl md:h-[auto]">
      {/* image area */}
      <motion.div variants={item} className="md:ml-10 mx-0 md:mx-10 lg:ml-20 md:mr-10 lg:mr-0 order-first">
      <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/elias_ocibsa.webp" width={2000} height={2000} alt="موقع إلياس للبدل من تصميم شركة لاين اي تي - افضل شركة تصميم وتطوير مواقع وتطبيقات في مصر" objectFit="cover" />
        <CldOgImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/elias_ocibsa.webp" width={2000} height={2000} alt="موقع إلياس للبدل من تصميم شركة لاين اي تي - افضل شركة تصميم وتطوير مواقع وتطبيقات في مصر" objectFit="cover" />
      </motion.div>
      {/* textual area */}
      <div dir='rtl' className="flex flex-col items-center justify-start md:ml-20 md:w-[-webkit-fill-available] mx-10 mt-10 md:mt-0">
        <p className="text-[#E84E36] font-semibold text-base">شركة LINE IT   
</p>
        <h2 className="font-bold text-center lg:text-5xl text-2xl  text-gray-800">
        موقع إلياس للبدل
        </h2>
        <p dir="rtl" className="md:text-xl text-xl text-center font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          التسويق لعملك من خلال منصات السوشيال ميديا
        </p>
        <div className="mt-10 flex justify-center items-center gap-5">
        <a target='_blank' href='https://elias-designer.com' className="text-white bg-[#E84E36] font-semibold rounded-full px-5 md:py-4 py-2 hover:bg-black hover:shadow-lg">
            مشاهدة الموقع
          </a>
          <a target='_blank' href='https://www.youtube.com/watch?v=DPfJYbS158g' className="bg-gray-50 rounded-full shadow-lg p-2">
            <BsFillPlayCircleFill className="text-[#E84E36] md:text-5xl text-4xl hover:text-black hover:shadow-lg" />
          </a>
        </div>
      </div>
    </motion.div>

        <motion.div variants={container}
    initial="hidden"
    animate="visible" className="flex lg:flex-row flex-col justify-around items-center lg:mt-14 md:mt-24 sm:mt-28 mt-24 min-w-7xl md:h-[70vh]">
      <div className="flex flex-col items-center justify-center md:ml-20 md:w-[-webkit-fill-available] mx-10 mt-10 md:mt-0">
        <p className="bg-[#E84E36] font-semibold text-base p-1 text-white rounded">فكرة الموقع
        </p>
        <p dir='rtl' className="md:text-xl text-xl font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          إنه موقع ويب سريع الاستجابة للتسوق لبدلات الرجال تم تصميمه بغرض عرض أزياء مختلفة داخل المتجر لتسهيل عملية التصفح. يعمل الموقع داخل مصر ويقدم العديد من الخدمات مثل: العروض والخصومات والمقالات على مختلف المنتجات وكتابة الكلمات الرئيسية للمستخدمين الذين يبحثون عن بدلات رجالية وتطوير العلامة التجارية عبر الإنترنت مع أفضل تحسين محركات البحث.
        </p>
        <div className="mt-10 flex justify-center items-center gap-5">
          <a target='_blank' href='https://www.youtube.com/watch?v=DPfJYbS158g' className="bg-gray-50 rounded-full shadow-lg p-2">
            <BsFillPlayCircleFill className="text-[#E84E36] md:text-5xl text-4xl hover:text-black hover:shadow-lg" />
          </a>
        </div>
      </div>
      <motion.div variants={item} className="md:mr-10 lg:mr-20 md:ml-10 lg:ml-0 lg:order-last order-first">
      <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/elias1_osbwqf.webp" width={2000} height={2000} alt="موقع إلياس للبدل من تصميم شركة لاين اي تي - افضل شركة تصميم وتطوير مواقع وتطبيقات في مصر" objectFit="cover" />
      </motion.div>
    </motion.div>

    <motion.div variants={container}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }} className="flex lg:flex-row flex-col justify-around items-center lg:mt-4 md:mt-4 sm:mt-4 mt-4 min-w-7xl md:h-[70vh]">
    <motion.div variants={item} className="lg:ml-20 md:ml-10 lg:order-first order-first">
    <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/elias2_fspfi7.webp" width={2000} height={2000} alt="موقع إلياس للبدل من تصميم شركة لاين اي تي - افضل شركة تصميم وتطوير مواقع وتطبيقات في مصر" objectFit="cover" />
      </motion.div>
      <div className="flex flex-col items-center justify-center md:ml-20 md:w-[-webkit-fill-available] mx-10 mt-10 md:mt-0">
        <p dir='rtl' className="bg-[#E84E36] font-semibold text-base p-1 text-white rounded">نتائج SEO
        </p>
        <p dir='rtl' className="md:text-xl text-xl font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          قمنا بجمع جميع العلامات المتعلقة بعلامة إلياس للبدلات الرجالية ، ثم قمنا بضبطها للتأكد من أن الكلمات التي سنكتبها مناسبة لمحركات البحث بدقة ، وملء جميع الصور والمدونة بكلمات مناسبة تمامًا للعملاء - - نحن أفضل شركة مناسبة لنمو عملك على الإنترنت.
        </p>
        <div className="mt-10 flex justify-center items-center gap-5">
          <a target='_blank' href='https://www.youtube.com/watch?v=DPfJYbS158g' className="bg-gray-50 rounded-full shadow-lg p-2">
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
        <p className="bg-[#E84E36] font-semibold text-base p-1 text-white rounded">نمو إلياس أونلاين
        </p>
        <p dir='rtl' className="md:text-xl text-xl font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          نحن نتحدث الآن عن نمو ماركة إلياس لبدلات الرجال
        </p>
        <ul dir='rtl' className='list-decimal md:text-base text-base font-semibold text-[rgba(38,39,41,.7)]'>
            <li>حل مشكلة عدم وجود الفروع على خرائط جوجل</li>
            <li>صفحة خاصة لجميع فروع براند الياس أولاً في البحث</li>
            <li>اعمل على جميع الجوانب التي يبحث عنها العملاء على الإنترنت لمساعدة العلامة التجارية على النمو بشكل أكبر</li>
            <li>ربط [Google Analytics، Facebook Pixel]</li>
          </ul>
          <p dir='rtl' className="md:text-xl text-xl font-semibold text-[rgba(38,39,41,.7)] lg:block block">
<AiFillSound className='inline' />كانت النتيجة مذهلة مع مشاهدات عالية للموقع من خلال البحث ووسائل التواصل الاجتماعي.
          </p>
        <div className="mt-10 flex justify-center items-center gap-5">
          <a target='_blank' href='https://www.youtube.com/watch?v=DPfJYbS158g' className="bg-gray-50 rounded-full shadow-lg p-2">
            <BsFillPlayCircleFill className="text-[#E84E36] md:text-5xl text-4xl hover:text-black hover:shadow-lg" />
          </a>
        </div>
      </div>
      <motion.div variants={item} className="md:mr-10 lg:mr-20 md:ml-10 lg:ml-0 lg:order-last order-first">
      <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/elias3_rnienj.webp" width={2000} height={2000} alt="موقع إلياس للبدل من تصميم شركة لاين اي تي - افضل شركة تصميم وتطوير مواقع وتطبيقات في مصر" objectFit="cover" />
      </motion.div>
    </motion.div>

    <motion.div variants={container}
    initial="hidden"
     whileInView="visible"
  viewport={{ once: true }} className="flex lg:flex-row flex-col justify-around items-center lg:mt-4 md:mt-4 sm:mt-4 mt-4 min-w-7xl md:h-[70vh]">
    <motion.div variants={item} className="lg:ml-20 md:ml-10 lg:order-first order-first">
    <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/elias4_kgaqtc.webp" width={2000} height={2000} alt="موقع إلياس للبدل من تصميم شركة لاين اي تي - افضل شركة تصميم وتطوير مواقع وتطبيقات في مصر" objectFit="cover" />
      </motion.div>
      <div className="flex flex-col items-center justify-center md:ml-20 md:w-[-webkit-fill-available] mx-10 mt-10 md:mt-0">
        <p className="bg-[#E84E36] font-semibold text-base p-1 text-white rounded">التصميم والتسويق
        </p>
        <ul dir='rtl' className='list-decimal md:text-xl text-xl font-semibold text-[rgba(38,39,41,.7)]'>
            <li>تصميم +20 صور</li>
            <li>تصوير +5 فيديو</li>
            <li>إنشاء حملتين إعلانيتين على فيسبوك وإنستجرام تشمل [مقاطع فيديو ، صور].</li>
          </ul>
        <div className="mt-10 flex justify-center items-center gap-5">
          <button className="bg-gray-50 rounded-full shadow-lg p-2">
            <BsFillPlayCircleFill className="text-[#E84E36] md:text-5xl text-4xl hover:text-black hover:shadow-lg" />
          </button>
        </div>
      </div>
    </motion.div>

    <motion.div variants={container}
    initial="hidden"
     whileInView="visible"
  viewport={{ once: true }} className="flex lg:flex-row flex-col justify-around items-center lg:mt-4 md:mt-4 sm:mt-4 mt-4 min-w-7xl md:h-[70vh]">
    <motion.div variants={item} className="lg:ml-20 md:ml-10 lg:order-first order-first">
    <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/elias5_vnbppg.webp" width={2000} height={2000} alt="موقع إلياس للبدل من تصميم شركة لاين اي تي - افضل شركة تصميم وتطوير مواقع وتطبيقات في مصر" objectFit="cover" />
      </motion.div>
      <motion.div variants={item} className="md:mr-10 lg:mr-20 md:ml-10 lg:ml-0 lg:order-last order-first">
      <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/elias6_x9xv0s.webp" width={2000} height={2000} alt="موقع إلياس للبدل من تصميم شركة لاين اي تي - افضل شركة تصميم وتطوير مواقع وتطبيقات في مصر" objectFit="cover" />
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
            تابعنا علي اليوتيوب
          </a>
        </div>
      </div>
      <motion.div variants={item} className="md:mr-10 lg:mr-20 md:ml-10 lg:ml-0 lg:order-last order-first">
      <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/elias_ocibsa.webp" width={2000} height={2000} alt="موقع إلياس للبدل من تصميم شركة لاين اي تي - افضل شركة تصميم وتطوير مواقع وتطبيقات في مصر" objectFit="cover" />
      </motion.div>
    </motion.div>
    </>
  )
}

export default eliasFashion;