import { render } from "@testing-library/react";
import AboutPage from "../index";

describe("AboutPage", () => {
  test("Should render AboutPage", () => {
    const { getByTestId } = render(<AboutPage />);
    const aboutPage = getByTestId("layout");
    expect(aboutPage).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(<AboutPage />);
    expect(container).toMatchSnapshot();
  });
});
