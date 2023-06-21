import Head from "next/head";
import Navbar from "../../components/pages/Navbar";
import { WebWork } from "../../components/pages/Works";
import Link from "next/link";
import Image from "next/image";
import Web1 from "../../../public/images/ecommerce.png";
import Web2 from "../../../public/images/ecommerce.jpg";
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
        name: "تطوير WooCommerce",
        desc : "بعد عدة سنوات من الخبرة في توفير حلول WooCommerce من خلال WordPress الرائعة ، نقدم تطوير WordPress مخصصًا لتطوير متجر بيع منتجات وتوفير طرق الدفع WordPress وتطوير المكونات الإضافية وتخصيص السمات التي تؤدي إلى مشاركة عالية للمستخدم."
    },
    {
        name: "تطوير Shopify",
        desc : "بعد عدة سنوات من الخبرة في توفير حلول متاجر Shopify الرائعة ، نقدم تطوير Shopify مخصصًا لتطوير متجر بيع منتجات وتوفير طرق الدفع Shopify وتطوير المكونات الإضافية وتخصيص السمات التي تؤدي إلى مشاركة عالية للمستخدم."
    },
    {
        name: "تطوير Magento",
        desc : "بعد عدة سنوات من الخبرة في توفير حلول متاجر Magento الرائعة ، نقدم تطوير Magento مخصصًا لتطوير متجر بيع منتجات وتوفير طرق الدفع Magento وتطوير المكونات الإضافية وتخصيص السمات التي تؤدي إلى مشاركة عالية للمستخدم."
    },
  ];

