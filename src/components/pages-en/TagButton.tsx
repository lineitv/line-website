import Link from "next/link";
import { TagContentEn } from "../../lib-en/tags";

type Props = {
  tag: TagContentEn;
};
export default function TagButton({ tag }: Props) {
  return (
    <>
      <Link href={"/en/posts/tags/[[...slug]]"} as={`/posts/tags/${tag.slug}`}>
        <a>{tag.name}</a>
      </Link>
      <style jsx>{`
        a {
          display: inline-block;
          border-radius: 3px;
          background-color: #E84E36;
          color: #ffffff;
          transition: background-color 0.3s ease;
          padding: 0.25em 0.5em;
        }
        a:active,
        a:hover {
          background-color: #c34431;
        }
      `}</style>
    </>
  );
}
