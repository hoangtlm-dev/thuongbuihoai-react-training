import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import url from "../../../../assets/images/logos/logo.png";
import Logo from "../Logo";

describe("Logo component", () => {
  test("should render logo component", () => {
    const { getByTestId } = render(<Logo src={url} />);
    expect(getByTestId("logo")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Logo src={url} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
