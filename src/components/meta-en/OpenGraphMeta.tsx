import Head from "next/head";
import config from "../../lib-en/config";

type Props = {
  url: string;
  title?: string;
  description?: string;
  image?: string;
};
export default function OpenGraphMeta({
  url,
  title,
  description,
  image,
}: Props) {
  return (
    <Head>
      <meta property="og:site_name" content={config.site_title} />
      <meta property="og:url" content={config.base_url + url} />
      <meta
        property="og:title"
        content={title ? [title, config.site_title].join(" | ") : ""}
      />
      <meta
        property="og:description"
        content={description ? description : config.site_description}
      />
      <meta
        property="og:image"
        content={"https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687041011/logo_lineit.png"}
      />
      <meta property="og:locale" content="ar_AR" />
      <meta property="og:type" content="website" />
    </Head>
  );
}
