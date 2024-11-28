import { render } from "@testing-library/react";
import MainSection from "../index";

describe("MainSection component", () => {
  test("Should render MainSection component", () => {
    const { getByTestId } = render(<MainSection />);
    const mainSection = getByTestId("main-section");
    expect(mainSection).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(<MainSection />);
    expect(container).toMatchSnapshot();
  });
});
