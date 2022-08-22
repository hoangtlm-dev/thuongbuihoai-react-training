import { GetStaticProps } from "next";
import React, { lazy, Suspense, useContext, useEffect } from "react";

// components
const Navigation = lazy(() => import("@components/common/Navigation"));
const ExpertList = lazy(() => import("@components/ExpertList"));
const Text = lazy(() => import("@components/common/Text"));
import { TextType } from "@components/common/Text";
import { Loader } from "@components/common";

// common-types
import { Expert } from "@common-types/expert";

// api
import { EXPERT_RESPONSE_DATA } from "@api-backup/expertResponseData";

// layouts
import Layout from "@layouts";

// context
import { ExpertContext } from "@context/ExpertContext";
import style from "./expert.module.css";

interface OurExpertProps {
  experts: Expert[];
  errorCode: string;
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const experts: Expert[] = EXPERT_RESPONSE_DATA;
    return {
      props: {
        experts: experts,
        errorCode: "",
      },
    };
  } catch (errorCode) {
    return {
      props: {
        experts: [],
        errorCode: errorCode,
      },
    };
  }
};

const OurExpertPage: React.FC<OurExpertProps> = ({ experts, errorCode }) => {
  const { handleUpdateExperts } = useContext(ExpertContext);
  useEffect(() => {
    handleUpdateExperts(errorCode, experts);
  }, []);

  return (
    <Layout>
      <div className={style["our-expert-container"]}>
        <div className={style["our-expert-navigation"]}>
          <Suspense fallback={<Loader />}>
            <Navigation />
          </Suspense>
        </div>
        <div className={style["our-expert-description"]}>
          <h2 className={style["our-expert-heading"]}>The DMM Expert Panel</h2>
          <Suspense fallback={<Loader />}>
            <Text
              size={TextType.regular}
              text="Our Expert Panel consists of thirty automotive industry experts who share their knowledge and experience to help keep dealers informed on various topics such as Business Development, Dealership Business, Fixed Ops, Internet Marketing, Advertising, AI, Tech Solutions, Industry & Consumer Research, and more. With a combined LinkedIn following of 113,000+ followers, as an automotive industry professional or vendor, you are guaranteed to learn something new."
            />
          </Suspense>
        </div>
        <div className={style["our-expert-list"]}>
          <Suspense fallback={<Loader />}>
            <ExpertList />
          </Suspense>
        </div>
      </div>
    </Layout>
  );
};

export default OurExpertPage;
