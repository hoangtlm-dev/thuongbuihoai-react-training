import { ExpertContextProps } from "@self-types/expert";
import { EXPERT_MOCKING_LIST } from "@constants/expert";
import { ExpertContext } from "@context/ExpertContext";
import { render } from "@testing-library/react";
import OurExpertPage from "@pages/expert-page";

const contextExpertMocking: ExpertContextProps = {
  experts: EXPERT_MOCKING_LIST,
  errorCode: 0,
  setExperts: jest.fn(),
  setErrorCode: jest.fn(),
  handleUpdateExperts: jest.fn(),
};

describe("ExpertPage", () => {
  test("Should render ExpertPage", () => {
    const { getByTestId } = render(
      <ExpertContext.Provider value={contextExpertMocking}>
        <OurExpertPage experts={EXPERT_MOCKING_LIST} errorCode={""} />
      </ExpertContext.Provider>,
    );
    const expertPage = getByTestId("layout");
    expect(expertPage).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(
      <ExpertContext.Provider value={contextExpertMocking}>
        <OurExpertPage experts={EXPERT_MOCKING_LIST} errorCode={""} />
      </ExpertContext.Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
