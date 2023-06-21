import HomePage from "../../components/pages-en/HomePage";
import Navbar from "../../components/pages-en/Navbar";
import Service from "../../components/pages-en/Service";
import Works from "../../components/pages-en/Works";
import Blog from "../../components/pages-en/Blog";
import Skills from "../../components/pages-en/Skills";
import BasicMeta from "../../components/meta-en/BasicMeta";
import OpenGraphMeta from "../../components/meta-en/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta-en/TwitterCardMeta";
import ShemaMeta from "../../components/meta-en/ShemaMeta";

const Home = () => {
    const title = 'الرئيسية';
    const url = "/en";
    return (
        <>
        <BasicMeta 
            url={url} 
            title={title} 
        />
        <OpenGraphMeta 
            url={url} 
            title={title} 
        />
        <TwitterCardMeta 
            url={url} 
            title={title} 
        />
        <ShemaMeta
            url={url} 
            title={title}
      />

        <Navbar ar="/"/>
        <HomePage />
        <Works />
        <Service />
        <Blog />
        <Skills />
        </>
    )
};

export default Home;
