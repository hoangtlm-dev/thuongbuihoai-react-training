import React from "react";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

// common-types
import { Expert } from "@common-types/expert";

// components
import { Banner, Navigation, Text } from "@components/common";
import { TextType } from "@components/common/Text";
import CustomImage from "@components/common/CustomImage";

import { EXPERT_RESPONSE_DATA } from "@api-backup/expertResponseData";
import { IMAGE } from "@constants/image";
import Layout from "@layouts";
import style from "@/styles/base/common.module.css";

interface ExpertProps {
  expert: Expert;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths = async () => {
  // const experts = await axios.get(EXPERT_URL);
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
  // const res = await axios.get(EXPERT_URL + "?slug=" + slug);
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
      <Navigation />
      <Banner url={IMAGE.bannerUrl} />
      <div className={style["expert-detail"]}>
        <figure className={style["expert-detail-layout"]}>
          <CustomImage
            url={image.url}
            alt={image.alt}
            width={130}
            height={130}
            className={style["expert-detail-image"]}
          />
        </figure>
        <div className={style["style-info"]}>
          <h2 className={style["style-name"]}>{name}</h2>
          <div className={style["style-content"]}>
            <Text size={TextType.regularDark} text={info} />
          </div>
          <Text size={TextType.regular} text={description} />
        </div>
      </div>
    </Layout>
  );
};

export default OurExpert;
