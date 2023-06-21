import Navbar from "../../../components/pages-en/Navbar";
import Link from "next/link";
import AccrodionItem from "../../../components/pages-en/AccordionItem"
import {useState} from "react"
import { motion, Variants } from "framer-motion";
import { WebWork } from "../../../components/pages-en/Works";
import { CldImage, CldOgImage } from "next-cloudinary";
import BasicMeta from "../../../components/meta-en/BasicMeta";
import OpenGraphMeta from "../../../components/meta-en/OpenGraphMeta";
import TwitterCardMeta from "../../../components/meta-en/TwitterCardMeta";
import ShemaMeta from "../../../components/meta-en/ShemaMeta";
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
  const title = 'Social Media Service';
  const url = '/en/services/social-company';
  const description = 'Line IT Best Social Media Company In Egypt - Read More In Line IT Social Media Service';
  const keywords = [ "Best advertising Compant","Best Social Media Company In Egypt"," Social Media Company"," Best Brice Social Media Company"," Social Company"," Media Company"," Designs Company", "Line IT Company"]

    const [open, setOpen] = useState<false | null>(null);

    const toggle = (index: any) => {
        if(open === index) {
            return setOpen(null)
        }

        setOpen(index)
    }
    const accordionData = [
      {
        title: "How will I choose a digital marketing services agency?",
        desc: "To find the best digital marketing agency, you need to check out the wide range of services they offer, the clients they handle, their establishment and reviews in the industry circuit. Also see if the agency will share the results with you, as the success of your project is interdependent. It will give you a general idea whether to choose this digital marketing service agency or look for another reliable agency that can happily share their results with you by maintaining an open relationship and maintaining professional integrity."
      },
      {
        title: "Why choose Line IT as a digital marketing company?",
        desc: "Line IT is proud to be a full-service digital marketing services company. Let's say you need a website designed to advertise your app or you have SEO requirements. Together, we can work seamlessly to enable you to achieve transformational growth."
      },
      {
        title: "What is the performance of a digital marketing services company",
        desc: "The Digital Marketing Services Agency implements a results-based marketing approach, with a focus on achieving return on investment and helping the company achieve its goals through digital expertise and technology. Line IT develops strategies to increase awareness and gain leadership. Digital businesses need to be fast paced and match the customer experience with a brand perspective."
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

            <Navbar ar="/services/social-company" />

        <motion.div variants={container}
    initial="hidden"
    whileInView="visible" className="flex lg:flex-row flex-col justify-around items-center lg:mt-20 md:mt-24 sm:mt-28 mt-24 min-w-7xl md:h-[90vh]">
      
      <div className="flex flex-col items-center justify-start md:ml-20 md:w-[-webkit-fill-available] mx-10 mt-10 md:mt-0">
        <p className="text-[#E84E36] font-semibold text-base">A leading company in funded marketing and advertising
</p>
        <h2 className="font-bold lg:text-5xl text-2xl  text-gray-800">
        Digital marketing Company
        </h2>
        <p className="md:text-xl text-xl text-center font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          Marketing your business through social media platforms.
        </p>
        <div  className="mt-10 flex justify-center items-center gap-5">
          <Link href="/portfolio" >
            <a className="text-white  md:mb-0 mb-2 bg-[#E84E36] font-semibold rounded-full px-5 md:py-4 py-2 hover:bg-black hover:shadow-lg">
            Schedule a free consultation
            </a>
          </Link>
        </div>
      </div>
      {/* image area */}
      <motion.div variants={item} className="md:ml-10 mx-10 lg:ml-20 md:mr-10 lg:mr-0 order-first md:order-last">
      <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/social_idjtjm.webp" width={2000} height={2000} alt="The best Social Media design and development company in Egypt and the Arab world - Line IT" objectFit="cover" />
        <CldOgImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/social_idjtjm.webp" width={2000} height={2000} alt="The best Social Media and development company in Egypt and the Arab world - Line IT" objectFit="cover" />
      </motion.div>
      {/* textual area */}

    </motion.div>

    <motion.div variants={container}
    initial="hidden"
    whileInView="visible" className="flex lg:flex-row flex-col justify-around items-center lg:mt-4 md:mt-4 sm:mt-4 mt-4 min-w-7xl md:h-[70vh]">
    
      <div className="flex flex-col items-center justify-center md:ml-20 md:w-[-webkit-fill-available] mx-10 mt-10 md:mt-0">
      <p className="text-[#E84E36] font-semibold text-xl">About digital marketing     
</p>
        <p dir="rtl" className="md:text-xl text-xl text-right font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          The need for digital marketing services in the commercial sector today cannot be ignored. Companies have adopted digital marketing services, and the need for digital marketing service providers is also increasing, keeping up with demand. Many of these digital marketing companies have been established that provide similar services to their clients. Bold Brand, is a digital marketing service in Egypt, providing digital marketing and email marketing solutions to consumers located globally. We do the job of supporting your company online. A number of search engines can be accessed online.
        </p>
        <div className="mt-10 flex justify-center items-center gap-5">
        <Link href="/portfolio" >
            <a className="text-white md:mb-0 mb-2 bg-[#E84E36] font-semibold rounded-full px-5 md:py-4 py-2 hover:bg-black hover:shadow-lg">
            Schedule a free consultation
            </a>
          </Link>
        </div>
      </div>
      <motion.div variants={item} className="lg:mr-20 md:mr-10 mx-10 lg:mx-0 order-first">
      <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/marketing_gq9jj3.webp" width={1000} height={1000} alt="The best Social Media design and development company in Egypt and the Arab world - Line IT" objectFit="cover" />
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
