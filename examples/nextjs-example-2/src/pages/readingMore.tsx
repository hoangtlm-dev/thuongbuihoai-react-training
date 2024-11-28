import { BASE_URL } from "@src/constants/url";
import { useRouter } from "next/router";
import { Posts } from "./posts";

interface ReadMoreProps {
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
    throw new Error(`Failed to fetch posts, received status ${res.status}`);
  }
  return {
    props: { posts },
    revalidate: 10,
  };
};

const ReadMore: React.FC<ReadMoreProps> = ({ posts }) => {
  const router = useRouter();

  return (
    <>
      {posts?.map((post) => (
        <ul key={post.id}>
          <li
            onClick={() => {
              router.push({
                pathname: "/posts/[id]",
                query: { id: post.id },
              });
            }}>
            {post.content}
          </li>
        </ul>
      ))}
    </>
  );
};

export default ReadMore;
