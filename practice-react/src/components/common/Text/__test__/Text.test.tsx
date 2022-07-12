import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Text from "../Text";

describe("component Text", () => {
  test("should render component Text type 'blur' ", () => {
    const { getByTestId } = render(<Text type="blur" text="Offers" />);
    expect(getByTestId("text")).toBeInTheDocument();
  });

  test("should render component Text type 'normal' ", () => {
    const { getByTestId } = render(<Text type="normal" text="Offers" />);
    expect(getByTestId("text")).toBeInTheDocument();
  });

  test("should render component Text type 'color' ", () => {
    const { getByTestId } = render(<Text type="color" text="Offers" />);
    expect(getByTestId("text")).toBeInTheDocument();
  });

  test("should render component Text type 'normal' ", () => {
    const { getByTestId } = render(<Text type="blur" text="Offers" />);
    expect(getByTestId("text")).toBeInTheDocument();
  });

  test("should render component Text type 'medium' ", () => {
    const { getByTestId } = render(<Text type="medium" text="Offers" />);
    expect(getByTestId("text")).toBeInTheDocument();
  });

  test("should render component Text type 'large' ", () => {
    const { getByTestId } = render(<Text type="large" text="Offers" />);
    expect(getByTestId("text")).toBeInTheDocument();
  });

  test("should render component Text type 'large-dark' ", () => {
    const { getByTestId } = render(<Text type="large-dark" text="Offers" />);
    expect(getByTestId("text")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Text text="Offers" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
