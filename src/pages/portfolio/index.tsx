import Navbar from "../../components/pages/Navbar";
import Works from "../../components/pages/Works";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import ShemaMeta from "../../components/meta/ShemaMeta";
const Home = () => {
    const title = 'معرض الأعمال';
    const url = '/portfolio';
    const description = 'معرض أعمال شركة لاين اي تي - أفضل شركة تصميم مواقع وتطبيقات في مصر';
    const keywords = [ "أفضل شركة تصميم مواقع في مصر","شركة برمجة مواقع","شركة برمجة تطبيات هاتف","شركة سيو","أفضل سعر لشركة تصميم مواقع","شركة تطوير الواجهة الامامية","شركة تطوير الواجهة الخلفية","شركة تطوير مواقع كاملة", "شركة لاين اي تي"]
  
    
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
            <Navbar en="/en/portfolio"/>
        <div className="lg:mt-14 md:mt-24 sm:mt-28 mt-14"></div>
        <Works />

        </>
    )
};

export default Home;
