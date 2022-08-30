import { BLOG_MOCKING } from "@constants/blog";
import { EXPERT_MOCKING } from "@constants/expert";
import { render } from "@testing-library/react";
import Card from "../index";

describe("Card component", () => {
  test("Should render Card component with layout is center and content is center", () => {
    const { getByTestId } = render(
      <Card layout="center" content="center" blog={BLOG_MOCKING} />,
    );
    const card = getByTestId("research-section");
    expect(card).toBeInTheDocument();
  });

  test("Should render Card component with layout is center and content is center", () => {
    const { getByTestId } = render(
      <Card layout="left" content="center" blog={BLOG_MOCKING} />,
    );
    const card = getByTestId("research-section");
    expect(card).toBeInTheDocument();
  });

  test("Should render Card component with layout is left and content is grid", () => {
    const { getByTestId } = render(
      <Card
        imageSmall
        hasButton
        expert={EXPERT_MOCKING}
        layout="left"
        content="grid"
        blog={BLOG_MOCKING}
      />,
    );
    const card = getByTestId("research-section");
    expect(card).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(<Card blog={BLOG_MOCKING} />);
    expect(container).toMatchSnapshot();
  });
});
