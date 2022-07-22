import React from "react";
import { BASE_URL } from "../../src/constants/url";

export interface Posts {
  id: string;
  content: string;
}

interface PostContents {
  posts: Posts[];
}

// This function gets called at build time
export const getStaticProps = async () => {
  const res = await fetch(`${BASE_URL}/posts`);
  const posts = await res.json();
  if (!res.ok) {
    // If there is a server error, you might want to
    // throw an error instead of returning so that the cache is not updated
    // until the next successful request.
    throw new Error(`Failed to fetch posts, received status ${res.status}`)
  }
  return {
    props: { posts },
    revalidate: 10,
  };
}

// Your page content depends on external data
const PostContent: React.FC<PostContents> = ({ posts }) => {
  return (
    <ul>
      {posts?.map((post: Posts) => (
        <li key={post.id}>{post.content}</li>
      ))}
    </ul>
  );
};

export default PostContent;
