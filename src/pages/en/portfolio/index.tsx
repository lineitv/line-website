import Navbar from "../../../components/pages-en/Navbar";
import Works from "../../../components/pages-en/Works";
import BasicMeta from "../../../components/meta-en/BasicMeta";
import OpenGraphMeta from "../../../components/meta-en/OpenGraphMeta";
import TwitterCardMeta from "../../../components/meta-en/TwitterCardMeta";
import ShemaMeta from "../../../components/meta-en/ShemaMeta";
const Home = () => {
    const title = 'Work Gallery';
    const url = '/en/portfolio';
    const description = 'work gallery Line IT Company - Best Web Development Company In Egypt and the Arab world';
    const keywords = [ "Best Web Development Company In Egypt","Website Company","Mobile App Company","SEO Company"," Best Brice Web Development Company"," Front-End Company"," Back-End Company"," Full-Stack Company", "Line IT Company"]
  
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

            <Navbar ar="/portfolio" />
        <div className="lg:mt-14 md:mt-24 sm:mt-28 mt-14"></div>
        <Works />

        </>
    )
};

export default Home;
