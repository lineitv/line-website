import config from "../../lib/config";
import Head from "next/head";

type Props = {
  url: string;
  description?: string;
  title: string;
};


export default function JsonLdMeta({
  url,
  title,
  description,
}: Props) {

        const addJsonLd = () => {
            return {
              __html: `
              "@context": "https://schema.org",
              "@graph": [
                {
                "@type": "WebSite",
                "@id": "${config.base_url + url}#website",
                "inLanguage": "ar-AR",
                "name": "${description ? description : config.site_description}",
                "url": "${config.base_url + url}",
                "email": "mailto:lineitcompany@gmail.com",
                "image": "https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687041011/logo_lineit.png",
                "sameAs": ["https://www.facebook.com/CanGrowOnline", "https://twitter.com/Cangrowonline?fbclid=IwAR3UM4TsqR2j1yFMP8hoxL0fQmMjzfyutDc0Z024EMW2m8XHpNc0FVN7ti0", "https://www.instagram.com/Cangrowonline/?fbclid=IwAR2MMeCRHpHkUs_tINza00sieprj9gY6OQnIK2GDAw5B0Uhyld4-hy0LQEc"],
                "telephone": "+201025338973"
            },
            {
                "@id": "https://ibrahim.elias-designer.com/feedback/#webpage",
                "@type": "WebPage",
                "description": "${description ? description : config.site_description}",
                "name": "${title}",
                "url": "${config.base_url + url}",
                "isPartOf": {
                  "@id": "${config.base_url + url}#website"
                },
                "potentialAction": [
                    {
                      "@type": "ReadAction",
                      "target": [
                        "${config.base_url + url}"
                      ]
                    }
            ]
              `
            }
          }

  return (
    <Head>
      <script type="application/ld+json"
      dangerouslySetInnerHTML={addJsonLd()}
      key="item-jsonld" />
    </Head>
  );
}