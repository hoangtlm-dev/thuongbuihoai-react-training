import { loadPosts } from "./lib/load-posts"

// This function runs only on the server side
export async function getStaticProps() {
  const posts = await loadPosts()
  return { props: { posts } }
}