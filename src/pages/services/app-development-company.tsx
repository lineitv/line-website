import Head from "next/head";
import Navbar from "../../components/pages/Navbar";
import { WebWork } from "../../components/pages/Works";
import Link from "next/link";
import Image from "next/image";
import Web1 from "../../../public/images/mobile.png";
import Web2 from "../../../public/images/web3.jpg";
import AccrodionItem from "../../components/pages/AccordionItem"
import {useState} from "react"
import { motion, Variants } from "framer-motion";
import { CldImage, CldOgImage } from "next-cloudinary";
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
const OurServices = [
    {
        name: "تطوير تطبيقات iOS",
        desc : "من ذوي الخبرة في تطوير تطبيقات iOS المذهلة لأجهزة iPhone و iPad و Apple Watch و Apple TV للشركات الناشئة في جميع أنحاء العالم ، باستخدام iOS SDK المناسب ولغات البرمجة الأصلية التي تدعم جميع أنواع أجهزة iOS المحمولة.      "
    },
    {
        name: "تطوير تطبيقات Android        ",
        desc : "يكرس مطورو تطبيقات Android المكدسون لدينا جهودهم لإنشاء تطبيقات Android المتطورة التي تعمل بسلاسة على أجهزة Android متعددة وتوفر أداءً غنيًا بالميزات باستخدام Android SDK والتقنيات الخاصة بالمنصة.        "
    },
    {
        name: "تطوير تطبيقات Flutter        ",
        desc : "يقدم مطورو الأجهزة المحمولة الخبراء لدينا الذين لديهم معرفة جيدة بتطوير التطبيقات الأصلية مجموعة شاملة من خدمات Flutter من البداية وينتجون تطبيقات كاملة لمنصات iOS و Android لتلبية متطلبات العميل        "
    },
    {
        name: "تطوير الويب للموبايل        ",
        desc : "يوفر مطورو الويب لدينا ذوو الخبرة العميقة في هذا المجال تطوير برامج ويب كاملة الدورة ، من التخطيط الشبكي إلى التصميم لإطلاق تطبيقات الويب في السوق باستخدام أحدث التقنيات والتصاميم التكيفية وأدوات صيانة المنتج المطلوبة.        "
    },
    {
        name: "تطوير تطبيقات React Native        ",
        desc : "يقدم مطورو الأجهزة المحمولة الخبراء لدينا الذين لديهم معرفة مناسبة بتطوير التطبيقات الأصلية مجموعة شاملة من خدمات React Native من البداية وينتجون تطبيقات كاملة لمنصات iOS و Android لتلبية متطلبات العميل.        "
    },
    {
        name: "تصميم واجهة مستخدم / UX لتطبيقات الهاتف المحمول        ",
        desc : "يقوم مصممو تطبيقات الأجهزة المحمولة المخصصون لدينا والذين يتمتعون بمهارات تصميم ملائمة ومعرفة بتصميم الواجهة ، بإنشاء تصميمات تتمحور حول المستخدم من أجل مشاركة ناجحة وتجربة مستخدم لمساعدة عملك على النمو من خلال حلول الأجهزة المحمولة الفعالة.        "
    },
  ];

