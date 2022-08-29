import { render } from "@testing-library/react";
import ExpertList from "../index";

describe("ExpertList component", () => {
  test("Should render ExpertList component", () => {
    const { getByTestId } = render(<ExpertList />);
    const expertList = getByTestId("expert-list");
    expect(expertList).toBeInTheDocument();
  });

  test("Should render ExpertList component when error data", () => {
    const { getByTestId } = render(<ExpertList />);
    const expertList = getByTestId("expert-list");
    expect(expertList).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(<ExpertList />);
    expect(container).toMatchSnapshot();
  });
});
