import { render } from "@testing-library/react";
import ExpertSection from "..";

describe("ExpertSection component", () => {
  test("Should render ExpertSection component", () => {
    const { getByTestId } = render(<ExpertSection />);
    const expertSection = getByTestId("expert-section");
    expect(expertSection).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(<ExpertSection />);
    expect(container).toMatchSnapshot();
  });
});
