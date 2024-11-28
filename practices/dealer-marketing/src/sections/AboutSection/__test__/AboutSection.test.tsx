import { render } from "@testing-library/react";
import AboutSection from "../index";

describe("AboutSection component", () => {
  test("Should render AboutSection component", () => {
    const { getByTestId } = render(<AboutSection />);
    const aboutSection = getByTestId("about-section");
    expect(aboutSection).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(<AboutSection />);
    expect(container).toMatchSnapshot();
  });
});
