import { EXPERT_MOCKING } from "@constants/expert";
import { render } from "@testing-library/react";
import CardExpert from "../index";

describe("CardExpert component", () => {
  test("Should render CardExpert component", () => {
    const { getByTestId } = render(<CardExpert expert={EXPERT_MOCKING} />);
    const cardExpert = getByTestId("card-expert");
    expect(cardExpert).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(<CardExpert expert={EXPERT_MOCKING} />);
    expect(container).toMatchSnapshot();
  });
});
