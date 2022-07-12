import React, { memo } from "react";
import url from "@assets/images/backgrounds/vegetables-fruits.png";
import Text from "@components/common/Text/Text";
import Input from "@components/common/Input/Input";
import Button from "@components/common/Button/Button";
import "./signUpSection.css";

const SignUpSection: React.FC = memo(() => {
  return (
    <section data-testid="signUp-section" className="section__signUp">
      <figure>
        <img src={url} alt="This is image vegetables-fruits" />
      </figure>
      <div className="section__content">
        <Text
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          type="medium"
        />
        <div className="section__info">
          <Text
            text="Subscribe to get 10% Discount and promotion"
            type="normal"
          />
        </div>
        <div className="section__address">
          <Input type="text" placeholder="Email address" />
          <Button text="Sign Up" type="large" />
        </div>
      </div>
    </section>
  );
});

export default SignUpSection;