const Web = () => {
  const title = 'خدمة تصميم متاجر إلكترونية';
  const url = '/services/ecommerce-company';
  const description = 'شركة لاين اي تي أفضل شركة تصميم متاجر إلكترونية في مصر - تصفح خدمة المتاجر اللإلكترونية في الشركة';
  const keywords = [ "أفضل شركة متاجر إلكترونية في مصر","شركة متاجر إلكترونية","أفضل سعر لشركة متاجر إلكترونية","شركة شوبيفاي","شركة ماجينتو","شركة تصميم هويات مواقع كاملة", "شركة لاين اي تي"]

    const [open, setOpen] = useState<false | null>(null);

    const toggle = (index: any) => {
        if(open === index) {
            return setOpen(null)
        }

        setOpen(index)
    }
    const accordionData = [
        {
            title: "عندما ينتهي العميل من التسوق ، هل يمكنني إرسال إيصال تأكيد الفاتورة؟",
            desc: "يتم إرسال إيصال الفاتورة تلقائيًا عبر برنامج التجارة الإلكترونية.            "
        },
        {
            title: "هل يمكنني إرسال رسالة إخبارية بالبريد الإلكتروني إلى جميع العملاء من خلال دفتر عناوين بريد إلكتروني بأمر واحد؟",
            desc: "القائمة البريدية للرسائل الإخبارية للبريد الإلكتروني ليست جزءًا من برنامج التجارة الإلكترونية.            "
        },
        {
            title: "هل يمكنني الحصول على مربع بحث للعميل إذا كان يرغب في البحث عن العناصر؟",
            desc: "نعم ، نحن نقدم أداة مربع بحث لموقع الويب.            "
        },
        {
            title: "هل يمكن قبول جميع بطاقات الائتمان؟ إذا لم يكن الأمر كذلك ، من فضلك قل لي أي منها لا يمكن قبوله وهل لديك دفع بال؟",
            desc: "نعم ، يمكن قبول جميع بطاقات الائتمان الرئيسية. يمكن أن يتكامل برنامج التجارة الإلكترونية مع عدد من أنظمة الدفع المختلفة ، على سبيل المثال paypal ، و protx ، و nochex ، و worldpay ، و google checkout ، و Barclays epdq - يمكنك فقط اختيار واحد منها لاستخدامه في الموقع الإلكتروني            "
        },
        {
            title: "هل يمكنني الحصول على لافتة إعلانية في صورة فلاش على الموقع؟",
            desc: "الموقع لا يأتي مع إعلانات الفلاش - يمكنك الحصول على مصدر خارجي لتصميم فلاش بانر ويمكننا إضافته إلى موقع الويب. كبديل ، يمكننا دمج لافتات الصور الدوارة لتناسب الغرض.            "
        },
        {
            title: "هل يمكنني جعل موقعي يبدو مشابهًا مثل Amazon أو موقع نون",
            desc: "من الصعب الحصول على موقع يشبه 100٪ المواقع التي ذكرتها. يمكننا تصميم شيء مشابه.            "
        },
        {
          title: "هل يمكنني الحصول على هدية قسيمة على موقع الويب الخاص بي وكيف سيعمل ذلك؟",
          desc: "نعم ، هناك تسهيلات لإهداء القسيمة تأتي مع البرنامج.          "
        },
        {
          title: "هل يمكن لشركتك مساعدتي في تحسين موقع الويب وحملات التسويق الخاصة بي باستخدام Google وما إلى ذلك؟",
          desc: "نحن نقدم وسيلة لتحسين محرك البحث للموقع. ويمكن الأتفاق لنتعامل مع الحملات التسويقية.          "
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
            <Navbar en="/en/services/ecommerce-company"/>

        <motion.div variants={container}
    initial="hidden"
    whileInView="visible" className="flex lg:flex-row flex-col justify-around items-center lg:mt-20 md:mt-24 sm:mt-28 mt-24 min-w-7xl md:h-[90vh]">
      {/* image area */}
      <motion.div variants={item} className="md:ml-10 mx-10 lg:ml-20 md:mr-10 lg:mr-0 order-first">
      <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/ecommerce_tfp2hk.webp" width={2000} height={2000} alt="أفضل شركة تصميم متاجر إلكترونية في مصر والوطن العربي - لاين اي تي" objectFit="cover" />
        <CldOgImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/ecommerce_tfp2hk.webp" width={2000} height={2000} alt="أفضل شركة تصميم متاجر إلكترونية في مصر والوطن العربي - لاين اي تي" objectFit="cover" />
      </motion.div>
      {/* textual area */}
      <div className="flex flex-col items-center justify-start md:ml-20 md:w-[-webkit-fill-available] mx-10 mt-10 md:mt-0">
        <p className="text-[#E84E36] font-semibold text-base">شركة رائدة في التجارة الإلكترونية
</p>
        <h2 className="font-bold lg:text-5xl text-center text-2xl  text-gray-800">
       تصميم متجر إلكتروني
        </h2>
        <p dir="rtl" className="md:text-xl text-xl text-center font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          ارتق بعملك إلى المستوى التالي من خلال العمل مع فريقنا من المتخصصين في الصناعة والشركاء الاستراتيجيين الذين يقدمون فقط أفضل حلول تكنولوجيا المعلومات والتجارة الإلكترونية في السوق.
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
      <p className="text-[#E84E36] font-semibold text-xl">التجارة الإلكترونية التنمية
</p>
        <p dir="rtl" className="md:text-xl text-xl text-right font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          نحن شركة رائدة في مجال تطوير مواقع التجارة الإلكترونية ، نصمم حلول تجارة إلكترونية رائعة تعتمد على شبكة الإنترنت لتجربة تسوق رائعة عبر الإنترنت. تشمل خدمات تطوير مواقع التجارة الإلكترونية الخاصة بنا تصميم ويب كامل لمتجر التجارة الإلكترونية عبر الإنترنت وتطوير ويب مخصص للتجارة الإلكترونية لشركات البيع بالتجزئة الصغيرة والمتوسطة والكبيرة الحجم. ساعدتنا خبرتنا في منصات التجارة الإلكترونية الشهيرة مثل تطوير مواقع التجارة الإلكترونية القائمة على Magento ، و WooCommerce ، و OsCommerce ، و Zen Cart ، و OpenCart ، و Shopify ، وما إلى ذلك ، في تقديم حلول ويب التجارة الإلكترونية ذات المستوى العالمي مع نظام قوي لإدارة المحتوى عبر الإنترنت.
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
      <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/ecommerce_rxtw54.webp" width={1000} height={1000} alt="أفضل شركة تصميم متاجر إلكترونية في مصر والوطن العربي - لاين اي تي" objectFit="cover" />
      </motion.div>
    </motion.div>

    <div className="py-12 bg-gray-100">
      <div className="max-w-full mx-12 md:mx-20 sm:mx-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#E84E36] font-semibold">
          خدمات تطوير متجر بيع
          </h2>
          <p className="mt-2 md:text-5xl text-3xl font-bold text-gray-900">
          خدمات تطوير المتاجر التي نقدمها
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
