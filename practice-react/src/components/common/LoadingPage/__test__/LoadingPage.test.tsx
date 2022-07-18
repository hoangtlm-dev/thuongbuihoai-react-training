import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoadingPage from "../LoadingPage";

describe("LoadingPage component", () => {
  test("should render LoadingPage component", () => {
    const { getByTestId } = render(<LoadingPage />);
    expect(getByTestId("loading-page")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<LoadingPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
