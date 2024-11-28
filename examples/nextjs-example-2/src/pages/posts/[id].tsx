import React from "react";
import { BASE_URL } from "@src/constants/url";

interface Posts {
  id: string;
  content: string;
}

interface PostPaths {
  post: Posts;
}

// Your page paths depend on external data
export const getStaticPaths = async () => {
  // Call an external API endpoint to get posts
  const res = await fetch(`${BASE_URL}/posts`);
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post: Posts) => {
    return {
      params: { id: post.id },
    };
  });

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This also gets called at build time
export const getStaticProps = async (context: { params: { id: string } }) => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const id = context.params.id;
  const res = await fetch(`${BASE_URL}/posts/` + id);
  const post = await res.json();

  // Pass post data to the page via props
  return { props: { post } };
};

// Your page content depends on external data
const PostPath: React.FC<PostPaths> = ({ post }) => {
  return (
    <ul>
      <li>{post.content}</li>
    </ul>
  );
};

export default PostPath;
