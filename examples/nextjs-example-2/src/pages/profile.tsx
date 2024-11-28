import { POSTS_URL } from "@src/constants/url";
import { useEffect, useState } from "react";
import { Posts } from "./posts";

const Profile: React.FC = () => {
  const [data, setData] = useState<Posts[]>();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(POSTS_URL)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div>
      {data?.map((item) => (
        <h1 className="title" key={item.id}>
          {item.content}
        </h1>
      ))}
    </div>
  );
};

export default Profile;
