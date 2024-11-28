import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Text from "../Text";

describe("component Text", () => {
  test("should render component Text size 'blur' ", () => {
    const { getByTestId } = render(<Text size="blur" text="Offers" />);
    expect(getByTestId("text")).toBeInTheDocument();
  });

  test("should render component Text size 'normal' ", () => {
    const { getByTestId } = render(<Text size="normal" text="Offers" />);
    expect(getByTestId("text")).toBeInTheDocument();
  });

  test("should render component Text size 'color' ", () => {
    const { getByTestId } = render(<Text size="color" text="Offers" />);
    expect(getByTestId("text")).toBeInTheDocument();
  });

  test("should render component Text size 'normal' ", () => {
    const { getByTestId } = render(<Text size="blur" text="Offers" />);
    expect(getByTestId("text")).toBeInTheDocument();
  });

  test("should render component Text size 'medium' ", () => {
    const { getByTestId } = render(<Text size="medium" text="Offers" />);
    expect(getByTestId("text")).toBeInTheDocument();
  });

  test("should render component Text size 'large' ", () => {
    const { getByTestId } = render(<Text size="large" text="Offers" />);
    expect(getByTestId("text")).toBeInTheDocument();
  });

  test("should render component Text size 'large-dark' ", () => {
    const { getByTestId } = render(<Text size="large-dark" text="Offers" />);
    expect(getByTestId("text")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Text text="Offers" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
