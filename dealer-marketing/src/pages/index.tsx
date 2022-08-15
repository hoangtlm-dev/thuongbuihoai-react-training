import type { NextPage } from "next";
import { useContext, useEffect } from "react";

// components
import { Banner, Navigation } from "@components/common";

// common-types
import { Blog } from "@common-types/blog";

import { DataContext } from "@context/DataContext";
import MainSection from "@sections/MainSection";
import { BLOG_RESPONSE_DATA } from "@api-backup/blogResponseData";
import Layout from "@layouts";

interface HomeProps {
  blogs: Blog[];
  errorCode: string;
}

export const getStaticProps = async () => {
  try {
    // const res = await axios.get(BLOG_URL);
    // const blogs = res.data;
    const blogs: Blog[] = BLOG_RESPONSE_DATA;
    return {
      props: {
        blogs: blogs,
        errorCode: false,
      },
    };
  } catch (errorCode) {
    return {
      props: {
        blogs: [],
        errorCode: errorCode,
      },
    };
  }
};

const Home: NextPage<HomeProps> = ({ blogs, errorCode }) => {
  const { setBlogs, setErrorCode } = useContext(DataContext);
  useEffect(() => {
    setBlogs(blogs);
    setErrorCode(errorCode);
  }, []);

  return (
    <Layout>
      <Navigation />
      <Banner
        url="/images/backgrounds/home-page.png"
        blurDataURL="/images/backgrounds/blur.jpg"
        text="Expert Automotive Knowledge at Your Fingertips"
      />
      <MainSection />
    </Layout>
  );
};

export default Home;
