import Head from "next/head";
import config from "../../lib-en/config";

type Props = {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  url: string;
};
export default function BasicMeta({
  title,
  description,
  keywords,
  author,
  url,
}: Props) {
  return (
    <Head>
      <title>
        {title ? [title, config.site_title].join(" | ") : config.site_title}
      </title>
      <meta
        name="description"
        content={description ? description : config.site_description}
      />
      <meta
        name="keywords"
        content={
          keywords
            ? keywords.join(",")
            : config.site_keywords.map((it) => it.keyword).join(",")
        }
      />
      {author ? <meta name="author" content={author} /> : null}
      <meta name="contactStreetAddress1" content="Abdel Hadi Hassanein Street, Al-Haram" />
      <meta name="apple-mobile-web-app-title" content={title ? [title, config.site_title].join(" | ") : config.site_title}/>
      <meta name="application-name" content={title ? [title, config.site_title].join(" | ") : config.site_title} />
      <meta name="title" content={title ? [title, config.site_title].join(" | ") : config.site_title} />
      <meta name="note" content="Line IT Best Website & App Development Company In Egypt" />
      <meta name="subject" content={title ? [title, config.site_title].join(" | ") : config.site_title} />
      <meta name="identifier-URL" content="https://www.elias-designer.com/" />
      <meta name="linkage" content="https://www.elias-designer.com/" />
      <meta name="msapplication-tooltip" content="Line IT Best Website & App Development Company In Egypt" />
      <link rel="canonical" href={config.base_url + url} />
      <link rel="alternate" hrefLang="ar" href={config.base_url + url} />
      <link rel="alternate" hrefLang="en" href={config.base_url + "/en" + url} />
      <link rel="alternate" hrefLang="x-default" href={config.base_url + url} />
    </Head>
  );
}