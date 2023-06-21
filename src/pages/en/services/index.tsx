import Head from "next/head";
import Navbar from "../../../components/pages/Navbar";
import Service from "../../../components/pages/Service";
import BasicMeta from "../../../components/meta-en/BasicMeta";
import OpenGraphMeta from "../../../components/meta-en/OpenGraphMeta";
import TwitterCardMeta from "../../../components/meta-en/TwitterCardMeta";
import ShemaMeta from "../../../components/meta-en/ShemaMeta";
const Web = () => {
  const title = 'Services';
  const url = '/en/services';
  const description = 'Services Line IT Company Best Web & App Development Company In Egypt - Read More In Services Line IT Company';
  const keywords = [ "Best Web Development Company In Egypt","Best App Development Company In Egypt"," Website Company"," Best Brice Web Development Company"," Front-End Company"," Back-End Company"," Full-Stack Company", "Line IT Company"]

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

            <Navbar ar="/services" />

<div className="lg:mt-14 md:mt-24 sm:mt-28 mt-24">
    <Service />
</div>

        </>
    )
};

export default Web;
