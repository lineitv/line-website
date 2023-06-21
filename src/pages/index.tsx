import HomePage from "../components/pages/HomePage";
import Service from "../components/pages/Service";
import Works from "../components/pages/Works";
import Blog from "../components/pages/Blog";
import Skills from "../components/pages/Skills";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import ShemaMeta from "../components/meta/ShemaMeta";
import Navbar from "../components/pages/Navbar";

const Home = () => {
    const title = 'الرئيسية';
    const url = "/";
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

        {/* <Navbar en="en"/> */}
        <Navbar en="/en"/>
        <HomePage />
        <Works />
        <Service />
        <Blog />
        <Skills />
        </>
    )
};

export default Home;
