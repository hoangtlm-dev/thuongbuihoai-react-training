import React, { memo } from "react";
import { Text } from "@components/common";
import { ThemeType } from "@components/common/Text";
import style from "../../pages/style.module.css";

const AboutSection: React.FC = () => (
  <div data-testid="about-section" className="container">
    <div className={style["about-page-layout"]}>
      <h2 className={style["about-page-heading"]}>The DMM Expert Panel</h2>
      <Text
        size={ThemeType.primary}
        text="Dealer Marketing Magazine is a leading online trade publication that speaks to a large online audience of dealers and auto industry professionals. Our focus is on editorial content that educates and enlightens auto dealers using the latest research, how-to, and thought leadership articles."
      />
      <Text
        size={ThemeType.primary}
        text="The magazine’s journey began in 2002 by offering syndicated automotive television commercials that dealers could use in their own markets. After successfully running a printed magazine for 16 years, the magazine is now a digital platform offering dealers expert automotive knowledge at their fingertips."
      />
      <Text
        size={ThemeType.primary}
        text="We believe that dealers are going through an enormous transformation in this current whirlwind digital era, and we are here to support them by providing new tech, trends, research, and strategies used by automotive industry leaders to catapult business growth and success."
      />
      <h2 className={style["about-page-heading"]}>WHAT WE TALK ABOUT</h2>
      <Text
        size={ThemeType.primary}
        text="Our experience suggests that dealers are eager to understand the evolving 21st century customer journey as well as the competitive nature thereof and are interested in learning how to be more effective marketers."
      />
      <Text
        size={ThemeType.primary}
        text="In order to stay competitive, dealers need to gear up and embrace the future of automotive. A provider of fresh viewpoints, Dealer Marketing Magazine delivers exceptional insight focused on The Customer Journey and The Dealership Business."
      />
      <h2 className={style["about-page-heading"]}>THE EXPERTS</h2>
      <Text
        size={ThemeType.primary}
        text="Our Expert Panel consists of thirty passionate automotive industry experts who share their knowledge, research, and experience to help keep dealers informed on various topics such as Marketing & Advertising, Lead Generation, F&I, Digital Retailing, Leadership & Management, Mobility, and more."
      />
      <h2 className={style["about-page-heading"]}>STAY CONNECTED</h2>
      <Text
        size={ThemeType.primary}
        text="Want to stay up to date with the latest automotive Best Practices, Commentary, Research, and Events? Sign up for our newsletter here to receive some new perspectives and grow your network."
      />
      <h2 className={style["about-page-heading"]}>THE EXPERTS</h2>
      <Text
        size={ThemeType.primary}
        text="To list your automotive event for free, contact us at events@dealermarketing.com"
      />
    </div>
  </div>
);

export default memo(AboutSection);
