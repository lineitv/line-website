import React from "react";
import { PostContent } from "../../lib/posts";
import PostItem from "./PostItem";
import TagLink from "./TagLink";
import Pagination from "./Pagination";
import { TagContent } from "../../lib/tags";
import Link from "next/link";
type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};

export default function PostList({ posts, tags, pagination }: Props) {
 
  return (
<>

<div className="lg:mt-20 mt-[4.2rem] items-center">
<h2 className="flex felx-col items-center justify-center pt-2 text-lg text-[#E84E36] font-semibold">
          فئات
          </h2>
          <div className="flex items-center overflow-auto justify-center">
              {tags.map((it, i) => (
                <span className="p-4 mr-2 bg-[#E84E36] text-white rounded-3xl" key={i}>
                  <TagLink tag={it} />
                </span>
              ))}
          </div>

		</div>

    <div className="flex justify-center">
    <h2 className="flex felx-col items-center justify-center pt-2 text-lg text-[#E84E36] font-semibold">
          الصفحات
          </h2>
			<button type="button" className="px-6 pb-3 text-xl rounded-md hover:underline"><Pagination
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: (page) => (page === 1 ? "/posts" : "/posts/page/[page]"),
            as: (page) => (page === 1 ? null : "/posts/page/" + page),
          }}
        /></button>
		</div>


      <section className="dark:bg-gray-800 dark:text-gray-100 mt-[1rem]">
	<div className="container min-w-7xl p-6 mx-auto space-y-6 sm:space-y-12">
  <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2">
          {posts.map((it, i) => (
            <div key={i} className="group hover:no-underline focus:no-underline dark:bg-gray-900">
              <PostItem post={it} />
            </div>
          ))}
		</div>
	</div>
  <div className="flex justify-center">
			<button type="button" className="px-6 pb-3 text-xl rounded-md hover:underline"><Pagination
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: (page) => (page === 1 ? "/posts" : "/posts/page/[page]"),
            as: (page) => (page === 1 ? null : "/posts/page/" + page),
          }}
        /></button>
		</div>
</section>


     
      </>
  );
}
