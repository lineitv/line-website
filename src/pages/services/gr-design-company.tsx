import Head from "next/head";
import Navbar from "../../components/pages/Navbar";
import { WebWork } from "../../components/pages/Works";
import Link from "next/link";
import Image from "next/image";
import Web1 from "../../../public/images/design.png";
import Web2 from "../../../public/images/gr.jpg";
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
        name: " الشعارات واللوجوهات للشركات والافراد",
        desc : "يمثل الشعار أو اللوجو رمز الثقة ما بين المستهلك ومقدم الخدمة، حيث أنه بمجرد رؤية ذلك الشعار في أي وقت أو أي مكان يجعل المستهلك يشعر بالثقة في المنتج أو الخدمة، خاصةً إن كنت تقدم تلك الخدمة بجودة عالية وأسعار مناسبة مقارنةً بالمنافسين."
    },
    {
        name: "تصميم المنشورات والمطبوعات",
        desc : "تشمل : تصميم البيزنس كارت - تصميم البرشور والكتالوجات - تصميم شعار نشاطك التجاري - تصميم اللوحات الإعلانية للطرق - تصميم بروفايل النشاط أو الشركة - تصميمات المعارض والمؤتمرات        "
    },
    {
        name: "تصميم تصميمات السوشيال ميديا",
        desc : "تعد خدمة تصميم منشورات مواقع التواصل الاجتماعى من اهم الاشياء التي تحتاجها لعمل حملة اعلانية ناجحة او جذب انتباه العملاء نحو المنتج الخاص بك نتميز بالافكار الابداعية وسرعة التنفيذ باعلى جودة وأفضل الاسعار، تميز وأطلق العنان لعملك للوصول الي الاهداف بكل سهولة واحترافية."
    },
    {
        name: "تصميم الاعلانات المدفوعة",
        desc : "من اهم العوامل التي تميز اعلانك هي تصميم المنشور الاعلاني لجذب انتباه المهتمين بمنتجك يشير تصميم إعلان إلى عملية إنشاء محتوى دعائي، يركّز غالبًا على زيادة المبيعات، أو قد يتضمن أهدافًا أخرى مثل نشر الوعي بالعلامة التجارية، أو حتى تقديم المنتجات الجديدة إلى السوق. لا بد أن يتضمن الإعلان الناجح وجود عدة عناصر ليخرج بالجودة المطلوبة."
    },
    {
        name: "تصميم البنرات لموقعك الالكتروني",
        desc : "تعدّ البنرات الإعلانية أحد أكثر أشكال الإعلانات شيوعًا، وهي عبارة عن لافتة إعلانية مطبوعة أو رقمية، وتتمثل بعرض رسومي مربع أو مستطيل الشكل بأبعاد مختلفة حسب الغرض. تختلف الأهداف الترويجية لتصميم البنرات الإعلانية، فقد تكون ترويجًا لخدمات العلامة التجارية، أو الإعلان عن فعالية جديدة، أو بهدف الحصول على زوار جدد للموقع الإلكتروني، وغيرها من الأهداف."
    },
    {
        name: "تصميم فيديوهات انفوجرافيك",
        desc : "هي عبارة عن مجموعة من الصور والكلمات لتحويل البيانات المعقدة أو الكبيرة إلى رسومات ؛ لكي تكون بطريقة مبسطة لمن يراها ، لاستيعاب المعلومات بأسرع ما يمكن بدلاً من قراءة مقال كامل في فترة زمنية كبيرة ، يمكنك عمل رسم بياني يوفر عليك الوقت وله تصميم أفضل وجذاب ، لأنها إحدى الوسائل المهمة والفعالة في عالم التكنولوجيا الحديث ؛ طريقة جذابة لعرض المعلومات خاصة على وسائل التواصل الاجتماعي"
    },
  ];

