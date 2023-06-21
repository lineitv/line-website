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
      name: "Designing social media designs",
      desc : "The service of designing social media posts is one of the most important things that you need to create a successful advertising campaign or attract customers' attention towards your product."
    },
    {
        name: "Design publications and publications",
        desc : "It includes: designing a business card - designing brochures and catalogs - designing your business logo - designing road billboards - designing an activity or company profile - exhibition and conference designs"
      },
      {
        name: "Logos and logos for companies and individuals",
        desc : "The logo or slogan represents a symbol of trust between the consumer and the service provider, as once you see that logo at any time or anywhere, it makes the consumer feel confident in the product or service, especially if you provide that service with high quality and reasonable prices compared to competitors."
      },
      {
        name: "Design infographic videos",
        desc : "It is a collection of pictures and words to convert complex or large data into graphics; In order to be in a simplified way for those who see it, to absorb the information as quickly as possible, instead of reading an entire article in a large period of time, you can make an infographic that saves you time and has a better and attractive design, because it is one of the important and effective means in the modern world of technology; An attractive way to display information especially on social media"
      },
      {
        name: "Design banners for your website",
        desc : "Advertising banners are one of the most common forms of advertising, which is a printed or digital banner, and it is represented by a graphic display of square or rectangular shape with different dimensions depending on the purpose. The promotional goals for designing advertising banners vary, as they may be promoting brand services, advertising a new event, or with the aim of obtaining new visitors to the website, and other goals."
      },
      {
        name: "Paid advertising design",
        desc : "Designing an ad refers to the process of creating promotional content, often focused on increasing sales, or may include other goals such as spreading brand awareness, or even introducing new products to the market. A successful ad must include several elements to produce the required quality."
      },
  ];

const Web = () => {
  const title = 'Graphig Design service';
  const url = '/en/services/gr-design-company';
  const description = 'Line IT Best Graphig Design Company In Egypt - Read More In Line IT Graphig Design Service';
  const keywords = [ "Best Graphig Design Company In Egypt"," Graphig Design Company"," Best Brice Graphig Design Company"," Photoshop Company"," Adope Lightroom Company","Adope AI Company", "Line IT Company"]

    const [open, setOpen] = useState<false | null>(null);

    const toggle = (index: any) => {
        if(open === index) {
            return setOpen(null)
        }

        setOpen(index)
    }
    const accordionData = [
      {
        title: "Our most important programs for producing excellent graphic designs",
        desc: "Canava - Figma - Adobe Photoshop - Illustrator - InDesign - Daz studio - Krita - Blender - Gravite designer - Vectr - Affinity Photo - Pixlr - Sketch"
      },
      {
        title: "Graphic companies in Egypt",
        desc: "There are countless graphic companies in Egypt, but to get the highest level of service in the shortest time and at the best price, Line IT is the best graphic design company."
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

            <Navbar ar="/services/gr-design-company" />

        <motion.div variants={container}
    initial="hidden"
    whileInView="visible" className="flex lg:flex-row flex-col justify-around items-center lg:mt-20 md:mt-24 sm:mt-28 mt-24 min-w-7xl md:h-[90vh]">
      
      <div className="flex flex-col items-center justify-start md:ml-20 md:w-[-webkit-fill-available] mx-10 mt-10 md:mt-0">
        <p className="text-[#E84E36] font-semibold text-base">A leading company in designing websites and applications
</p>
        <h2 className="font-bold lg:text-5xl text-2xl  text-gray-800">
        Graphic Design Company
        </h2>
        <p className="md:text-xl text-xl text-center font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          Digital world continues to provide the latest in all different fields, and it is important to continue providing what is commensurate with its updates, so visual designs play a major role in presenting ideas and services to the public.
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
      <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/design_fnveoe.webp" width={2000} height={2000} alt="The best Graphic Design and development company in Egypt and the Arab world - Line IT" objectFit="cover" />
        <CldOgImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/design_fnveoe.webp" width={2000} height={2000} alt="The best Graphic Design and development company in Egypt and the Arab world - Line IT" objectFit="cover" />
      </motion.div>
      {/* textual area */}

    </motion.div>

    <motion.div variants={container}
    initial="hidden"
    whileInView="visible" className="flex lg:flex-row flex-col justify-around items-center lg:mt-4 md:mt-4 sm:mt-4 mt-4 min-w-7xl md:h-[70vh]">
    
      <div className="flex flex-col items-center justify-center md:ml-20 md:w-[-webkit-fill-available] mx-10 mt-10 md:mt-0">
      <p className="text-[#E84E36] font-semibold text-xl">Graphic Design your way to successful marketing     
</p>
        <p className="md:text-xl text-xl text-right font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          Successful graphic design aims to clarify the way for the audience to search for a specific product or deal with the services of a company. Designing advertising campaigns raises the public’s confidence in your brand and creates a clear symbol in their minds to facilitate the delivery of your marketing message and raise your profit rates.
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
      <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/gr_o5gxoi.webp" width={1000} height={1000} alt="The best Graphic Design and development company in Egypt and the Arab world - Line IT" objectFit="cover" />
      </motion.div>
    </motion.div>

    <div className="py-12 bg-gray-100">
      <div className="max-w-full mx-12 md:mx-20 sm:mx-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#E84E36] font-semibold">
          Graphic design services
          </h2>
          <p className="mt-2 md:text-5xl text-3xl font-bold text-gray-900">
          Our expertise is in graphic design solutions
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
