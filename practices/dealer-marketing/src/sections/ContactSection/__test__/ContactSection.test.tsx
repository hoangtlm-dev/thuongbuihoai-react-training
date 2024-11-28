import { render } from "@testing-library/react";
import ContactSection from "..";

describe("ContactSection component", () => {
  test("Should render ContactSection component", () => {
    const { getByTestId } = render(<ContactSection />);
    const contactSection = getByTestId("contact-section");
    expect(contactSection).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(<ContactSection />);
    expect(container).toMatchSnapshot();
  });
});
