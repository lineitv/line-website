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
      name: "User Experience",
      desc : "The concept of user experience depends on how the site is designed, and the customer interacts with the website, through positive evaluations and comments from users, SEO helps convey the information the user needs from the site so that the site's ranking on search results does not decrease."
    },
    {
        name: "User Trust",
        desc : "The Internet user tends to follow the recommendations of the search engine by clicking on the sites that are at the top of the initial search results; This increases the visitor's confidence in the product or service provided through the website."
      },
      {
        name: "Appearance and arrangement",
        desc : "SEO increases the visibility of the website on search results, and also improves the site’s ranking in search engines, so it appears to the visitor on the first page, which increases the number of visits to your web page or site."
      },
      {
        name: "the growth",
        desc : "SEO increases the appearance of the site with a high rank in the search engines; Which increases the growth of the brand or service provided through the site, it is possible for the user to share the product through social networking sites, which increases the percentage of sales of the product."
      },
      {
        name: "SEO off site",
        desc : "This type is concerned with building links that help promote the website, and social networking sites can be used to increase the number of visits and achieve positive results in the shortest possible time. The website link can also be placed on other sites to contribute to the marketing process of the website and reach the largest number of visitors, through consultation Best seo company in egypt."
      },
      {
        name: "SEO within the site",
        desc : "This type is related to the search engine optimization of the web page, and to enhance the infrastructure of the content better than other pages, by choosing attractive titles, specific and non-repetitive keywords, in addition to well-formatting the page and improving its design in a user-friendly way."
      },
  ];

const Web = () => {
  const title = 'SEO Service';
  const url = '/en/services/seo-company';
  const description = 'Line IT Best SEO Company In Egypt - Read More In Line IT SEO Service';
  const keywords = [ "Best SEO Company In Egypt","SEO Company"," Best Brice SEO Company","Search Engine Company","Engine Optmization Company","Search Engine Optmization Company", "Line IT Company"]

    const [open, setOpen] = useState<false | null>(null);

    const toggle = (index: any) => {
        if(open === index) {
            return setOpen(null)
        }

        setOpen(index)
    }
    const accordionData = [
      {
        title: "Increase your website's visibility in the first search results",
        desc: "One of the most important benefits of SEO is improving the visibility of your site in the first results of search engines in Google, which means that more customers will find you, as visiting your site is related to the extent to which visitors see your products or services in the search results."
      },
      {
        title: "Increase the percentage of visits to the site",
        desc: "Increasing the number of visits is one of the primary goals of SEO, as it is directly related to your appearance on the first pages of Google search results."
      },
      {
        title: "Improve website authority",
        desc: "The authority of your site in Google means the extent to which search engines trust the content provided and its quality, and whether it is appropriate for the target group or not, so the higher the authority of your site, the better your ranking will be in the search results."
      },
      {
        title: "Technical SEO",
        desc: "To achieve the best results, a strong platform and a good website should be put in place to start content marketing and SEO activities, website coding standards, and website loading speed optimization."
      },
      {
        title: "Content marketing",
        desc: "SEO success cannot be achieved without content creation. Competitive analytics activities, keyword identification and writing user-friendly content are some of the most important points to pay attention to in SEO."
      },
      {
        title: "Target link building",
        desc: "If SEO standards and content production are observed, it leads to the first page of Google."
      },
      {
        title: "The best SEO company",
        desc: "It has become necessary for every website owner to create his own website, and Line IT is the best SEO company in Egypt and provides all marketing solutions, and we at Kangaroo have a large group of experts and professionals in the field of SEO, so it is assumed that your site is on the first page in Google search engines OFF PAGE SEO..."
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

            <Navbar ar="/services/seo-company" />

        <motion.div variants={container}
    initial="hidden"
    whileInView="visible" className="flex lg:flex-row flex-col justify-around items-center lg:mt-20 md:mt-24 sm:mt-28 mt-24 min-w-7xl md:h-[90vh]">
      
      <div className="flex flex-col items-center justify-start md:ml-20 md:w-[-webkit-fill-available] mx-10 mt-10 md:mt-0">
        <p className="text-[#E84E36] font-semibold text-base">A leading search engine optimization company
</p>
        <h2 className="font-bold lg:text-5xl text-2xl  text-gray-800">
        SEO Company
        </h2>
        <p className="md:text-xl text-xl text-center font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          SEO is an abbreviation for the word “search engine optimization”. It is a process of advertising the site and preparing it to appear in all search engines, especially the “GOOGLE” search engine, to facilitate the reader’s access to the site. The site may not appear permanently.
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
      <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/seo_wfkrvt.webp" width={2000} height={2000} alt="The best SEO company in Egypt and the Arab world - Line IT" objectFit="cover" />
        <CldOgImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/seo_wfkrvt.webp" width={2000} height={2000} alt="The best SEO company in Egypt and the Arab world - Line IT" objectFit="cover" />
      </motion.div>
      {/* textual area */}

    </motion.div>

    <div className="py-12 bg-gray-100">
      <div className="max-w-full mx-12 md:mx-20 sm:mx-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#E84E36] font-semibold">
          SEO services
          </h2>
          <p className="mt-2 md:text-5xl text-3xl font-bold text-gray-900">
          Our expertise is in web SEO solutions
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
