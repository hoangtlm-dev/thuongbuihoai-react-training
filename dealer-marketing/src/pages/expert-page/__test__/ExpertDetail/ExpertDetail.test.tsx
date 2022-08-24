import { EXPERT_MOCKING, EXPERT_MOCKING_LIST } from "@constants/expert";
import { ExpertContextProps } from "@common-types/expert";
import { ExpertContext } from "@context/ExpertContext";
import { render } from "@testing-library/react";
import OurExpert from "@pages/expert-page/[slug]";

const contextExpertMocking: ExpertContextProps = {
  experts: EXPERT_MOCKING_LIST,
  errorCode: 0,
  setExperts: jest.fn(),
  setErrorCode: jest.fn(),
  handleUpdateExperts: jest.fn(),
};

describe("ExpertDetail page", () => {
  test("Should render ExpertDetail page", () => {
    const { getByTestId } = render(
      <ExpertContext.Provider value={contextExpertMocking}>
        <OurExpert expert={EXPERT_MOCKING} />
      </ExpertContext.Provider>,
    );
    const expertDetail = getByTestId("layout");
    expect(expertDetail).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(
      <ExpertContext.Provider value={contextExpertMocking}>
        <OurExpert expert={EXPERT_MOCKING} />
      </ExpertContext.Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
