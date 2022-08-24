import { fireEvent, render } from "@testing-library/react";
import Icon, { IconType } from "../index";

describe("Icon component", () => {
  test("Should render Icon component with iconSearch", () => {
    const { getByTestId } = render(<Icon iconName={IconType.search} />);
    const icon = getByTestId("icon");
    fireEvent.click(icon);
    expect(icon).toBeInTheDocument();
  });

  test("Should render Icon component with iconLetter", () => {
    const { getByTestId } = render(<Icon iconName={IconType.letter} />);
    const icon = getByTestId("icon");
    fireEvent.click(icon);
    expect(icon).toBeInTheDocument();
  });

  test("Should render Icon component with iconArrowRight", () => {
    const { getByTestId } = render(<Icon iconName={IconType.arrowRight} />);
    const icon = getByTestId("icon");
    fireEvent.click(icon);
    expect(icon).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(<Icon iconName={IconType.search} />);
    expect(container).toMatchSnapshot();
  });
});
