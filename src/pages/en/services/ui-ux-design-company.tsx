import Head from "next/head";
import Navbar from "../../../components/pages-en/Navbar";
import Link from "next/link";
import Image from "next/image";
import Web1 from "../../../../public/images-en/web.png";
import Web2 from "../../../../public/images-en/web-2.png";
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
      name: "Competitive and customized design",
      desc : "Get custom designs that follow the latest technology trends. At Line IT, we build unique UI designs that keep you ahead of your competition."
    },
    {
        name: "Achieving customer service and marketing goals",
        desc : "Line IT's expert teams constantly perform rigorous user testing to ensure a user interface that meets your marketing and customer service goals, including improving conversion rates, user engagement, and retention."
      },
      {
        name: "Preliminary Design Samples",
        desc : "Our team shares rough drafts and sample UI designs and suggests the best business model for your goals."
      },
      {
        name: "Tests",
        desc : "Have thorough usability testing of your prototype to ensure the UX design meets your goals and avoids usability errors."
      },
      {
        name: "User analysis",
        desc : "Get comprehensive web analytics, competitive analytics, user analytics, and initial user testing to help you create the perfect user journeys within your app, websites, platforms, portals, etc."
      },
      {
        name: "Set User",
        desc : "Our team helps you map users' journeys on your platform to better understand their behavior and how they interact with your platform."
      },
  ];

const Web = () => {
  const title = 'UI UX Desin service';
  const url = '/en/services/ui-ux-design-company';
  const description = 'Line IT Best UI UX Company In Egypt - Read More In Line IT UI UX Service';
  const keywords = [ "Best UI UX Company In Egypt","UI UX Design Company","Best Brice UI UX Company","UI UX Company","WireFrame Company","UI Company", "Line IT Company"]

    const [open, setOpen] = useState<false | null>(null);

    const toggle = (index: any) => {
        if(open === index) {
            return setOpen(null)
        }

        setOpen(index)
    }
    const accordionData = [
      {
        title: "Keep your customers satisfied",
        desc: "Strong UI/UX design keeps your customers happy and helps you attract new customers to build brand loyalty and stay ahead of the competition."
      },
      {
        title: "Increase income generation opportunities",
        desc: "Plan your users' experience on your platform and take advantage of potential opportunities to convert users into buyers by knowing what your users respond to best."
      },
      {
        title: "Time and cost optimization",
        desc: "Maintain a user-centric approach to creating scalable UI/UX design and saving money and effort wasted on usability issues."
      },
      {
        title: "Get more ideas",
        desc: "Understand user behavior and get more ideas on how to best interact with them."
      },
      {
        title: "Promote your brand",
        desc: "Your customers make decisions while looking at the screen, which means a high-quality UI/UX design attracts your target audience, increases your profits and enhances your brand."
      },
      {
        title: "Increase return on investment",
        desc: "Interactive UI/UX design boosts conversion rates and brand recognition, which in turn improves your ROI."
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

            <Navbar ar="/services/ui-ux-design-company" />

        <motion.div variants={container}
    initial="hidden"
    whileInView="visible" className="flex lg:flex-row flex-col justify-around items-center lg:mt-20 md:mt-24 sm:mt-28 mt-24 min-w-7xl md:h-[90vh]">
      
      <div className="flex flex-col items-center justify-start md:ml-20 md:w-[-webkit-fill-available] mx-10 mt-10 md:mt-0">
        <p className="text-[#E84E36] font-semibold text-base">A leading company in designing websites and apps
</p>
        <h2 className="font-bold lg:text-5xl text-2xl  text-gray-800">
        UI UX Company
        </h2>
        <p className="md:text-xl text-xl text-center font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          Deliver excellent experiences to your audience through attractive UI/UX designs.
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
      <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/uiux_d3kx7e.webp" width={2000} height={2000} alt="The best UI UX design and development company in Egypt and the Arab world - Line IT" objectFit="cover" />
        <CldOgImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/uiux_d3kx7e.webp" width={2000} height={2000} alt="The best UI UX design and development company in Egypt and the Arab world - Line IT" objectFit="cover" />
      </motion.div>
      {/* textual area */}

    </motion.div>

    <div className="py-12 bg-gray-100">
      <div className="max-w-full mx-12 md:mx-20 sm:mx-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#E84E36] font-semibold">
          UI UX services
          </h2>
          <p className="mt-2 md:text-5xl text-3xl font-bold text-gray-900">
          Our expertise is in UI UX solutions
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
