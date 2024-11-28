import { render } from "@testing-library/react";
import Loader from "../index";

describe("Loader component", () => {
  test("Should render Loader component", () => {
    const { getByTestId } = render(<Loader />);
    const loader = getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(<Loader />);
    expect(container).toMatchSnapshot();
  });
});
