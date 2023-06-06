import { fetchMarkdownPosts } from "$lib/utils";
import { json } from "@sveltejs/kit";

export const GET = async () => {
  const allPosts = await fetchMarkdownPosts();

  const sortedPosts = allPosts.sort((a, b) => {
    return (
      new Date(b.meta.date).getMilliseconds() -
      new Date(a.meta.date).getMilliseconds()
    );
  });

  console.log("u8fgqe")

  return json(sortedPosts);
};