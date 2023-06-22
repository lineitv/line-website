import authorsen from "../../meta/authorsen.yml";

export type AuthorContentEn = {
  readonly slug: string;
  readonly name: string;
  readonly introduction: string;
};

const authorMap: { [key: string]: AuthorContentEn } = generateAuthorMap();

function generateAuthorMap(): { [key: string]: AuthorContentEn } {
  let result: { [key: string]: AuthorContentEn } = {};
  for (const author of authorsen.authorsen) {
    result[author.slug] = author;
  }
  return result;
}

export function getAuthor(slug: string) {
  return authorMap[slug];
}
