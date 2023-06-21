import tagsen from "../../meta/tagsen.yml";

export type TagContentEn = {
  readonly slug: string;
  readonly name: string;
};

const tagMap: { [key: string]: TagContentEn } = generateTagMap();

function generateTagMap(): { [key: string]: TagContentEn } {
  let result: { [key: string]: TagContentEn } = {};
  for (const tag of tags.tags) {
    result[tag.slug] = tag;
  }
  return result;
}

export function getTag(slug: string) {
  return tagMap[slug];
}

export function listTags(): TagContent[] {
  return tags.tags;
}
