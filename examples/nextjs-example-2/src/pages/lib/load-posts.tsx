import { BASE_URL } from "../../src/constants/url";

// This function gets called at build time
export const loadPosts = async () => {
  const res = await fetch(`${BASE_URL}/posts`);
  const posts = await res.json();
  return posts
}