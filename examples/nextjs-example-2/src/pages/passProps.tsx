import React from "react";
import { Posts } from "./posts";

interface PassProp {
  posts: Posts[];
}

const PassProps: React.FC<PassProp> = ({ posts }) => {
  return (
    <div>
      {posts?.map((post) => (
        <div key={post.id}>{post.content}</div>
      ))}
    </div>
  );
};

export default PassProps;
