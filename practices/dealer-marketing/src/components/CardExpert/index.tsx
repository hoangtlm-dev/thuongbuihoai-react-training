import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Expert, ExpertContentType } from "@self-types/expert";
import { EXPERT_MOCKING } from "@constants/expert";
import { Button, Text } from "@components/common";
import { IMAGE } from "@constants/image";
import { ButtonType } from "@components/common/Button";
import { ThemeType } from "@components/common/Text";
import CustomLink from "@components/common/CustomLink";
import styleCardExpert from "./cardExpert.module.css";

interface CardExpertProps {
  isImage?: boolean;
  url?: string;
  alt?: string;
  key?: string;
  isDescription?: boolean;
  isLayoutImage?: boolean;
  urlContact?: string;
  altContact?: string;
  expert?: Expert;
  layout?: string;
  description?: string;
}

const CardExpert: React.FC<CardExpertProps> = ({
  isImage = false,
  url = IMAGE.urlExpert,
  alt = IMAGE.altExpert,
  isDescription = false,
  isLayoutImage = false,
  urlContact = IMAGE.urlContact,
  altContact = IMAGE.altContact,
  expert = EXPERT_MOCKING,
  layout = ExpertContentType.border,
  description = "This is description of interviews",
}) => (
  <div data-testid="card-expert" className={styleCardExpert[`card-${layout}`]}>
    {isLayoutImage ? (
      <figure className={styleCardExpert["card-view"]}>
        <Image
          src={url}
          alt={alt}
          width={130}
          height={130}
          className={styleCardExpert["card-image"]}
          placeholder="blur"
          blurDataURL={IMAGE.blurDataURL}
        />
      </figure>
    ) : (
      <figure className={styleCardExpert["card-layout"]}>
        <Image
          src={expert?.image.url}
          alt={expert?.image.alt}
          width={130}
          height={130}
          className={styleCardExpert["card-image"]}
          placeholder="blur"
          blurDataURL={IMAGE.blurDataURL}
        />
      </figure>
    )}
    {isDescription ? (
      <div className={styleCardExpert["card-description"]}>
        <Text text={description} />
      </div>
    ) : (
      <CustomLink
        href={`/expert-page/${expert.slug}`}
        children={<Text size={ThemeType.secondary} text={expert?.name} />}
      />
    )}
    {isImage ? (
      <div className={styleCardExpert["card-contact"]}>
        <Image
          src={urlContact}
          alt={altContact}
          width={135}
          height={60}
          className={styleCardExpert["card-image-contact"]}
          placeholder="blur"
          blurDataURL={IMAGE.blurDataURL}
        />
      </div>
    ) : (
      <>
        <div className={styleCardExpert["card-info"]}>
          <Text text={expert?.info} />
        </div>
        <div className={styleCardExpert["card-button"]}>
          <Link href={`/expert-page/${expert.slug}`} passHref>
            <Button type={ButtonType.buttonIcon} icon />
          </Link>
        </div>
      </>
    )}
  </div>
);

export default memo(CardExpert);
