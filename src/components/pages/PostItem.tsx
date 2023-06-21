import Link from "next/link";
import { PostContent } from "../../lib/posts";
import Date from "./Date";
import { parseISO } from "date-fns";
type Props = {
  post: PostContent;
};

export default function PostItem({ post }: Props) {
  return (
    <Link href={"/posts/" + post.slug}>
    <a>
    <img role="presentation" className="object-cover w-full rounded h-[auto] dark:bg-gray-500" src={post.image} />
				<div className="text-center pt-6 space-y-2">
					<h3 className="text-2xl block font-semibold group-hover:underline group-focus:underline">{post.title}</h3>
					<span className="text-xs dark:text-gray-400"><Date date={parseISO(post.date)} /></span>
				</div>
    </a>
    </Link>
  );
}
