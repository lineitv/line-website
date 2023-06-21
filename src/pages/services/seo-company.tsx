import Head from "next/head";
import { WebWork } from "../../components/pages/Works";
import Navbar from "../../components/pages/Navbar";
import Link from "next/link";
import Image from "next/image";
import Web1 from "../../../public/images/seo.png";
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
        name: "الظهور والترتيب",
        desc : "يعمل السيو علي زيادة ظهور الموقع الإلكتروني على نتائج البحث، ويعمل ايضا على تحسين ترتيب الموقع في محركات البحث، فيظهر للزائر على الصفحة الأولى، ممّا يزيد من عدد الزيارات إلى صفحة الويب أو الموقع الخاص بك."
    },
    {
        name: " ثقة المستخدم",
        desc : "يميل مستخدم الإنترنت إلى اتباع توصيات محرك البحث بالنقر على المواقع التي تتصدر نتائج البحث الأولي؛ وذلك يزيد من ثقة الزائر بالمنتج أو الخدمة المقدمة من خلال الموقع الإلكتروني."
    },
    {
        name: " تجربة المستخدم",
        desc : " يعتمد مفهوم تجربة المستخدم على كيفية تصميم الموقع، وتفاعل العميل مع موقع الويب، وذلك من خلال التقييمات والتعليقات الإيجابية من المستخدمين، يساعد السيو على نقل المعلومات التي يحتاجها المستخدم من الموقع حتى لا يتدنى ترتيب الموقع على نتائج البحث.        "
    },
    {
        name: "السيو داخل الموقع",
        desc : "يتعلق هذا النوع بتحسين محركات البحث في صفحة الويب، وتعزيز البنية الأساسية للمحتوى بشكل أفضل من الصفحات الأخرى وذلك من خلال اختيار عناوين جذابة، وكلمات مفتاحية محددة وغير مكررة، بالإضافة إلى تنسيق الصفحة بشكل جيد وتحسين تصميمها بطريقة سهلة للمستخدم."
    },
    {
        name: "السيو خارج الموقع",
        desc : "يختصّ هذا النوع ببناء روابط تساعد على الترويج للموقع الإلكتروني، ويمكن الاستعانة بمواقع التواصل الاجتماعي لزيادة عدد الزيارات وتحقيق نتائج إيجابية في أقل وقت ممكن، كما يمكن وضع رابط الموقع في مواقع أخرى للمساهمة في عملية تسويق الموقع والوصول الى اكبر عدد من الزوار وذلك من خلال استشارة أفضل شركة سيو في مصر."
    },
    {
        name: "النمو",
        desc : " يزيد السيو من ظهور الموقع بمرتبة مرتفعة في محركات البحث؛ مما يزيد من نمو العلامة التجارية أو الخدمة المقدمة عن طريق الموقع، من الممكن أن يشارك المستخدم المنتج عبر مواقع التواصل الاجتماعي مما يزيد من نسبة المبيعات للمنتج.        "
    },
  ];

