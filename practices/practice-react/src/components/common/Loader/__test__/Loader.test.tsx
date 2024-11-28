import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loader from "../Loader";

describe("Loader component", () => {
  test("should render Loader component", () => {
    const { getByTestId } = render(<Loader />);
    expect(getByTestId("loading-page")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Loader />);
    expect(asFragment()).toMatchSnapshot();
  });
});
