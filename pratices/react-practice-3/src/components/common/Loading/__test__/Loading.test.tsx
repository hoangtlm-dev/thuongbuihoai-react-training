import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loading from "../Loading";

describe("Loading component", () => {
  test("should render loading component", () => {
    const { getByTestId } = render(<Loading />);
    expect(getByTestId("loading-page")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Loading />);
    expect(asFragment()).toMatchSnapshot();
  });
})