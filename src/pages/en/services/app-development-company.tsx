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
const OurServices = [
  {
    name: "Flutter app development",
    desc: "Our expert mobile developers with good knowledge of native app development offer a comprehensive suite of Flutter services from scratch and produce complete apps for iOS and Android platforms to meet client requirements."
  },
  {
    name: "Android application development",
    desc: "Our stack Android app developers are dedicated to creating cutting-edge Android apps that run seamlessly on multiple Android devices and deliver feature-rich performance using the Android SDK and platform-specific technologies."
  },
  {
    name: "iOS application development",
    desc: "Experienced in developing amazing iOS apps for iPhone, iPad, Apple Watch and Apple TV for startups around the world, using the appropriate iOS SDK and native programming languages ​​that support all types of iOS mobile devices."
  },
  {
    name: "UI/UX design for mobile applications",
    desc: "Our dedicated mobile app designers with relevant design skills and knowledge of interface design create user-centric designs for successful engagement and user experience to help your business grow through effective mobile solutions."
  },
  {
    name: "Developing React Native applications",
    desc: "Our expert mobile developers with appropriate knowledge of native app development deliver a comprehensive suite of React Native services from scratch and produce complete apps for iOS and Android platforms to meet client requirements."
  },
  {
    name: "Mobile web development",
    desc: "Our web developers with deep experience in the field provide full cycle web software development, from web planning to design to launch web applications to market using the latest technology, adaptive designs and required product maintenance tools."
  },
  ];

const Web = () => {
  const title = 'Mobile app development service';
  const url = '/en/services/app-development-company';
  const description = 'Line IT Best Mobile App Development Company In Egypt - Read More In Line IT App development Service';
  const keywords = [ "Best App Development Company In Egypt","App Development Company"," Best Brice App Development Company","Andriod Company","React Native Company","IOS Company","Flutter app development company", "Line IT Company"]

    const [open, setOpen] = useState<false | null>(null);

    const toggle = (index: any) => {
        if(open === index) {
            return setOpen(null)
        }

        setOpen(index)
    }
    const accordionData = [
      {
        title: "How long does it take to develop a mobile app?",
        desc: "Average on-demand app like Uber Eats or Booking App: 5-6 weeks | Simple application: 3-4 weeks | Complex application on demand: 8-10 weeks:"
      },
      {
        title: "What is the cost of mobile application development?",
        desc: "Starting from $1,000 - $20,000"
      },
      {
        title: "Do you sign a non-disclosure agreement before starting a project?",
        desc: "Yes really. We sign a non-disclosure agreement to protect your idea. We believe in security first; Thus, we guarantee that your app idea will be completely confidential."
      },
      {
        title: "I already have a design. Can you work with existing designs?",
        desc: "Yes really. We work with existing designs if your design meets industry standards, and current trends"
      },
      {
        title: "What steps do you take to provide an error-free application?",
        desc: "Before launching a mobile app, our team checks code quality and code security with a program called SonarQube. To make your application error-free and responsive, we check compatibility, performance, interface, and usability."
      },
      {
        title: "After developing a mobile app, can you help make it live on the App Store and Play Store?",
        desc: "Yes of course. After developing your mobile application, we will publish your application on the App Store and Play Store as per the guidelines."
      },
      {
        title: "Do you provide application maintenance and upgrade services?",
        desc: "We offer three months of error-free support. After three months, we sign an annual maintenance contract if necessary."
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

            <Navbar ar="/services/app-development-company" />

        <motion.div variants={container}
    initial="hidden"
    whileInView="visible" className="flex lg:flex-row flex-col justify-around items-center lg:mt-20 md:mt-24 sm:mt-28 mt-24 min-w-7xl md:h-[90vh]">
      
      <div className="flex flex-col items-center justify-start md:ml-20 md:w-[-webkit-fill-available] mx-10 mt-10 md:mt-0">
        <p className="text-[#E84E36] font-semibold text-base">A leading mobile development company
</p>
        <h2 className="font-bold lg:text-5xl text-2xl  text-gray-800">
        Mobile Application Company
        </h2>
        <p className="md:text-xl text-xl text-center font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          We design and develop native mobile applications (iOS and Android) for your business. Our experienced app developers make your mobile app experiences secure, scalable, and sustainable.
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
      <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/mobile_ucxb6z.webp" width={2000} height={2000} alt="The best Mobile Application and development company in Egypt and the Arab world - Line IT" objectFit="cover" />
        <CldOgImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/mobile_ucxb6z.webp" width={2000} height={2000} alt="The best Mobile Application and development company in Egypt and the Arab world - Line IT" objectFit="cover" />
      </motion.div>
      {/* textual area */}

    </motion.div>

    <motion.div variants={container}
    initial="hidden"
    whileInView="visible" className="flex lg:flex-row flex-col justify-around items-center lg:mt-4 md:mt-4 sm:mt-4 mt-4 min-w-7xl md:h-[70vh]">
    
      <div className="flex flex-col items-center justify-center md:ml-20 md:w-[-webkit-fill-available] mx-10 mt-10 md:mt-0">
      <p className="text-[#E84E36] font-semibold text-xl">Mobile application design and development company     
</p>
        <p dir="rtl" className="md:text-xl text-xl text-right font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          Do you want to develop a mobile app for your business? Boldbrand knows what it takes to turn your app idea into a successful mobile app. With the experience of developing more than 100 successful mobile app projects for various categories and platforms, we give the right meaning to your mobile app ideas. Our team of tech enthusiasts has successfully served the world's leading brands, corporations and startups as well.
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
      <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/web3_wornuz.webp" width={1000} height={1000} alt="The best Mobile Application and development company in Egypt and the Arab world - Line IT" objectFit="cover" />
      </motion.div>
    </motion.div>

    <div className="py-12 bg-gray-100">
      <div className="max-w-full mx-12 md:mx-20 sm:mx-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#E84E36] font-semibold">
          Mobile application development services
          </h2>
          <p className="mt-2 md:text-5xl text-3xl font-bold text-gray-900">
          Our expertise is in mobile application solutions
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-1 md:gap-y-10">
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