const App = () => {
  const title = 'خدمة تطوير التطبيقات';
  const url = '/services/app-development-company';
  const description = 'شركة لاين اي تي أفضل شركة تصميم وتطوير تطبيقات هاتف في مصر - تصفح خدمة تصميم وتطوير تطبيقات الهاتف في الشركة';
  const keywords = [ "أفضل شركة تصميم تطبيقات الهاتف في مصر","شركة برمجة تطبيقات الهاتف","أفضل سعر لشركة تصميم وتطوير تطبيقات الهاتف","شركة تطوير الواجهة الامامية","شركة تطوير الواجهة الخلفية","شركة تطوير تطبيقات هاتف كاملة", "شركة لاين اي تي"]

    const [open, setOpen] = useState<false | null>(null);

    const toggle = (index: any) => {
        if(open === index) {
            return setOpen(null)
        }

        setOpen(index)
    }
    const accordionData = [
        {
            title: " كم من الوقت يستغرق تطوير تطبيق جوال؟ ",
            desc: " تطبيق متوسط حسب الطلب مثل أوبر اكل أو تطبقات الحجز : 5-6 أسابيع |  تطبيق بسيط : 3-4 أسابيع | تطبيق معقد حسب الطلب : 8-10 اسابيع :             "
        },
        {
            title: "ما هي تكلفة تطوير تطبيق الموبايل؟",
            desc: " بداية من 1000 دولار - 20000 دولار "
        },
        {
            title: "هل توقع على اتفاقية عدم إفشاء قبل البدء في مشروع؟",
            desc: "نعم فعلا. نوقع اتفاقية عدم إفشاء لحماية فكرتك. نحن نؤمن بالأمن أولاً ؛ وبالتالي ، فإننا نضمن أن تكون فكرة تطبيقك سرية تمامًا.            "
        },
        {
            title: "لدي بالفعل تصميم. هل يمكنك العمل مع التصاميم الموجودة؟",
            desc: "نعم فعلا. نحن نعمل مع التصميمات الحالية إذا كان التصميم الخاص بك يفي بمعايير الصناعة ، والاتجاهات الحالية"
        },
        {
            title: "ما الخطوات التي تتخذها لتقديم تطبيق خالٍ من الأخطاء؟",
            desc: "قبل إطلاق تطبيق جوال ، يتحقق فريقنا من جودة الكود وأمن الكود من خلال برنامج يسمى SonarQube. لجعل تطبيقك خاليًا من الأخطاء وسريع الاستجابة ، نتحقق من التوافق والأداء والواجهة وقابلية الاستخدام.            "
        },
        {
            title: "بعد تطوير تطبيق جوال ، هل يمكنك المساعدة في جعله مباشرًا على App Store و Play Store؟",
            desc: "نعم طبعا. بعد تطوير تطبيق الهاتف المحمول الخاص بك ، سننشر تطبيقك على App Store و Play Store وفقًا للإرشادات.            "
        },
        {
            title: "هل تقدمون خدمات صيانة التطبيق وترقيته؟",
            desc: "نحن نقدم ثلاثة أشهر من الدعم الخالي من الأخطاء. بعد ثلاثة أشهر ، نوقع عقد صيانة سنوي إذا لزم الأمر.            "
        },
    ]

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
           <Navbar en="/en/services/app-development-company"/>

        <motion.div variants={container}
    initial="hidden"
    whileInView="visible" className="flex lg:flex-row flex-col justify-around items-center lg:mt-20 md:mt-24 sm:mt-28 mt-24 min-w-7xl md:h-[90vh]">
      {/* image area */}
      <motion.div variants={item} className="md:ml-10 mx-10 lg:ml-20 md:mr-10 lg:mr-0 order-first">
      <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/mobile_ucxb6z.webp" width={2000} height={2000} alt="أفضل شركة برمجة تطبيقات الهاتف في مصر والوطن العربي - لاين اي تي" objectFit="cover" />
        <CldOgImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/mobile_ucxb6z.webp" width={2000} height={2000} alt="أفضل شركة برمجة تطبيقات الهاتف في مصر والوطن العربي - لاين اي تي" objectFit="cover" />
      </motion.div>
      {/* textual area */}
      <div className="flex flex-col items-center justify-start md:ml-20 md:w-[-webkit-fill-available] mx-10 mt-10 md:mt-0">
        <p className="text-[#E84E36] font-semibold text-base">شركة رائدة في برمجة التطبيقات
</p>
        <h2 className="font-bold text-center lg:text-5xl text-2xl  text-gray-800">
          برمجة التطبيقات
        </h2>
        <p dir="rtl" className="md:text-xl text-xl text-center font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          نحن نصمم ونطور تطبيقات الهاتف المحمول الأصلية (iOS و Android) لعملك. يعمل مطورو التطبيقات المتمرسون لدينا على جعل تجارب تطبيقات الجوال الخاصة بك آمنة وقابلة للتطوير ومستدامة.
        </p>
        <div  className="mt-10 flex justify-center items-center gap-5">
          <Link href="/portfolio" >
            <a className="text-white  md:mb-0 mb-2 bg-[#E84E36] font-semibold rounded-full px-5 md:py-4 py-2 hover:bg-black hover:shadow-lg">
            حدد موعدا للاستشارة المجانية
            </a>
          </Link>
        </div>
      </div>
    </motion.div>

    <motion.div variants={container}
    initial="hidden"
    whileInView="visible" className="flex lg:flex-row flex-col justify-around items-center lg:mt-4 md:mt-4 sm:mt-4 mt-4 min-w-7xl md:h-[70vh]">
    
      <div className="flex flex-col items-center justify-center md:ml-20 md:w-[-webkit-fill-available] mx-10 mt-10 md:mt-0">
      <p className="text-[#E84E36] font-semibold text-xl">شركة تصميم وتطوير تطبيقات الموبايل
</p>
        <p dir="rtl" className="md:text-xl text-xl text-right font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          هل ترغب في تطوير تطبيق جوال لعملك؟ تعرف بولد براند ما تتطلبه لتحويل فكرة تطبيقك إلى تطبيق جوال ناجح. من خلال تجربة تطوير أكثر من 100 مشروع ناجح لتطبيقات الأجهزة المحمولة لمختلف الفئات والأنظمة الأساسية ، فإننا نعطي المعنى الصحيح لأفكار تطبيقات الجوال الخاصة بك. لقد نجح فريقنا من المتحمسين للتكنولوجيا في خدمة العلامات التجارية الرائدة في العالم والشركات والشركات الناشئة أيضًا.
        </p>
        <div className="mt-10 flex justify-center items-center gap-5">
        <Link href="/portfolio" >
            <a className="text-white md:mb-0 mb-2 bg-[#E84E36] font-semibold rounded-full px-5 md:py-4 py-2 hover:bg-black hover:shadow-lg">
            حدد موعدا للاستشارة المجانية
            </a>
          </Link>
        </div>
      </div>
      <motion.div variants={item} className="lg:mr-20 md:mr-10 mx-10 lg:mx-0 sm:order-last order-first">
      <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/web3_wornuz.webp" width={1000} height={1000} alt="أفضل شركة برمجة تطبيقات الهاتف في مصر والوطن العربي - لاين اي تي" objectFit="cover" />
      </motion.div>
    </motion.div>

    <div className="py-12 bg-gray-100">
      <div className="max-w-full mx-12 md:mx-20 sm:mx-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#E84E36] font-semibold">
          خدمات تطوير تطبيقات الموبايل
          </h2>
          <p className="mt-2 md:text-5xl text-3xl font-bold text-gray-900">
          خدمات تطوير تطبيقات الهاتف المحمول التي نقدمها
          </p>
        </div>

        <div className="mt-10">
          <dl dir="rtl" className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-1 md:gap-y-10">
            {OurServices.map((service) => (
              <div key={service.name} className="bg-white md:ml-8 sm:ml-0 p-8 relative rounded-lg transition-all shadow-black hover:shadow-md">
                <p className="mt-4 text-lg leading-8 mb-4 font-bold text-gray-900">
                    {service.name}
                </p>
                <p className="mt-4 text-base mb-4 font-normal text-[rgba(38,39,41,.7)]">
                    {service.desc}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>

    <WebWork />

    <section className="grid place-items-center bg-gray-100">
        <div className="max-w-7xl">
            {accordionData.map((data,index) => {
                return <AccrodionItem key={index} toggle={() =>toggle(index)} title={data.title} desc={data.desc} open={index === Number(open)} />
            })}
        </div>
    </section>
        </>
    )
};

export default App;
