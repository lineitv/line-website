import Head from "next/head";
import { WebWork } from "../../components/pages/Works";
import Navbar from "../../components/pages/Navbar";
import Link from "next/link";
import Image from "next/image";
import Web1 from "../../../public/images/uiux.png";
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
const OurServices = [
    {
        name: "عينات التصميم الأولية",
        desc : "يشارك فريقنا المسودات الأولية وعينات من تصميمات واجهة المستخدم ويقترح أفضل نموذج لعملك لتحقيق أهدافك.        "
    },
    {
        name: "تحقيق أهداف خدمة العملاء والتسويق        ",
        desc : "تقوم فرق الخبراء في لاين اي تي  بإجراء اختبارات دقيقة للمستخدم باستمرار لضمان واجهة مستخدم تلبي أهدافك التسويقية وخدمة العملاء ، بما في ذلك تحسين معدلات التحويل ومشاركة المستخدمين والاحتفاظ بهم.        "
    },
    {
        name: "تصميم تنافسي ومخصص        ",
        desc : "احصل على تصميمات مخصصة تتبع أحدث اتجاهات التكنولوجيا. في لاين اي تي ، نبني تصميمات فريدة لواجهة المستخدم تجعلك في صدارة منافسيك.        "
    },
    {
        name: "تعيين المستخدم        ",
        desc : "يساعدك فريقنا على تخطيط رحلات المستخدمين على النظام الأساسي الخاص بك لفهم سلوكهم وكيفية تفاعلهم بشكل أفضل مع برنامجك.        "
    },
    {
        name: "تحليل المستخدم        ",
        desc : "احصل على تحليلات شاملة على الويب وتحليلات تنافسية وتحليلات للمستخدم واختبار أولي للمستخدم لمساعدتك في إنشاء رحلات المستخدم المثالية داخل تطبيقك ، ومواقع الويب ، والأنظمة الأساسية ، والبوابات ، وما إلى ذلك.        "
    },
    {
        name: "اختبارات",
        desc : "احصل على اختبار شامل لقابلية الاستخدام للنموذج الأولي الخاص بك للتأكد من أن تصميم UX يلبي أهدافك ويتجنب أخطاء الاستخدام.        "
    },
  ];

const Web = () => {
  const title = 'خدمة تجربة المستخدم';
  const url = '/services/ui-ux-design-company';
  const description = 'شركة لاين اي تي أفضل شركة تجربة المستخدم و مواقع في مصر - تصفح خدمة المستخدم في الشركة';
  const keywords = [ "أفضل شركة تجربة مستخدم في مصر","شركة تجربة المستخدم","أفضل سعر لشركة تجربة مستخدم مواقع","شركة تطوير الواجهة الامامية","شركة تطوير الواجهة الخلفية","شركة ui ux", "شركة لاين اي تي"]
    const [open, setOpen] = useState<false | null>(null);

    const toggle = (index: any) => {
        if(open === index) {
            return setOpen(null)
        }

        setOpen(index)
    }
    const accordionData = [
        {
            title: "حافظ على رضا عملائك            ",
            desc: "يحافظ تصميم UI / UX القوي على رضا عملائك ويساعدك على جذب عملاء جدد لتعزيز ولاء العلامة التجارية والبقاء في صدارة المنافسة.            "
        },
        {
            title: "زيادة فرص توليد الدخل            ",
            desc: "خطط لتجربة المستخدمين على نظامك الأساسي واستفد من الفرص المحتملة لتحويل المستخدمين إلى مشترين من خلال معرفة ما يستجيب له المستخدمون بشكل أفضل.            "
        },
        {
            title: "تحسين الوقت والتكلفة            ",
            desc: "حافظ على نهج يركز على المستخدم لإنشاء تصميم UI / UX قابل للتطوير وتوفير المال والجهد الضائع في مشكلات قابلية الاستخدام.            "
        },
        {
            title: "احصل على المزيد من الأفكار            ",
            desc: "افهم سلوك المستخدم واحصل على مزيد من الأفكار حول أفضل طريقة للتفاعل معهم.            "
        },
        {
            title: "عزز علامتك التجارية            ",
            desc: "يتخذ عملاؤك قرارات أثناء النظر إلى الشاشة ، مما يعني أن تصميم UI / UX عالي الجودة يجذب جمهورك المستهدف ، ويزيد من أرباحك ويعزز علامتك التجارية.            "
        },
        {
            title: "زيادة العائد على الاستثمار            ",
            desc: "يعزز تصميم UI / UX التفاعلي معدلات التحويل والتعرف على العلامة التجارية ، مما يؤدي بدوره إلى تحسين عائد الاستثمار.            "
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
            <Navbar en="/en/services/ui-ux-design-company"/>

        <motion.div variants={container}
    initial="hidden"
    whileInView="visible" className="flex lg:flex-row flex-col justify-around items-center lg:mt-20 md:mt-24 sm:mt-28 mt-24 min-w-7xl md:h-[90vh]">
      {/* image area */}
      <motion.div variants={item} className="md:ml-10 mx-10 lg:ml-20 md:mr-10 lg:mr-0 order-first">
      <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/uiux_uw1ved.webp" width={2000} height={2000} alt="أفضل شركة تصميم تجربة المستخدم في مصر والوطن العربي - لاين اي تي" objectFit="cover" />
        <CldOgImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/uiux_uw1ved.webp" width={2000} height={2000} alt="أفضل شركة تصميم تجربة المستخدم في مصر والوطن العربي - لاين اي تي" objectFit="cover" />
      </motion.div>
      {/* textual area */}
      <div className="flex flex-col items-center justify-start md:ml-20 md:w-[-webkit-fill-available] mx-10 mt-10 md:mt-0">
        <p className="text-[#E84E36] font-semibold text-base">شركة رائدة في تصميم المواقع والتطبيقات
</p>
        <h2 className="font-bold lg:text-5xl text-2xl  text-gray-800">
        UI UX شركة تصميم 
        </h2>
        <p dir="rtl" className="md:text-xl text-xl text-center font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          قدِّم تجارب ممتازة لجمهورك من خلال تصميمات جذابة لواجهة المستخدم / تجربة المستخدم
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

    <div className="py-12 bg-gray-100">
      <div className="max-w-full mx-12 md:mx-20 sm:mx-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#E84E36] font-semibold">
          UI UX خدمات تطوير 
          </h2>
          <p className="mt-2 md:text-5xl text-3xl font-bold text-gray-900">
          خدمات تصميم واجهة وتجربة المستخدم
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

export default Web;
