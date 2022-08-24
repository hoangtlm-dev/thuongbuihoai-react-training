import { ExpertContextProps } from "@common-types/expert";
import { EXPERT_MOCKING_LIST } from "@constants/expert";
import { ExpertContext } from "@context/ExpertContext";
import { render } from "@testing-library/react";
import ExpertList from "../index";

const contextExpertMocking: ExpertContextProps = {
  experts: EXPERT_MOCKING_LIST,
  errorCode: 0,
  setExperts: jest.fn(),
  setErrorCode: jest.fn(),
  handleUpdateExperts: jest.fn(),
};

describe("ExpertList component", () => {
  test("Should render ExpertList component", () => {
    const { getByTestId } = render(
      <ExpertContext.Provider value={contextExpertMocking}>
        <ExpertList />
      </ExpertContext.Provider>,
    );
    const expertList = getByTestId("expert-list");
    expect(expertList).toBeInTheDocument();
  });

  test("Should render ExpertList component when error data", () => {
    const { getByTestId } = render(<ExpertList />);
    const expertList = getByTestId("expert-list");
    expect(expertList).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(
      <ExpertContext.Provider value={contextExpertMocking}>
        <ExpertList />
      </ExpertContext.Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
