import React, { lazy, Suspense } from "react";
import Image from "next/image";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

// common-types
import { Expert } from "@common-types/expert";

// components
const Navigation = lazy(() => import("@components/common/Navigation"));
const Banner = lazy(() => import("@components/common/Banner"));
const Text = lazy(() => import("@components/common/Text"));
import { TextType } from "@components/common/Text";
import { Loader } from "@components/common";

// api
import { EXPERT_RESPONSE_DATA } from "@api-backup/expertResponseData";

// constants
import { IMAGE } from "@constants/image";

// layouts
import Layout from "@layouts";
import style from "./expert.module.css";

interface ExpertProps {
  expert: Expert;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths = async () => {
  const experts: Expert[] = EXPERT_RESPONSE_DATA;

  const paths = experts.map((expert: Expert) => {
    return {
      params: { slug: expert.slug },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const res = EXPERT_RESPONSE_DATA.filter((item) => item.slug == slug);

  return {
    props: {
      expert: res[0],
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
              <Text size={TextType.regularDark} text={info} />
            </Suspense>
          </div>
          <Suspense fallback={<Loader />}>
            <Text size={TextType.regular} text={description} />
          </Suspense>
        </div>
      </div>
    </Layout>
  );
};

export default OurExpert;
