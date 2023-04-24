import { render, screen } from "@testing-library/react";
import Button from "./index";

describe("Button component", () => {
  test("Should render Button component with type 'default'", async () => {
    render(<Button text="" />);
    const clickBtn = screen.getByRole("button");
    expect(clickBtn).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(
      <Button text="READ MORE" />,
    );
    expect(container).toMatchSnapshot();
  });
});
