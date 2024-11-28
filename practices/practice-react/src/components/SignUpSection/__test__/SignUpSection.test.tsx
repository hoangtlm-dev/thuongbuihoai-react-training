import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignUpSection from "../SignUpSection";

describe("SignUpSection component", () => {
  test("should render component SignUpSection", () => {
    const { getByTestId } = render(<SignUpSection />);
    expect(getByTestId("signUp-section")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<SignUpSection />);
    expect(asFragment()).toMatchSnapshot();
  });
});