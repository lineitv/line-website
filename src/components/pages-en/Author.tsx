import { AuthorContentEn } from "../../lib-en/authors";

type Props = {
  author: AuthorContentEn;
};
export default function Author({ author }: Props) {
  return (
    <>
      <span>{author.name}</span>
      <style jsx>
        {`
          span {
            color: #9b9b9b;
          }
        `}
      </style>
    </>
  );
}
