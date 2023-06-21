import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar';
import Navbar from '../components/pages/Navbar';
import { useRouter } from 'next/router'
import Footer from '../components/pages/Footer';
import FooterEn from '../components/pages-en/Footer';
import Head from 'next/head';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
     <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/ico" href="/assets/img/favicon.ico" />
        <link rel="icon" href="https://lineitsolutions.com/images/favicon-32x32.png" type="image/png" />
        <link rel="apple-touch-icon" href="https://lineitsolutions.com/images/favicon-32x32.png" />
        <meta name="theme-color" content="#F6F6F6" />
        <meta name="secound-theme-color" content="#E84E36" />
        <meta property="fb:page_id" content="109927755373749" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="distribution" content="global" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#F6F6F6" />
        <meta name="owner" content="https://lineitsolutions.com" />
        <meta name="copyright" content="https://lineitsolutions.com" />
        <meta name="web_author" content="Ahmed Waled" />
        <meta name="author" content="Ahmed Waled" />
        <meta name="operator" content="Ahmed Waled" />
        <meta name="contactCity" content="cairo" />
        <meta name="contactCountry" content="Egypt" />
        <meta name="MSSmartTagsPreventParsing" content="true" />
        <meta name="contactOrganization" content="https://lineitsolutions.com" />
        <meta name="contactPhoneNumber" content="+201025338973" />
        <meta name="contactNetworkAddress" content="https://lineitsolutions.com" />
        <meta name="robots" content="index, follow" />
        <meta name="msapplication-starturl" content="https://lineitsolutions.com" />
        <meta name="DC.Creator" content="Developed By Ahmed Waled" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="apple-touch-icon" href="https://lineitsolutions.com/assets/img/logo.jpg" />
        <link rel="apple-touch-icon-precomposed" href="https://lineitsolutions.com/assets/img/logo.jpg" />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="twitter:image:src" content="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687041011/logo_lineit.png" />
      </Head>
      <NextNProgress color="#E84E36" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true}/>
        <div 
        className='bg-[#F6F6F6]'
        >
          <Component {...pageProps} />
          {
            useRouter().pathname.indexOf("/en") > -1 ? <FooterEn /> : <Footer />
          }
        </div>
    </>
  );
}

export default MyApp;


// https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687041011/logo_lineit.png
