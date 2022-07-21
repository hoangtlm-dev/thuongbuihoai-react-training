import React from "react";
import { BASE_URL } from "../../src/constants/url";

interface Posts {
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
  return {
    props: { posts },
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