const Web = () => {
  const title = 'خدمة جرافيك ديزاين';
  const url = '/services/gr-design-company';
  const description = 'شركة لاين اي تي أفضل شركة جرافيك ديزاين في مصر - تصفح خدمة جرافيك ديزاين في الشركة';
  const keywords = [ "أفضل شركة جرافيك ديزاين في مصر","شركة جرافيك ديزاين","أفضل سعر لشركة جرافيك ديزاين","شركة جرافيك ديزاين","شركة فوتوشوب ديزاين","شركة تصميم هويات مواقع كاملة", "شركة لاين اي تي"]

    const [open, setOpen] = useState<false | null>(null);

    const toggle = (index: any) => {
        if(open === index) {
            return setOpen(null)
        }

        setOpen(index)
    }
    const accordionData = [
        {
            title: "أهم البرامج لدينا لإخراج تصاميم جرافيك ممتازة",
            desc: "Canava - Figma -  Adobe Photoshop - Illustrator - InDesign - Daz studio - Krita - Blender - Gravite designer - Vectr - Affinity Photo - Pixlr - Sketch"
        },
        {
            title: "شركات الجرافيك فى مصر",
            desc: "إن شركات الجرافيك في مصر لا تحصى ولكن لتحصل على خدمة بأعلى مستوى وفي أقل وقت وبأفضل سعر فإن شركة لاين اي تي أفضل شركة لتصميم الجرافيك"
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
            <Navbar en="/en/services/gr-design-company"/>

        <motion.div variants={container}
    initial="hidden"
    whileInView="visible" className="flex lg:flex-row flex-col justify-around items-center lg:mt-20 md:mt-24 sm:mt-28 mt-24 min-w-7xl md:h-[90vh]">
      {/* image area */}
      <motion.div variants={item} className="md:ml-10 mx-10 lg:ml-20 md:mr-10 lg:mr-0 order-first">
      <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/design_cjz2ge.webp" width={2000} height={2000} alt="أفضل شركة جرافيك ديزاين في مصر والوطن العربي - لاين اي تي" objectFit="cover" />
        <CldOgImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/design_cjz2ge.webp" width={2000} height={2000} alt="أفضل شركة جرافيك ديزاين في مصر والوطن العربي - لاين اي تي" objectFit="cover" />
      </motion.div>
      {/* textual area */}
      <div className="flex flex-col items-center justify-start md:ml-20 md:w-[-webkit-fill-available] mx-10 mt-10 md:mt-0">
        <p className="text-[#E84E36] font-semibold text-base">شركة رائدة في تصميم المواقع والتطبيقات
</p>
        <h2 className="font-bold lg:text-5xl text-2xl  text-gray-800">
        شركة جرافيك ديزاين
        </h2>
        <p dir="rtl" className="md:text-xl text-xl text-center font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          العالم الإلكتروني يواصل تقديم الأحدث في كافة المجالات المختلفة ومن المهم مواصلة تقديم ما يتناسب مع تحديثاته، لذلك أصبحت التصاميم البصرية تلعب دورا رئيسياً في تقديم الأفكار والخدمات إلى الجمهور
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
      <p className="text-[#E84E36] font-semibold text-xl">الجرافيك ديزاين طريقك للتسويق الناجح
</p>
        <p dir="rtl" className="md:text-xl text-xl text-right font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          يهدف الجرافيك ديزاين الناجح إلى توضيح الطريق أمام الجمهور للبحث عن منتج معين أو التعامل مع خدمات شركة ما، فتصميم الحملات الإعلانية ترفع ثقة الجمهور تجاه علامتك التجارية وتصنع رمز واضح داخل أذهانهم لسهولة توصيل رسالتك التسويقية ورفع نسب أرباحك.
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
      <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/gr_o5gxoi.webp" width={1000} height={1000} alt="أفضل شركة جرافيك ديزاين في مصر والوطن العربي - لاين اي تي" objectFit="cover" />
      </motion.div>
    </motion.div>

    <div className="py-12 bg-gray-100">
      <div className="max-w-full mx-12 md:mx-20 sm:mx-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#E84E36] font-semibold">
          خدمات الجرافيك ديزاين
          </h2>
          <p className="mt-2 md:text-5xl text-3xl font-bold text-gray-900">
          خدمات  تصميم الجرافيك التي نقدمها
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
