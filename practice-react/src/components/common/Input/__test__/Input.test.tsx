import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "../Input";

describe("Input component", () => {
  test("should render Input component", () => {
    const { getByTestId } = render(<Input type="text" placeholder="Email address" />);
    expect(getByTestId("input-value")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Input type="text" placeholder="Email address" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