const Web = () => {
  const title = 'خدمة سيو';
  const url = '/services/seo-company';
  const description = 'شركة لاين اي تي أفضل شركة سيو في مصر - تصفح خدمة تحسين محركات البحث في الشركة';
  const keywords = [ "أفضل شركة تحسين محركات البحث في مصر","شركة سيو","أفضل سعر لشركة سيو","شركة سيو مواقع","شركة ادارة صفحات سوشيال ميديا","شركة تطوير مواقع كاملة", "شركة لاين اي تي"]

    const [open, setOpen] = useState<false | null>(null);

    const toggle = (index: any) => {
        if(open === index) {
            return setOpen(null)
        }

        setOpen(index)
    }
    const accordionData = [
        {
            title: "زيادة نسب ظهور الموقع الخاص بك في نتائج البحث الأولى",
            desc: "من أهم فوائد السيو هو تحسين ظهور موقعك في النتائج الأولى لمحركات البحث في جوجل، مما يعني عثور المزيد من العملاء عليك، حيث ترتبط زيارة موقعك بمدى رؤية الزوار لمنتجاتك أو خدماتك في نتائج البحث."
        },
        {
            title: " رفع نسب الزيارات للموقع",
            desc: "زيادة عدد الزيارات تعد من الأهداف الأساسية للسيو، حيث ترتبط بشكل مباشر بظهورك في الصفحات الأولى من نتائج البحث الخاصة بجوجل."
        },
        {
            title: " تحسين أوثوريتي الموقع",
            desc: "سلطة الموقع الخاص بك في جوجل تعني مدى ثقة محركات البحث في المحتوى المقدم وجودته، وإذا كان ملائم للفئة المستهدفة أم لا، لذلك كلما ارتفع الأثوريتي الخاص بموقعك كلما كان ترتيبك أفضل في نتائج البحث."
        },
        {
            title: "تحسين محركات البحث الفنية",
            desc : "لتحقيق أفضل النتائج يجب وضع نظام أساسي قوي وموقع جيد لبدء أنشطة تسويق المحتوى و SEO، معايير ترميز الموقع ، وتحسين سرعة تحميل الموقع. "
        },
        {
            title: "تسويق المحتوى",
            desc : "نجاح تحسين محركات البحث لا يمكن تحقيقه بدون إنشاء المحتوى، تعد أنشطة التحليلات التنافسية وتحديد الكلمات المفتاحية وكتابة محتوى سهل الاستخدام من أهم النقاط التي يجب الالتفات إليها في تحسين محركات البحث.        "
        },
        {
            title: " بناء الارتباط المستهدف",
            desc : "إذا تمت مراعاة معايير تحسين محركات البحث وإنتاج المحتوى ، فذلك يؤدي إلى الصفحة الأولى من Google.         "
        },
        {
            title: "أفضل شركة سيو تهيئة المواقع لمحركات البحث SEO            ",
            desc: "اصبح من الامر الضروري لكل صاحب موقع الكتروني تهيئة الموقع الخاص به وتعد شركة لاين اي تي افضل شركة سيو في مصر وتوفر جميع الحلول التسويقية، ونحن في شركة كانجرو نمتللك مجموعه كبيره من الخبراءوالتقنين المحترفين في  مجال SEO، فاصبح من المفترض وجود موقعك في الصفحه الاولي في محركات بحث جوجل  OFF PAGE SEO..."
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
            <Navbar en="/en/services/seo-company"/>

        <motion.div variants={container}
    initial="hidden"
    whileInView="visible" className="flex lg:flex-row flex-col justify-around items-center lg:mt-20 md:mt-24 sm:mt-28 mt-24 min-w-7xl md:h-[90vh]">
      {/* image area */}
      <motion.div variants={item} className="md:ml-10 mx-10 lg:ml-20 md:mr-10 lg:mr-0 order-first">
      <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/seo_wfkrvt.webp" width={2000} height={2000} alt="أفضل شركة سيو في مصر والوطن العربي - لاين اي تي" objectFit="cover" />
        <CldOgImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/seo_wfkrvt.webp" width={2000} height={2000} alt="أفضل شركة سيو في مصر والوطن العربي - لاين اي تي" objectFit="cover" />
      </motion.div>
      {/* textual area */}
      <div className="flex flex-col items-center justify-start md:ml-20 md:w-[-webkit-fill-available] mx-10 mt-10 md:mt-0">
        <p className="text-[#E84E36] font-semibold text-base">شركة رائدة تحسين محركات البحث
</p>
        <h2 className="font-bold lg:text-5xl text-center text-2xl  text-gray-800">
         تحسين محركات البحث
        </h2>
        <p dir="rtl" className="md:text-xl text-xl text-center font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          سيو (SEO) هي إختصار لكلمة” search engine optimization”، فهي عبارة عن عملية إشهار للموقع وتهيئته للظهور في جميع محركات البحث وخاصة محرك البحث “GOOGLE” لتسهيل وصول القارئ إلي الموقع، وهي من أهم خطوات التسويق الإلكتروني وأخطرهم أيضًا لأن عدم العلم بقواعد السيو قد يعرض الموقع لعدم الظهور النهائي.
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
          خدمات تحسين محركات البحث
          </h2>
          <p className="mt-2 md:text-5xl text-3xl font-bold text-gray-900">
          خدمات تحسين محركات البحث
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
