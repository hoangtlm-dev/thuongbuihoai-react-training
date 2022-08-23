import { IMAGE } from "@constants/image";
import { render } from "@testing-library/react";
import Logo from "../index";

describe("Logo component", () => {
  test("Should render Logo component", () => {
    const { getByTestId } = render(<Logo url={IMAGE.logoUrl} />);
    const logo = getByTestId("logo");
    expect(logo).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(<Logo url={IMAGE.logoUrl} />);
    expect(container).toMatchSnapshot();
  });
});
