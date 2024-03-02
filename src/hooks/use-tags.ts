import { useState } from "react";

type UseTags = (
  items: string[],
) => [
  string[],
  { addTag: (tag: string) => void; removeTag: (tag: string) => void },
];

const useTags: UseTags = (items: string[]) => {
  const [tags, setTags] = useState<string[]>(items);

  const addTag = (tag: string) => {
    setTags([...tags, tag]);
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return [tags, { addTag, removeTag }];
};

export default useTags;
