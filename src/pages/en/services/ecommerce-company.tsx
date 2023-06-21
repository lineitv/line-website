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
      name: "Magento development",
      desc : "Having several years of experience providing great Magento store solutions, we offer custom Magento development to develop a store selling products, provide Magento payment methods, develop plugins, and customize themes that lead to high user engagement."
    },
    {
        name: "Shopify development",
        desc : "Having several years of experience providing great Shopify store solutions, we offer custom Shopify development to develop a store that sells products, provide Shopify payment methods, develop plugins, and customize themes that lead to high user engagement."
      },
      {
        name: "WooCommerce development",
        desc : "Having several years of experience in providing WooCommerce solutions with great WordPress, we offer custom WordPress development to develop a store selling products, provide WordPress payment methods, develop plugins and customize themes that lead to high user engagement."
      },
  ];

const Web = () => {
  const title = 'Ecommerce service';
  const url = '/en/services/ecommerce-company';
  const description = 'Line IT Best Ecommerce Development Company In Egypt - Read More In Line IT Ecommerce development Service';
  const keywords = [ "Best Ecommerce Development Company In Egypt"," Ecommerce Company"," Best Brice Ecommerce Development Company","Magento Company","Sopify Company"," WooCommerce Company", "Line IT Company"]

    const [open, setOpen] = useState<false | null>(null);

    const toggle = (index: any) => {
        if(open === index) {
            return setOpen(null)
        }

        setOpen(index)
    }
    const accordionData = [
      {
        title: "When a customer has finished shopping, can I send an invoice confirmation receipt?",
        desc: "The invoice receipt is sent automatically via the e-commerce software."
      },
      {
        title: "Can I email a newsletter to all clients with an email address book with one command?",
        desc: "The email newsletter mailing list is not part of the e-commerce program."
      },
      {
        title: "Can I have a search box for the customer if they want to search for items?",
        desc: "Yes, we offer a website search box tool."
      },
      {
        title: "Can all credit cards be accepted? If not, please tell me which ones can't be accepted and do you have paypal?",
        desc: "Yes, all major credit cards can be accepted. The ecommerce software can integrate with a number of different payment systems, for example paypal, protx, nochex, worldpay, google checkout, Barclays epdq - you can just choose one of them to use for the website"
      },
      {
        title: "Can I have a flash banner ad on the site?",
        desc: "The site does not come with flash ads - you can get an external flash banner design and we can add it to the website. As an alternative, we can incorporate rotating photo banners to suit the purpose."
      },
      {
        title: "Can I make my site look similar like Amazon or Noon",
        desc: "It's hard to get a site that is 100% like the sites you mentioned. We can design something similar."
      },
      {
        title: "Can I get a voucher gift on my website and how will that work?",
        desc: "Yes, there is a voucher gifting facility that comes with the programme."
      },
      {
        title: "Can your company help me improve my website and marketing campaigns using Google etc.?",
        desc: "We provide a search engine optimization tool for the website. It can be agreed to deal with marketing campaigns."
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

            <Navbar ar="/services/ecommerce-company" />

        <motion.div variants={container}
    initial="hidden"
    whileInView="visible" className="flex lg:flex-row flex-col justify-around items-center lg:mt-20 md:mt-24 sm:mt-28 mt-24 min-w-7xl md:h-[90vh]">
      
      <div className="flex flex-col items-center justify-start md:ml-20 md:w-[-webkit-fill-available] mx-10 mt-10 md:mt-0">
        <p className="text-[#E84E36] font-semibold text-base">A leading e-commerce company
</p>
        <h2 className="font-bold lg:text-5xl text-2xl  text-gray-800">
        Online Store Development
        </h2>
        <p className="md:text-xl text-xl text-center font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          Take your business to the next level by working with our team of industry professionals and strategic partners who offer only the best IT and eCommerce solutions in the market.
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
      <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/ecommerce_y13z4q.webp" width={2000} height={2000} alt="The best Ecommerce design and development company in Egypt and the Arab world - Line IT" objectFit="cover" />
        <CldOgImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/ecommerce_y13z4q.webp" width={2000} height={2000} alt="The best Ecommerce design and development company in Egypt and the Arab world - Line IT" objectFit="cover" />
      </motion.div>
      {/* textual area */}

    </motion.div>

    <motion.div variants={container}
    initial="hidden"
    whileInView="visible" className="flex lg:flex-row flex-col justify-around items-center lg:mt-4 md:mt-4 sm:mt-4 mt-4 min-w-7xl md:h-[70vh]">
    
      <div className="flex flex-col items-center justify-center md:ml-20 md:w-[-webkit-fill-available] mx-10 mt-10 md:mt-0">
      <p className="text-[#E84E36] font-semibold text-xl">E-commerce development     
</p>
        <p dir="rtl" className="md:text-xl text-xl text-right font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          We are a leading e-commerce website development company, designing amazing web-based e-commerce solutions for a great online shopping experience. Our e-commerce website development services include complete web design for your online e-commerce store and custom e-commerce web development for small, medium and large sized retail businesses. Our expertise in popular e-commerce platforms such as Magento based e-commerce website development, WooCommerce, OsCommerce, Zen Cart, OpenCart, Shopify, etc. has helped us deliver world-class e-commerce web solutions with a powerful content management system. Online.
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
      <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/ecommerce_rxtw54.webp" width={1000} height={1000} alt="The best ecommerce design and development company in Egypt and the Arab world - Line IT" objectFit="cover" />
      </motion.div>
    </motion.div>

    <div className="py-12 bg-gray-100">
      <div className="max-w-full mx-12 md:mx-20 sm:mx-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#E84E36] font-semibold">
          Sale store development services
          </h2>
          <p className="mt-2 md:text-5xl text-3xl font-bold text-gray-900">
          Our expertise is in Ecommerce solutions
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
