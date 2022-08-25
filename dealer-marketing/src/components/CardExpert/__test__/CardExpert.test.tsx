import { ExpertContextProps } from "@common-types/expert";
import { EXPERT_MOCKING, EXPERT_MOCKING_LIST } from "@constants/expert";
import { ExpertContext } from "@context/ExpertContext";
import { render } from "@testing-library/react";
import CardExpert from "../index";

const contextExpertMocking: ExpertContextProps = {
  experts: EXPERT_MOCKING_LIST,
  errorCode: 0,
  setExperts: jest.fn(),
  setErrorCode: jest.fn(),
  handleUpdateExperts: jest.fn(),
};

describe("CardExpert component", () => {
  test("Should render CardExpert component", () => {
    const { getByTestId } = render(
      <ExpertContext.Provider value={contextExpertMocking}>
        <CardExpert expert={EXPERT_MOCKING} />
      </ExpertContext.Provider>,
    );
    const cardExpert = getByTestId("card-expert");
    expect(cardExpert).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(
      <ExpertContext.Provider value={contextExpertMocking}>
        <CardExpert expert={EXPERT_MOCKING} />
      </ExpertContext.Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
