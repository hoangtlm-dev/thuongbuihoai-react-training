import useSWR from "swr";
import { Posts } from "./posts";
import style from "../../styles/profile-swr.module.css";
import { POSTS_URL } from "@src/constants/url";
import { getData } from "@src/helpers/fetchApi";
import PassProps from "./passProps";
import Link from "next/link";

const ProfileSWR = () => {
  const { data, error } = useSWR(POSTS_URL, getData<Posts[]>);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <div className={style.heading}>
        {data?.map((item) => (
          <h1 key={item.id}>{item.content}</h1>
        ))}
      </div>
      <Link href="/passProps">
        <PassProps posts={data} />
      </Link>
    </>
  );
};

export default ProfileSWR;
