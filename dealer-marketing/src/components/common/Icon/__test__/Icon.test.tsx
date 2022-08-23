import { fireEvent, render } from "@testing-library/react";
import Icon, { IconType } from "../index";

describe("Icon component", () => {
  const onClickButtonIcon = jest.fn();
  test("Should render Icon component with iconSearch", () => {
    const { getByTestId } = render(
      <Icon onClick={onClickButtonIcon} iconName={IconType.search} />,
    );
    const icon = getByTestId("icon");
    fireEvent.click(icon);
    expect(onClickButtonIcon).toHaveBeenCalled();
  });

  test("Should render Icon component with iconLetter", () => {
    const { getByTestId } = render(
      <Icon onClick={onClickButtonIcon} iconName={IconType.letter} />,
    );
    const icon = getByTestId("icon");
    fireEvent.click(icon);
    expect(onClickButtonIcon).toHaveBeenCalled();
  });

  test("Should render Icon component with iconArrowRight", () => {
    const { getByTestId } = render(
      <Icon onClick={onClickButtonIcon} iconName={IconType.arrowRight} />,
    );
    const icon = getByTestId("icon");
    fireEvent.click(icon);
    expect(onClickButtonIcon).toHaveBeenCalled();
  });

  test("Matches snapshot", () => {
    const { container } = render(
      <Icon onClick={onClickButtonIcon} iconName={IconType.search} />,
    );
    expect(container).toMatchSnapshot();
  });
});
