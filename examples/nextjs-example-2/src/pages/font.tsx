import Head from "next/head";
import style from "../../styles/Home.module.css";

const MyPage: React.FC = () => {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <p className={style.font}>Hello world!</p>
    </div>
  );
};

export default MyPage;
