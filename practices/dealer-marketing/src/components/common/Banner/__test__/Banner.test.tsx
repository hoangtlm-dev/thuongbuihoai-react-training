import { IMAGE } from "@constants/image";
import { render } from "@testing-library/react";
import Banner from "../index";

describe("Banner component", () => {
  test("Should render Banner component", () => {
    const { getByTestId } = render(<Banner url={IMAGE.bannerUrl} />);
    const banner = getByTestId("banner");
    expect(banner).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(<Banner url={IMAGE.bannerUrl} />);
    expect(container).toMatchSnapshot();
  });
});
