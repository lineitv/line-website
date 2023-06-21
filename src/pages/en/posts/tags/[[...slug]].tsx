import { GetStaticPaths, GetStaticProps } from "next";
import BasicMeta from "../../../../components/meta-en/BasicMeta";
import OpenGraphMeta from "../../../../components/meta-en/OpenGraphMeta";
import TwitterCardMeta from "../../../../components/meta-en/TwitterCardMeta";
import TagPostList from "../../../../components/pages-en/TagPostList";
import config from "../../../../lib-en/config";
import { countPosts, listPostContent, PostContent } from "../../../../lib-en/posts";
import { getTag, listTags, TagContent } from "../../../../lib-en/tags";
import Navbar from "../../../../components/pages-en/Navbar";

type Props = {
  params: any;
  posts: PostContent[];
  tag: TagContent;
  page?: string;
  pagination: {
    current: number;
    pages: number;
  };
};
export default function Index({ posts, tag, pagination, page }: Props) {
  const url = `/posts/tags/${tag.name}` + (page ? `/${page}` : "");
  const title = tag.name;
  return (
    <>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <TagPostList posts={posts} tag={tag} pagination={pagination} />
      <Navbar ar={`/posts/tags/${tag.name}` + (page ? `/${page}` : "")} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const queries = params.slug as string[];
  const [slug, page] = [queries[0], queries[1]];
  const posts = listPostContent(
    page ? parseInt(page as string) : 1,
    config.posts_per_page,
    slug
  );
  const tag = getTag(slug);
  const pagination = {
    current: page ? parseInt(page as string) : 1,
    pages: Math.ceil(countPosts(slug) / config.posts_per_page),
  };
  const props: {
    posts: PostContent[];
    tag: TagContent;
    pagination: { current: number; pages: number };
    page?: string;
  } = { posts, tag, pagination };
  if (page) {
    props.page = page;
  }
  return {
    props,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = listTags().flatMap((tag) => {
    const pages = Math.ceil(countPosts(tag.slug) / config.posts_per_page);
    return Array.from(Array(pages).keys()).map((page) =>
      page === 0
        ? {
            params: { slug: [tag.slug] },
          }
        : {
            params: { slug: [tag.slug, (page + 1).toString()] },
          }
    );
  });
  return {
    paths: paths,
    fallback: false,
  };
};