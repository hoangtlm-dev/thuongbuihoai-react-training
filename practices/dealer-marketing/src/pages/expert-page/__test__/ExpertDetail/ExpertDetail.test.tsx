import { EXPERT_MOCKING, EXPERT_MOCKING_LIST } from "@constants/expert";
import { render } from "@testing-library/react";
import OurExpert from "@pages/expert-page/[slug]";

jest.mock("@context/ExpertContext");
const ExpertContext = require("@context/ExpertContext");

ExpertContext.ExpertProvider.mockImplementation(() => {
  return { experts: EXPERT_MOCKING_LIST, errorCode: "success" };
});

describe("ExpertDetail page", () => {
  test("Should render ExpertDetail page", () => {
    const { getByTestId } = render(<OurExpert expert={EXPERT_MOCKING} />);
    const expertDetail = getByTestId("layout");
    expect(expertDetail).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(<OurExpert expert={EXPERT_MOCKING} />);
    expect(container).toMatchSnapshot();
  });
});
