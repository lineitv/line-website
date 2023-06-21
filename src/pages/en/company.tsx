import Head from "next/head";
import Navbar from "../../components/pages-en/Navbar";
import Link from "next/link";
import AccrodionItem from "../../components/pages-en/AccordionItem"
import {useState} from "react"
import { motion, Variants } from "framer-motion";
import { WebWork } from "../../components/pages-en/Works";
import { CldImage, CldOgImage } from "next-cloudinary";
import BasicMeta from "../../components/meta-en/BasicMeta";
import OpenGraphMeta from "../../components/meta-en/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta-en/TwitterCardMeta";
import ShemaMeta from "../../components/meta-en/ShemaMeta";
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
    const title = 'Company';
    const url = '/en/company';
    const description = 'Line IT Best Website & app Development Company In Egypt - Read More In Line IT web development Service';
    const keywords = [ "Best Web Development Company In Egypt","Website Company","Mobile App Company","SEO Company"," Best Brice Web Development Company"," Front-End Company"," Back-End Company"," Full-Stack Company", "Line IT Company"]

    const [open, setOpen] = useState<false | null>(null);

    const toggle = (index: any) => {
        if(open === index) {
            return setOpen(null)
        }

        setOpen(index)
    }
    const accordionData = [
      {
        title: "When I contact you, what can I expect in a free consultation?",
        desc: "We offer a free 30-minute website development consulting service where we will: Understand your business requirements and the problem you are addressing. The results you want to achieve after developing the project. Consider your budget and project development schedule. After the initial discussion, we will validate your website development idea and provide you with a working breakdown structure for your app project."
      },
      {
        title: "Do you sign a non-disclosure agreement to protect sensitive business information?",
        desc: "Yes really. Not only for enterprise level customers, but we also sign a non-disclosure agreement for all of our customers. We understand the importance of protecting your valuable idea and data. Therefore, we sign a non-disclosure agreement before we start developing our enterprise web solution. We guarantee that your app idea is strictly confidential and cannot be accessed by third parties."
      },
      {
        title: "I already have a website. Can you redesign or make changes in web UI/UX design and development from scratch?",
        desc: "We usually receive requests from our clients to redesign their websites due to various reasons like poor ROI performance, not matching audience expectations etc. So we know how to deal with it. We first analyze your core challenges, your goals, and then redesign your website from scratch to ensure it meets your expectations and helps you achieve your goals."
      },
      {
        title: "Do you provide website maintenance and promotion services?",
        desc: "Once we have deployed your website or web solution, we understand that you may need our assistance here and there for a while, to get a technical understanding. To make sure you don't run into any implementation issues, we give you three months of free technical support."
      },
      {
        title: "How will I know how far the site has progressed through the entire development process?",
        desc: "During web development, your contributions and feedback help us achieve the final result of the highest quality. To make sure you are fully engaged and everything runs to your expectations, we assign a project manager who is dedicated to you and your project. We use different communication channels such as Skype, Basecamp and Slack to update the overall status of the project."
      },
      {
        title: "How long does it take to build a web application?",
        desc: "On average, it can take about two months to build a web application. However, the time taken may vary according to your requirements and desired results."
      },
      {
        title: "What makes you different from your competitors?",
        desc: "Line IT is unlike any other web application design and development company. We have a team of experienced developers who know the ins and outs of widely used programming languages, such as PHP, Python, JavaScript, and HTML5. They use their knowledge of various technologies to create first class products. Also, we take every project with enthusiasm to ensure our customers get what they want. Our agile methodology helps us to deliver each project on time while ensuring quality."
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

            <Navbar ar="/services/web-development-company" />

        <motion.div variants={container}
    initial="hidden"
    whileInView="visible" className="flex lg:flex-row flex-col justify-around items-center lg:mt-20 md:mt-24 sm:mt-28 mt-24 min-w-7xl md:h-[90vh]">
      
      <div className="flex flex-col items-center justify-start md:ml-20 md:w-[-webkit-fill-available] mx-10 mt-10 md:mt-0">
        <h2 className="font-bold lg:text-5xl text-2xl  text-gray-800">
        Dear valued clients,
        </h2>
        <p dir="rtl" className="md:text-xl text-xl text-center font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          I am Ahmed Walid, owner of LINE IT. I would like to welcome you and thank you for considering our services. At LINE IT, we are committed to providing our customers with the highest quality digital solutions to help grow their business. From developing websites, digital marketing and mobile applications.
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
        <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/company_opuiki.webp" width={2000} height={2000} alt="Ahmed Waleed Owner Line IT The best website & app development company in Egypt and the Arab world" objectFit="cover" />
        <CldOgImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/company_opuiki.webp" width={2000} height={2000} alt="Ahmed Waleed Owner Line IT The best website & app development company in Egypt and the Arab world" objectFit="cover" />
      </motion.div>
      {/* textual area */}

    </motion.div>

    <motion.div variants={container}
    initial="hidden"
    whileInView="visible" className="flex lg:flex-row flex-col justify-around items-center lg:mt-4 md:mt-4 sm:mt-4 mt-4 min-w-7xl md:h-[70vh]">
    
      <div className="flex flex-col items-center justify-center md:ml-20 md:w-[-webkit-fill-available] mx-10 mt-10 md:mt-0">
      <p className="text-[#E84E36] font-semibold text-xl">An agency specialized in developing websites     
</p>
        <p className="md:text-xl text-xl text-right font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          We, at Line IT (Web Solutions & Mobile Application Development Company), understand the importance and consequences of having properly developed websites with great web design and great user experience. Our web development is optimized for search engines to get more site traffic or you can say SEO friendly, for social media and digital marketing.
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
      <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/web-2_yewgfh.webp" width={1000} height={1000} alt="The best website design and development company in Egypt and the Arab world - Line IT" objectFit="cover" />
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
