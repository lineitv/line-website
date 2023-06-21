import { motion } from 'framer-motion'
import { TbBrandWebflow } from 'react-icons/tb'
import { SiTailwindcss, SiPhp } from 'react-icons/si'
import { TbBrandGolang } from 'react-icons/tb'
import { BsBootstrapFill, BsAndroid2 } from 'react-icons/bs'
import { IoLogoJavascript, IoLogoVue, IoLogoReact, IoLogoPython, IoLogoNodejs } from 'react-icons/io5'

interface Props {
  name: string,
  Icon: any,
  color: string,
  x: string,
  y: string
}

const Skill = ({name, Icon, color, x, y}: Props) => {
  return(
          <motion.div 
            className='flex items-center justify-center rounded-full font-semibold md:text-sm text-xs   
            py-2 px-3 shadow-dark
            lg:py-2 lg:px-4 md:py-1.5 sm:py-1.5 md:px-3 bg-gray-900 text-white  
            absolute 
            '
            whileHover={{scale:1.05}}
            initial={{x:0,y:0}}
            whileInView={{x:x, y:y}}
            transition={{duration: 1.5}}
            >
              <Icon className={`pr-1 xl:text-3xl text-base text-[${color}]`} /> | {name}
            </motion.div>
  )
}

const Skills = () => {
  return (
    <section className='flex flex-col justify-center items-center bg-gray-100'>
        <h2 className='font-bold text-8xl mt-8 w-full text-center'>We Use Latest Technology</h2>
        <div className='w-[100%] md:w-[75%] mx-12 md:mx-20 sm:mx-20 px-4 sm:px-6 lg:px-8 sm:h-[90vh] h-[50vh] relative flex items-center justify-center rounded-full bg-circularLight'>
            <motion.div 
            className='flex items-center justify-center rounded-full font-semibold sm:bg-gray-900 sm:text-white text-black bg-transparent px-8 py-4 shadow-dark'
            whileHover={{scale:1.05}}
            >
              <TbBrandWebflow className='pr-1 text-3xl' /> | Web
            </motion.div>

            

            <Skill name="VueJS" Icon={IoLogoVue} color='#3fb984' x="-5vw" y="-10vw" />
            <Skill name="ReactJS" Icon={IoLogoReact} color='#00dcff' x="-20vw" y="2vw" />
            <Skill name="JavaScript" Icon={IoLogoJavascript} color='#f7df1e' x="20vw" y="2vw" />
            <Skill name="BootStrap" Icon={BsBootstrapFill} color='#810af9' x="0vw" y="12vw" />
            <Skill name="TailWind" Icon={SiTailwindcss} color='#01b7d6' x="-20vw" y="-15vw" />
            <Skill name="Python" Icon={IoLogoPython} color='#3979ab' x="15vw" y="-12vw" />
            <Skill name="NodeJS" Icon={IoLogoNodejs} color='#77b062' x="32vw" y="-5vw" />
            <Skill name="PHP" Icon={SiPhp} color='#787cb4' x="0vw" y="-20vw" />
            <Skill name="GO" Icon={TbBrandGolang} color='#75cddb' x="-20vw" y="18vw" />
            <Skill name="Android" Icon={BsAndroid2} color='#a4c639' x="15vw" y="18vw" />
        </div>
    </section>
  )
}

export default Skills