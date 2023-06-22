import { GetStaticPaths, GetStaticProps } from "next";
import BasicMeta from "../../../../components/meta-en/BasicMeta";
import OpenGraphMeta from "../../../../components/meta-en/OpenGraphMeta";
import TwitterCardMeta from "../../../../components/meta-en/TwitterCardMeta";
import PostList from "../../../../components/pages-en/PostList";
import config from "../../../../lib-en/config";
import { countPosts, listPostContent, PostContent } from "../../../../lib-en/posts";
import { listTags } from "../../../../lib-en/tags";
import { TagContent } from "../../../../lib/ty";
import Navbar from "../../../../components/pages-en/Navbar";
type Props = {
  posts: PostContent[];
  tags: TagContent[];
  page: number;
  pagination: {
    current: number;
    pages: number;
  };
};
export default function Page({ posts, tags, pagination, page }: Props) {
  const url = `/en/posts/page/${page}`;
  const title = `posts page ${page}`;
  return (
    <>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <Navbar ar={`/posts/page/${page}`} />
      <PostList posts={posts} tags={tags} pagination={pagination} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const page = parseInt(params.page as string);
  const posts = listPostContent(page, config.posts_per_page);
  const tags = listTags();
  const pagination = {
    current: page,
    pages: Math.ceil(countPosts() / config.posts_per_page),
  };
  return {
    props: {
      page,
      posts,
      tags,
      pagination,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = Math.ceil(countPosts() / config.posts_per_page);
  const paths = Array.from(Array(pages - 1).keys()).map((it) => ({
    params: { page: (it + 2).toString() },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};