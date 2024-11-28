import axios from "axios";
import React, { lazy, Suspense } from "react";
import Image from "next/image";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

// common-types
import { Expert } from "@self-types/expert";

// components
const Navigation = lazy(() => import("@components/common/Navigation"));
const Banner = lazy(() => import("@components/common/Banner"));
const Text = lazy(() => import("@components/common/Text"));
import { SizeType, ThemeType } from "@components/common/Text";
import { Loader } from "@components/common";

// constants
import { IMAGE } from "@constants/image";
import { EXPERTS_URL } from "@constants/url";

// layouts
import Layout from "@layouts/index";
import style from "./expert.module.css";

interface ExpertProps {
  expert: Expert;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths = async () => {
  const res = await axios.get(EXPERTS_URL);
  const experts = res.data;

  const paths = experts.map((expert: Expert) => {
    return {
      params: { slug: expert.slug },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const res = await axios.get(EXPERTS_URL);
  const experts = res.data.filter((item: Expert) => item.slug == slug);

  return {
    props: {
      expert: experts[0],
    },
  };
};

const OurExpert: React.FC<ExpertProps> = ({ expert }) => {
  const {
    name = "Matt Childers",
    info = "",
    description = "",
    image = {
      url: "/images/avatar/matt-childers.png",
      alt: "This is avatar of Matt Childers",
    },
  } = expert ? expert : {};

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Navigation />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Banner url={IMAGE.bannerUrl} />
      </Suspense>
      <div className={style["expert-detail"]}>
        <figure className={style["expert-detail-layout"]}>
          <Image
            src={image.url}
            alt={image.alt}
            width={130}
            height={130}
            className={style["expert-detail-image"]}
            placeholder="blur"
            blurDataURL={IMAGE.blurDataURL}
          />
        </figure>
        <div className={style["expert-detail-info"]}>
          <h2 className={style["expert-detail-name"]}>{name}</h2>
          <div className={style["expert-detail-content"]}>
            <Suspense fallback={<Loader />}>
              <Text theme={ThemeType.primary} text={info} />
            </Suspense>
          </div>
          <Suspense fallback={<Loader />}>
            <Text size={SizeType.regular} text={description} />
          </Suspense>
        </div>
      </div>
    </Layout>
  );
};

export default OurExpert;
