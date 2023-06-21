import Head from "next/head";
import Navbar from "../../components/pages/Navbar";
import Service from "../../components/pages/Service";
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

const Web = () => {
  const title = 'خدماتنا';
  const url = '/services';
  const description = 'شركة لاين اي تي أفضل شركة تصميم مواقع وتطبيقات في مصر - تصفح خدماتنا المميزة في الشركة';
  const keywords = [ "أفضل شركة تحسين محركات البحث في مصر","أفضل شركة تصميم مواقع في مصر","أفضل شركة تصميم تطبيقات في مصر","شركة سيو مواقع","شركة ادارة صفحات سوشيال ميديا","شركة تطوير مواقع كاملة", "شركة لاين اي تي"]

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
            <Navbar en="/en/services"/>

<div className="lg:mt-14 md:mt-24 sm:mt-28 mt-24">
    <Service />
</div>

        </>
    )
};

export default Web;
