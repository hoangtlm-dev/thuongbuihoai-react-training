import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Icon from "../Icon";

describe("Icon component", () => {
  test("should render component Icon type 'plus' ", () => {
    const { getByTestId } = render(<Icon iconName="plus" />);
    expect(getByTestId("icon")).toBeInTheDocument();
  });

  test("should render component Icon type 'filter' ", () => {
    const { getByTestId } = render(<Icon iconName="filter" />);
    expect(getByTestId("icon")).toBeInTheDocument();
  });

  test("should render component Icon type 'minus' ", () => {
    const { getByTestId } = render(<Icon iconName="minus" />);
    expect(getByTestId("icon")).toBeInTheDocument();
  });

  test("should render component Icon type 'cart' ", () => {
    const { getByTestId } = render(<Icon iconName="cart" />);
    expect(getByTestId("icon")).toBeInTheDocument();
  });

  test("should render component Icon type 'fb' ", () => {
    const { getByTestId } = render(<Icon iconName="fb" />);
    expect(getByTestId("icon")).toBeInTheDocument();
  });

  test("should render component Icon type 'twitter' ", () => {
    const { getByTestId } = render(<Icon iconName="twitter" />);
    expect(getByTestId("icon")).toBeInTheDocument();
  });

  test("should render component Icon type 'instagram' ", () => {
    const { getByTestId } = render(<Icon iconName="instagram" />);
    expect(getByTestId("icon")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Icon iconName="plus" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
