import Link from "next/link";
import Blog1 from "../../../public/blog/01.png";
import Blog2 from "../../../public/blog/02.png";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
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
export default function Example() {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-full md:mx-20 sm:mx-0 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#E84E36] font-semibold">
            أخر الأخبار
          </h2>
          <p className="mt-2 md:text-5xl text-4xl font-bold text-gray-900">
          مدونة لاين أي تي
          </p>
        </div>

        <div className="mt-10">
          <motion.div variants={container} initial="hidden"
                    whileInView="visible" className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <motion.div variants={item} className="bg-white md:ml-8 sm:ml-0 relative cursor-pointer rounded-lg transition-all shadow-black hover:shadow-md">
                <Image src={Blog1} width={2000} height={2000} alt="dd" objectFit="cover" />
                <Link href="/" >
                  <a className="my-2 hover:text-red-500 block text-center text-xl font-bold text-gray-900">
                    أفضل شركة سيو في مصر
                  </a>
                </Link>
                <div className=" flex justify-center mt-4">
                  <Link href="/">
                    <a className="text-white inline-block bg-[#E84E36] font-semibold rounded-full mb-4 px-5 md:py-4 py-2 hover:bg-black hover:shadow-lg">
                      أقرء المزيد
                    </a>
                  </Link>
                </div>
              </motion.div>
              <motion.div variants={item} className="bg-white md:ml-8 sm:ml-0 relative cursor-pointer rounded-lg transition-all shadow-black hover:shadow-md">
                <Image src={Blog2} width={2000} height={2000} alt="dd" objectFit="cover" />
                <Link href="/" className="my-2 hover:text-red-500 block text-center text-xl font-bold text-gray-900">
                  <a className="my-2 hover:text-red-500 block text-center text-xl font-bold text-gray-900">
                    أفضل شركة تصميم مواقع في مصر
                  </a>
                </Link>
                <div className=" flex justify-center mt-4">
                  <Link href="/">
                      <a className="text-white inline-block bg-[#E84E36] font-semibold rounded-full mb-4 px-5 md:py-4 py-2 hover:bg-black hover:shadow-lg">
                        أقرء المزيد
                      </a>
                    </Link>
                </div>
              </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}