import { render } from "@testing-library/react";
import ErrorPage from "@pages/404";

describe("ErrorPage", () => {
  test("Should render ErrorPage", () => {
    const { getByTestId } = render(<ErrorPage />);
    const error = getByTestId("error-page");
    expect(error).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(<ErrorPage />);
    expect(container).toMatchSnapshot();
  });
});
