import { EXPERT_MOCKING_LIST } from "@constants/expert";
import { render } from "@testing-library/react";
import ExpertList from "../index";

jest.mock("@context/ExpertContext");
const ExpertContext = require("@context/ExpertContext");

ExpertContext.ExpertProvider.mockImplementation(() => {
  return { experts: EXPERT_MOCKING_LIST, errorCode: "success" };
});

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
