import useSWR from "swr";
import { POSTS_URL } from "../src/constants/url";
import { getData } from "../src/helpers/fetchApi";
import { Posts } from "./posts";
import style from "../styles/profile-swr.module.css";

const ProfileSWR = () => {
  const { data, error } = useSWR(POSTS_URL, getData<Posts[]>);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className={style.heading}>
      {data?.map((item) => <h1 key={item.id}>{item.content}</h1>)}
    </div>
  );
};

export default ProfileSWR;
