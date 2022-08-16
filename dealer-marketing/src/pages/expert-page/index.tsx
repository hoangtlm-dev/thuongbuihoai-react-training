import React, { useContext, useEffect } from "react";
// components
import { Navigation, Text } from "@components/common";
import { ExpertList } from "@components";
import { TextType } from "@components/common/Text";

import { Expert } from "@common-types/expert";
import { DataContext } from "@context/DataContext";
import { EXPERT_RESPONSE_DATA } from "@api-backup/expertResponseData";
import Layout from "@layouts";
import style from "@/styles/base/common.module.css";

interface OurExpertProps {
  experts: Expert[];
  errorCode: string;
}

export const getStaticProps = async () => {
  try {
    // const res = await axios.get(EXPERT_URL);
    // const experts = res.data;
    const experts: Expert[] = EXPERT_RESPONSE_DATA;
    return {
      props: {
        experts: experts,
        errorCode: false,
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
  const { setExperts, setErrorCode } = useContext(DataContext);
  useEffect(() => {
    setExperts(experts);
    setErrorCode(errorCode);
  }, []);

  return (
    <Layout>
      <div className={style["style-our-expert"]}>
        <div className={style["style-navigation"]}>
          <Navigation />
        </div>
        <div className={style["style-description"]}>
          <h2 className={style["style-heading"]}>The DMM Expert Panel</h2>
          <Text
            size={TextType.regular}
            text="Our Expert Panel consists of thirty automotive industry experts who share their knowledge and experience to help keep dealers informed on various topics such as Business Development, Dealership Business, Fixed Ops, Internet Marketing, Advertising, AI, Tech Solutions, Industry & Consumer Research, and more. With a combined LinkedIn following of 113,000+ followers, as an automotive industry professional or vendor, you are guaranteed to learn something new."
          />
        </div>
        <div className={style["style-expert"]}>
          <ExpertList />
        </div>
      </div>
    </Layout>
  );
};

export default OurExpertPage;
