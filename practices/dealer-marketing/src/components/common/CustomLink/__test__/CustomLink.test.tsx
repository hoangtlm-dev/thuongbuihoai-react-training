import Banner from "@components/common/Banner";
import { IMAGE } from "@constants/image";
import { render } from "@testing-library/react";
import CustomLink from "../index";

describe("CustomLink component", () => {
  test("Should render CustomLink component", () => {
    const { getByTestId } = render(
      <CustomLink href="/" children={<Banner url={IMAGE.bannerUrl} />} />,
    );
    const customLink = getByTestId("custom-link");
    expect(customLink).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(
      <CustomLink href="/" children={<Banner url={IMAGE.bannerUrl} />} />,
    );
    expect(container).toMatchSnapshot();
  });
});
