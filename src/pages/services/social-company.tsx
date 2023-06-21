import Head from "next/head";
import { WebWork } from "../../components/pages/Works";
import Navbar from "../../components/pages/Navbar";
import Link from "next/link";
import Image from "next/image";
import Web1 from "../../../public/images/social.png";
import Web2 from "../../../public/images/marketing.jpg";
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

const Web = () => {
  const title = 'خدمة سوشيال ميديا';
  const url = '/services/social-company';
  const description = 'شركة لاين اي تي أفضل شركة سوشيال ميديا في مصر - تصفح خدمة سوشيال ميديا في الشركة';
  const keywords = [ "أفضل شركة سوشيال ميديا في مصر","شركة سوشيال ميديا","أفضل سعر لشركة سوشيال ميديا","شركة ديزاين سوشيال ميديا","شركة ادارة صفحات سوشيال ميديا","شركة تطوير مواقع كاملة", "شركة لاين اي تي"]

    const [open, setOpen] = useState<false | null>(null);

    const toggle = (index: any) => {
        if(open === index) {
            return setOpen(null)
        }

        setOpen(index)
    }
    const accordionData = [
        {
            title: " كيف سأختار وكالة خدمات تسويق رقمي؟ ",
            desc: "للعثور على أفضل وكالة تسويق رقمي ، تحتاج إلى التحقق من النطاق الواسع من الخدمات التي يقدمونها ، والعملاء الذين يتعاملون معهم ، وتأسيسهم ومراجعاتهم في الدائرة الصناعية. تحقق أيضًا مما إذا كانت الوكالة ستشارك النتائج معك ، حيث أن نجاح مشروعك مرتبط ببعضها البعض. ستمنحك فكرة عامة عما إذا كنت ستختار وكالة خدمة التسويق الرقمي هذه أو تبحث عن وكالة أخرى موثوقة يمكنها مشاركة نتائجها معك بسعادة من خلال الحفاظ على علاقة مفتوحة والحفاظ على النزاهة المهنية.            "
        },
        {
            title: "لماذا تختار لاين اي تي كشركة تسويق رقمي",
            desc: "تفخر لاين اي تي بكونها شركة خدمات تسويق رقمي متكاملة الخدمات. لنفترض أنك بحاجة إلى موقع ويب مصمم للإعلان عن تطبيقك أو لديك متطلبات تحسين محركات البحث. يمكننا العمل معًا بسلاسة لتمكينك من تحقيق النمو التحولي.            "
        },
        {
            title: "ما هو أداء شركة خدمات التسويق الرقمي",
            desc: "تقوم وكالة خدمات التسويق الرقمي بتنفيذ نهج تسويق قائم على النتائج ، مع التركيز على تحقيق عائد الاستثمار ومساعدة الشركة على تحقيق أهدافها من خلال الخبرة الرقمية والتكنولوجيا. تقوم لاين اي تي بتطوير استراتيجيات لزيادة الوعي واكتساب القيادة. تحتاج الشركات الرقمية إلى أن تكون سريعة الخطى وأن تطابق تجربة العملاء مع منظور العلامة التجارية.            "
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

            <Navbar en="/en/services/social-company" />

        <motion.div variants={container}
    initial="hidden"
    whileInView="visible" className="flex lg:flex-row flex-col justify-around items-center lg:mt-20 md:mt-24 sm:mt-28 mt-14 min-w-7xl md:h-[90vh]">
      {/* image area */}
      <motion.div variants={item} className="md:ml-10 mx-0 md:mx-10 lg:ml-20 md:mr-10 lg:mr-0 order-first">
      <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/social_qeod05.webp" width={2000} height={2000} alt="أفضل شركة سوشيال ميديا في مصر والوطن العربي - لاين اي تي" objectFit="cover" />
        <CldOgImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/social_qeod05.webp" width={2000} height={2000} alt="أفضل شركة سوشيال ميديا في مصر والوطن العربي - لاين اي تي" objectFit="cover" />
      </motion.div>
      {/* textual area */}
      <div className="flex flex-col items-center justify-start md:ml-20 md:w-[-webkit-fill-available] mx-10 mt-10 md:mt-0">
        <p className="text-[#E84E36] font-semibold text-base">شركة رائدة في التسويق والأعلانات الممولة
</p>
        <h2 className="font-bold text-center lg:text-5xl text-2xl  text-gray-800">
        خدمات التسويق الرقمي
        </h2>
        <p dir="rtl" className="md:text-xl text-xl text-center font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          التسويق لعملك من خلال منصات السوشيال ميديا
        </p>
        <div  className="mt-10 flex justify-center items-center gap-5">
          <Link href="/portfolio" >
            <a className="text-white text-center md:mb-0 mb-2 bg-[#E84E36] font-semibold rounded-full px-5 md:py-4 py-2 hover:bg-black hover:shadow-lg">
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
      <p className="text-[#E84E36] font-semibold text-xl"> حول التسويق الرقمي
</p>
        <p dir="rtl" className="md:text-xl text-xl text-right font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          لا يمكن تجاهل الحاجة إلى خدمات التسويق الرقمي في القطاع التجاري اليوم. وقد اعتمدت الشركات خدمات التسويق الرقمي ، والحاجة إلى مقدمي خدمات التسويق الرقمي آخذ في الازدياد أيضا ، مواكبة الطلب. تم إنشاء العديد من شركات التسويق الرقمي هذه التي تقدم خدمات مماثلة لعملائها.
بولد براند ، هي خدمة تسويق رقمي في مصر ، تقدم حلول التسويق الرقمي والتسويق عبر البريد الإلكتروني للمستهلكين الموجودين على مستوى العالم. نحن نقوم بمهمة دعم شركتك عبر الإنترنت. يمكن الوصول إلى عدد من محركات البحث عبر الإنترنت.
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
        <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/marketing_gq9jj3.webp" width={1000} height={1000} alt="أفضل شركة سوشيال ميديا في مصر والوطن العربي - لاين اي تي" objectFit="cover" />
      </motion.div>
    </motion.div>

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

export default Web;
