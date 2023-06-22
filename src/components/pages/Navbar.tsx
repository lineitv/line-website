
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { BsHash } from "react-icons/bs";
import { AiOutlineLaptop, AiOutlineMobile, AiOutlineShoppingCart, AiFillCaretDown, AiOutlineClose } from "react-icons/ai";
import { SiGooglelens } from "react-icons/si"
import { BiPhoneCall } from "react-icons/bi"
import { HiArrowTrendingUp } from "react-icons/hi2"
import { HiMenuAlt3 } from "react-icons/hi"
import image from 'next/image';
import Link from "next/link"
const products = [
  { name: 'تطوير المواقع', description: 'ابني لنشاطك التجاري موقع إلكتروني', href: '/services/web-development-company', icon: AiOutlineLaptop },
  { name: 'تطوير تطبيقات الهاتف', description: 'امتلك تطبيق سريع علي الهواتف', href: '/services/app-development-company', icon: AiOutlineMobile },
  { name: 'متجر إلكتروني', description: 'امتلك متجر إلكتروني لعرض منتجاتك', href: '/services/ecommerce-company', icon: AiOutlineShoppingCart },
  { name: 'سيو', description: 'خلي موقعك الإلكتروني الأول في وسائل البحث', href: '/services/seo-company', icon: HiArrowTrendingUp },
  { name: 'سوشيال ميديا', description: 'تصميمات وأدارة سوشيال ميديا', href: '/services/social-company', icon: BsHash },
]
const callsToAction = [
  { name: 'كل الخدمات', href: '/services', icon: SiGooglelens, target:"_self" },
  { name: 'تواصل معنا', href: 'tel:+201025338973', icon: BiPhoneCall, target:"_blank" },
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Header(en: any) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header dir="rtl" className="bg-white fixed top-0 w-full z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-2" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/">
            <a className="-m-1.5 p-1.5">
            <span className="sr-only">شركة لاين أي تي : أفضل شركة تصميم مواقع وتطبيقات في مصر</span>
              <Image src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687041011/logo_lineit.webp" width={200} height={200} alt="لوجو عربي شركة لاين أي تي: أفضل شركة تصميم مواقع وتطبيقات في مصر" objectFit="cover" />
              <Image src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687041011/logo_lineit.webp" width={200} height={200} alt="لوجو عربي شركة لاين أي تي: أفضل شركة تصميم مواقع وتطبيقات في مصر" objectFit="cover" />
            </a>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">افتح المنيو</span>
            <HiMenuAlt3 className="h-10 w-10" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900">
              الخدمات
              <AiFillCaretDown className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -right-[10rem] top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <Link href={item.href} key={item.name}>
                      <a className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-[#E84E36] group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-white group-hover:text-black" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                      </a>
                    </Link>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a target={item.target}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link href="/company">
                <a className="text-lg font-semibold leading-6 text-gray-900">
                الشركة
                </a>
            </Link>
            <Link href="/portfolio">
                <a className="text-lg font-semibold leading-6 text-gray-900">
                معرض الأعمال
                </a>
            </Link>
            <Link href="/posts">
                <a className="text-lg font-semibold leading-6 text-gray-900">
                    المدونة
                </a>
            </Link>
          <Link href={`/${en.en ? `${en.en}` : "/en"}`}>
            <a className="text-lg font-semibold leading-6 text-gray-900"
            >English 🇬🇧
            </a>
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="tel:+201025338973" className="rounded-full border border-orange-100 px-3 py-2 text-sm font-medium text-[#E84E36] hover:bg-[#E84E36] hover:text-white  hover:shadow-lg">
                  201025338973+
        </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-[666]" />
        <Dialog.Panel dir='rtl' className="fixed inset-y-0 right-0 z-[666] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="-m-1.5 p-1.5">
                <span className="sr-only">شركة لاين أي تي : أفضل شركة تصميم مواقع وتطبيقات في مصر</span>
                <Image src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687041011/logo_lineit.webp" width={200} height={200} alt="لوجو عربي شركة لاين أي تي: أفضل شركة تصميم مواقع وتطبيقات في مصر" objectFit="cover" />
              </a>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only"> اقفل المنيو </span>
              <AiOutlineClose className="h-10 w-10" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        الخدمات
                        <AiFillCaretDown
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Link href={item.href}>
                            <Disclosure.Button
                            key={item.name}
                            as="a"
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                            {item.name}
                            </Disclosure.Button>
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link href="/company">
                  <a
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    الشركة
                  </a>
                </Link>
                <Link href="/portfolio">
                  <a
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    معرض الأعمال
                  </a>
                </Link>
                <Link href="/posts">
                  <a
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    المدونة
                  </a>
                </Link>
              </div>
              <div className="py-6">
                <Link href={`/${en.en ? `${en.en}` : "/en"}`}>
                  <a
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    English 🇬🇧
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
