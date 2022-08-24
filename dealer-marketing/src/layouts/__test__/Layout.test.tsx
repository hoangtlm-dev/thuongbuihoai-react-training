import Layout from "@layouts";
import { render } from "@testing-library/react";

describe("Layout component", () => {
  test("Should render Layout component", () => {
    const { getByTestId } = render(<Layout />);
    const layout = getByTestId("layout");
    expect(layout).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(<Layout />);
    expect(container).toMatchSnapshot();
  });
});
