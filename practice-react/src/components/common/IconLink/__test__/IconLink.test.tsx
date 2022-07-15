import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import IconLink from "../IconLink";
import ICON_LINK from "@constants/iconLink";

describe("IconLink component", () => {
  test("should render IconLink component", () => {
    const { getByTestId } = render(
        <IconLink iconList={ICON_LINK} />
    );
    expect(getByTestId("icon-link")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(
        <IconLink iconList={ICON_LINK} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
