import Head from "next/head";
import { WebWork } from "../components/pages/Works";
import Navbar from "../components/pages/Navbar";
import Link from "next/link";
import Image from "next/image";
import Web1 from "../../public/images/company.png";
import Web2 from "../../public/images/web-2.webp";
import AccrodionItem from "../components/pages/AccordionItem"
import {useState} from "react"
import { motion, Variants } from "framer-motion";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import ShemaMeta from "../components/meta/ShemaMeta";
import { CldImage, CldOgImage } from "next-cloudinary";
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
  const title = 'الشركة';
  const url = '/company';
  const description = ' شركة لاين اي تي - أفضل شركة تصميم مواقع وتطبيقات في مصر';
  const keywords = [ "أفضل شركة تصميم مواقع في مصر","شركة برمجة مواقع","شركة برمجة تطبيات هاتف","شركة سيو","أفضل سعر لشركة تصميم مواقع","شركة تطوير الواجهة الامامية","شركة تطوير الواجهة الخلفية","شركة تطوير مواقع كاملة", "شركة لاين اي تي"]

    const [open, setOpen] = useState<false | null>(null);

    const toggle = (index: any) => {
        if(open === index) {
            return setOpen(null)
        }

        setOpen(index)
    }
    const accordionData = [
        {
            title: "عندما أتصل بك ، ماذا يمكنني أن أتوقع في الاستشارة المجانية؟",
            desc: "نحن نقدم خدمة استشارة مجانية لتطوير مواقع الويب لمدة 30 دقيقة حيث سنقوم بما يلي: افهم متطلبات عملك والمشكلة التي تعالجها. النتائج التي تريد تحقيقها بعد تطوير المشروع. ضع في الاعتبار ميزانيتك والجدول الزمني لتطوير المشروع. بعد المناقشة الأولية ، سوف نتحقق من صحة فكرة تطوير موقع الويب الخاص بك ونزودك بهيكل تفصيلي للعمل لمشروع تطبيقك."
        },
        {
            title: "هل توقع على اتفاقية عدم إفشاء لحماية معلومات العمل الحساسة؟",
            desc: "نعم فعلا. ليس فقط للعملاء على مستوى المؤسسات ، ولكننا نوقع أيضًا اتفاقية عدم إفشاء لجميع عملائنا. نحن نتفهم أهمية حماية فكرتك وبياناتك المهمة. لذلك ، فإننا نوقع اتفاقية عدم إفشاء قبل البدء في تطوير حل ويب المؤسسة. نحن نضمن أن تكون فكرة التطبيق الخاص بك سرية للغاية ولا يمكن الوصول إليها من قبل جهات خارجية."
        },
        {
            title: "لدي بالفعل موقع على شبكة الإنترنت. هل يمكنك إعادة تصميم أو إجراء تغييرات في تصميم الويب UI / UX وتطويره من البداية؟",
            desc: "نتلقى عادةً طلبات من عملائنا لإعادة تصميم مواقعهم على الويب لأسباب مختلفة مثل ضعف أداء عائد الاستثمار ، وعدم المطابقة مع توقعات الجمهور وما إلى ذلك. لذلك نحن نعرف كيف نتعامل معها. نقوم أولاً بتحليل التحديات الأساسية الخاصة بك ، وأهدافك ، ثم نعيد تصميم موقع الويب الخاص بك من البداية للتأكد من أنه يلبي توقعاتك ويساعدك على تحقيق أهدافك."
        },
        {
            title: "هل تقدمون خدمات صيانة الموقع وترقيته؟",
            desc: "بمجرد أن ننشر موقع الويب الخاص بك أو حل الويب الخاص بك ، فإننا نتفهم أنك قد تحتاج إلى مساعدتنا هنا وبعد ذلك لفترة من الوقت ، للحصول على فهم تقني. للتأكد من أنك لا تواجه أي مشاكل في التنفيذ ، نمنحك دعمًا فنيًا مجانيًا لمدة ثلاثة أشهر."
        },
        {
            title: "كيف سأعرف مدى تقدم الموقع خلال عملية التطوير بأكملها؟",
            desc: "أثناء تطوير الويب ، تساعدنا مساهماتك وملاحظاتك في تحقيق النتيجة النهائية بأعلى جودة. للتأكد من أنك مشترك تمامًا وأن كل شيء يسير وفقًا لتوقعاتك ، نقوم بتعيين مدير مشروع مخصص لك ولمشروعك. نستخدم قنوات اتصال مختلفة مثل Skype و Basecamp و Slack لتحديث الحالة العامة للمشروع."
        },
        {
            title: "كم من الوقت يستغرق إنشاء تطبيق ويب؟",
            desc: "في المتوسط ، قد يستغرق إنشاء تطبيق ويب حوالي شهرين. ومع ذلك ، قد يختلف الوقت المستغرق وفقًا لمتطلباتك والنتائج المرجوة."
        },
        {
            title: "ما الذي يجعلك مختلفًا عن منافسيك؟",
            desc: "لا تشبه لاين أي تي أي شركة أخرى لتصميم وتطوير تطبيقات الويب. لدينا فريق من المطورين ذوي الخبرة الذين يعرفون مداخل وعموم لغات البرمجة المستخدمة على نطاق واسع ، مثل PHP و Python و JavaScript و HTML5. إنهم يستخدمون معرفتهم بالتقنيات المختلفة لإنشاء منتجات من الدرجة الأولى. أيضًا ، نأخذ كل مشروع بحماس لضمان حصول عملائنا على ما يريدون. وتساعدنا منهجيتنا الرشيقة على تسليم كل مشروع في الوقت المحدد مع ضمان الجودة."
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
            <Navbar en="/en/company"/>

        <motion.div variants={container}
    initial="hidden"
    whileInView="visible" className="flex lg:flex-row flex-col justify-around items-center lg:mt-20 md:mt-24 sm:mt-28 mt-24 min-w-7xl md:h-[90vh]">
      {/* image area */}
      <motion.div variants={item} className="md:ml-10 mx-10 lg:ml-20 md:mr-10 lg:mr-0 order-first">
      <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/company_xjxte2.webp" width={2000} height={2000} alt=' احمد وليد مالك شركة لاين اي تي - أفضل شركة تصميم مواقع وتطبيقات في مصر' objectFit="cover" />
        <CldOgImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/company_xjxte2.webp" width={2000} height={2000} alt=' احمد وليد مالك شركة لاين اي تي - أفضل شركة تصميم مواقع وتطبيقات في مصر' objectFit="cover" />
      </motion.div>
      {/* textual area */}
      <div className="flex flex-col items-center justify-start md:ml-20 md:w-[-webkit-fill-available] mx-10 mt-10 md:mt-0">
        {/* <p className="text-[#E84E36] font-semibold text-base">شركة رائدة في تطوير الويب
</p> */}
        <h2 dir="rtl" className="font-bold lg:text-5xl text-2xl  text-gray-800">
        عملائنا الكرام ،
        </h2>
        <p dir="rtl" className="md:text-xl text-xl text-center font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          أنا احمد وليد مالك لشركة LINE IT . أود أن أرحب بكم وشكرا على النظر في خدماتنا. في LINE IT ، نحن ملتزمون بتزويد عملائنا بأعلى جودة من الحلول الرقمية للمساعدة في تنمية أعمالهم. من تطوير مواقع الويب والتسويق الرقمي وتطبيقات الهاتف.
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
      <p className="text-[#E84E36] font-semibold text-xl">وكالة متخصصة في تطوير مواقع الويب
</p>
        <p dir="rtl" className="md:text-xl text-xl text-right font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          نحن ، في لاين أي تي (شركة حلول الويب وتطوير تطبيقات الأجهزة المحمولة) ، نتفهم أهمية ونتائج وجود مواقع ويب مطورة بشكل مناسب مع تصميم ويب رائع وتجربة مستخدم رائعة. تم تحسين تطوير الويب الخاص بنا لمحركات البحث للحصول على المزيد من حركة المرور على الموقع أو يمكنك القول أنه مناسب لكبار المسئولين الاقتصاديين ، لوسائل التواصل الاجتماعي والتسويق الرقمي.
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
      <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/web-2_j0c0iq.webp" width={1000} height={1000} alt=' شركة لاين اي تي - أفضل شركة تصميم مواقع وتطبيقات في مصر' objectFit="cover" />
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
