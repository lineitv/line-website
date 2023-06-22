import Head from "next/head";
import HomePage from "./components/HomePage";
import Service from "./components/Service";
import Works from "./components/Works";
import Blog from "./components/Blog";
import Skills from "./components/Skills";
import Carousel from "../components/carousel/Carousel"
import cImage from "../../public/images/c1.png";
import ccImage from "../../public/images/c2.png";
import c1 from "../../public/images/1.png";
import cs1 from "../../public/images/s/2.png";
import cs2 from "../../public/images/s/3.png";
import cs3 from "../../public/images/s/4.png";
import c2 from "../../public/images/2.png";
import c3 from "../../public/images/3.png";
import c4 from "../../public/images/4.png";
import c5 from "../../public/images/5.png";
import c6 from "../../public/images/6.png";
import c7 from "../../public/images/7.png";
import c8 from "../../public/images/8.png";
import c9 from "../../public/images/9.png";
import mImage from "../../public/images/l1.png";
import mmImage from "../../public/images/l2.png";
import Image from "next/image";
const Homee = () => {
    const title = 'Test Blog';
    const description = 'Welcome to my Notion Blog.'

    const slides = [
        cImage,
        ccImage,
    ]

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name={"description"} title={"description"} content={description}/>
                <meta name={"og:title"} title={"og:title"} content={title}/>
                <meta name={"og:description"} title={"og:description"} content={title}/>
            </Head>

            <header dir="rtl" className="bg-white w-full z-[60] fixed top-0">
            <nav className="flex justify-between items-center w-[92%]  mx-auto">
            <div>
                <img className="w-full cursor-pointer" src="../logo.png" alt="..."/>
            </div>
            <div className="nav-links duration-500 lg:static  absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
                <ul className=" flex lg:flex-row flex-col md:items-center  gap-7">
                    <li >
                        <a className="pt-2 pb-3 hover:text-[#bb0004] border-[#bb0004] hover:border-y-2" href="#">الرئيسية
                        </a>
                    </li>
                    <li className="">
                        <a className="" href="#">
                            عن بيبيون
                        </a>
                    </li>
                    <li className="relative">
                        <a  href="#">معرض الصور والفديوهات </a>
                     </li>
                    <li >
                    <div className="align-center ">
                   <button className="peer   py-7"> <span className=" flex"> متنجاتنا     <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> </span> </button>   
                    <div  className="hidden products absolute   flex-col lg:flex-row   peer-hover:flex hover:flex  bg-white drop-shadow-lg">
                             <a className="px-5 py-3 " href="#">
                                  <img src="../images/2cat.png"  width="300px" />
                                </a>
                                <a className="px-5 py-3 " href="#">
                                    <img src="../images/3cat.png"  width="300px"/>
                                </a>
                                <a className="px-5 py-3 " href="#">
                                    <img src="../images/4cat.png"  width="300px"/>
                                </a>
                     </div>
                     </div>    
                     </li>
                      <li className="relative">
                     <a className="hover:text-[#bb0004] " href="#"> المدونة </a>
                    </li>
                    <li className="relative ">
                    <div >
                        <button className="peer  py-7"> <span className="flex">تواصل معنا 
                        <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> </span> </button>   
                     <div  className="hidden  lg:absolute  top-27 flex-col  peer-hover:flex hover:flex  bg-white drop-shadow-lg">
                     <a className="px-5 py-3 " href="#">  فروع    </a> </div></div>
                     </li>    
                   <li className="relative">
                    <div >
                       <button className="peer  py-7"> <span className="flex">العربية  <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> </span> </button>   
                    <div className="hidden lg:absolute  top-27 flex-col  peer-hover:flex hover:flex  bg-white drop-shadow-lg">
                          <a className="px-5 py-3 " href="#">  العربي  </a>
                          <a className="px-5 py-3 " href="#" >  ENGLISH  </a>
                           
                    </div>
                    </div> 
                    </li>
                </ul>
            </div>
            <div className="flex  ">
                <div className="text-3xl cursor-pointer  lg:hidden"></div>
            </div> 
            </nav>     
    </header>
        <div className="lg:mt-24 bg-white md:mt-24 sm:mt-28 mt-24 pr-8 pl-8 min-w-7xl flex flex-wrap">
            <div className="lg:w-[25%] flex flex-col gap-[28px]">
            <Image className="max-w-[95%]" src={mImage} alt="seasonal-capsule-w17" />
            <Image className="max-w-[95%]" src={mmImage} alt="seasonal-capsule-w17" />
            </div>
            <Carousel slides={slides} controls indicators />
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-9 md:grid-cols-6 gap-4 pt-4 pb-4 bg-white pr-8 pl-8 text-center">
            <div><Image className="max-w-[100%] rounded-full mb-1" src={c1} alt="seasonal-capsule-w17" /> <p>بدل تركي</p></div>
            <div><Image className="max-w-[100%] rounded-full mb-1" src={c2} alt="seasonal-capsule-w17" /> <p>بليزر</p></div>
            <div><Image className="max-w-[100%] rounded-full mb-1" src={c3} alt="seasonal-capsule-w17" /> <p>أزرار</p></div>
            <div><Image className="max-w-[100%] rounded-full mb-1" src={c4} alt="seasonal-capsule-w17" /> <p>ربطات العنق</p></div>
            <div><Image className="max-w-[100%] rounded-full mb-1" src={c5} alt="seasonal-capsule-w17" /> <p>الساعات</p></div>
            <div><Image className="max-w-[100%] rounded-full mb-1" src={c6} alt="seasonal-capsule-w17" /> <p>حزام</p></div>
            <div><Image className="max-w-[100%] rounded-full mb-1" src={c7} alt="seasonal-capsule-w17" /> <p>حذاء</p></div>
            <div><Image className="max-w-[100%] rounded-full mb-1" src={c8} alt="seasonal-capsule-w17" /> <p> أطفال</p></div>
            <div><Image className="max-w-[100%] rounded-full mb-1" src={c9} alt="seasonal-capsule-w17" /> <p>بناطيل</p></div>
        </div>
        <div className="bg-[#F6F6F6] my-20 px-12 pd:px-20 lg:px-32 sm:px-20">
      <div className="flex flex-row justify-center my-5">
        <h2 className="text-4xl mb-4"> الأحدث
</h2>
      </div>
    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      <div className="rounded-lg">
        <a href="#">
          <Image src={cs1} className="max-w-[100%] rounded-tl-lg rounded-tr-lg" alt="d" />
        </a>
        <div className="p-5 text-center">
          <h3><a href="#">بدلة – سليم فيت – أسود</a></h3>
          <div className="flex justify-center">
            <a className="bg-gradient-to-r from-red-600 to-[#bb0004] rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="#">
              تفاصيل البدلة
            </a>
              {/* <div className='fixed inset-0 bg-black bg-opacity-30 flex z-50 text-white'>
                <div className='w-[490px] text-black h-full fixed bg-white'>
                  <div className="flex justify-center">
                    <Image src={cs1} className="max-w-[50%] h-[20rem] rounded-tl-lg rounded-tr-lg" alt="d" />
                  </div>

                  <div className="p-4">
                    <h3 className="border-b-2 border-black pb-2">بدلة سليم فيت أسود 5 قطع تركي</h3>
                    <p className="text-right border-b-2 text-gray-600 border-black p-2">اللون : أسود</p>
                    <p className="text-right border-b-2 text-gray-600 border-black p-2">المقاسات : يوجد جميع المقاسات مع امكانية تفصيل بدلة</p>
                    <p className="text-right border-b-2 text-gray-600 border-black p-2">القطع : بليزر + بنطلون + قميص</p>
                    <p className="text-right border-b-2 text-gray-600 border-black p-2">متواجد بكثرة في فرع : 33 شارع الأسكندرية</p>
                    
                  </div>
                </div>
              </div> */}
          </div>
        </div>
      </div>

      <div className="rounded-lg">
        <a href="#">
          <Image src={cs2} className="max-w-[100%] rounded-tl-lg rounded-tr-lg" alt="d" />
        </a>
        <div className="p-5 text-center">
          <h3><a href="#">بدلة – سليم فيت – أسود</a></h3>
          <div className="flex justify-center">
            <a className="bg-gradient-to-r from-red-600 to-[#bb0004] rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="#">
              تفاصيل البدلة
            </a>
          </div>
        </div>
      </div>

      <div className="rounded-lg">
        <a href="#">
          <Image src={cs3} className="max-w-[100%] rounded-tl-lg rounded-tr-lg" alt="d" />
        </a>
        <div className="p-5 text-center">
          <h3><a href="#">بدلة – سليم فيت – أسود</a></h3>
          <div className="flex justify-center">
            <a className="bg-gradient-to-r from-red-600 to-[#bb0004] rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="#">
              تفاصيل البدلة
            </a>
          </div>
        </div>
      </div>

      <div className="rounded-lg">
        <a href="#">
          <Image src={cs2} className="max-w-[100%] rounded-tl-lg rounded-tr-lg" alt="d" />
        </a>
        <div className="p-5 text-center">
          <h3><a href="#">بدلة – سليم فيت – أسود</a></h3>
          <div className="flex justify-center">
            <a className="bg-gradient-to-r from-red-600 to-[#bb0004] rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="#">
              تفاصيل البدلة
            </a>
          </div>
        </div>
      </div>

      <div className="rounded-lg">
        <a href="#">
          <Image src={cs3} className="max-w-[100%] rounded-tl-lg rounded-tr-lg" alt="d" />
        </a>
        <div className="p-5 text-center">
          <h3><a href="#">بدلة – سليم فيت – أسود</a></h3>
          <div className="flex justify-center">
            <a className="bg-gradient-to-r from-red-600 to-[#bb0004] rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="#">
              تفاصيل البدلة
            </a>
          </div>
        </div>
      </div>

      <div className="rounded-lg">
        <a href="#">
          <Image src={cs1} className="max-w-[100%] rounded-tl-lg rounded-tr-lg" alt="d" />
        </a>
        <div className="p-5 text-center">
          <h3><a href="#">بدلة – سليم فيت – أسود</a></h3>
          <div className="flex justify-center">
            <a className="bg-gradient-to-r from-red-600 to-[#bb0004] rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="#">
              تفاصيل البدلة
            </a>
          </div>
        </div>
      </div>
      </div>
    </div> 
        <HomePage />
        <Service />
        <Works />
        <Blog />
        <Skills />
        </>
    )
};

export default Homee;
