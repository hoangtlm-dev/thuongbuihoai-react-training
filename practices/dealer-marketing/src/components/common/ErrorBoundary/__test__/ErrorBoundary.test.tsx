import BlogList from "@components/BlogList";
import { render } from "@testing-library/react";
import ErrorBoundary from "../index";

describe("ErrorBoundary component", () => {
  test("Should render ErrorBoundary component", () => {
    const { getByTestId } = render(<ErrorBoundary children={<BlogList />} />);
    const errorBoundary = getByTestId("blog-list");
    expect(errorBoundary).toBeInTheDocument();
  });

  test("shows the fallback when there's an error", () => {
    const Throws = () => {
      throw new Error("Something went wrong.");
    };

    const fallback = (error: any) => <span>Error: {error.message}</span>;
    const { getByTestId, unmount } = render(
      <ErrorBoundary children={fallback}>
        <Throws />
      </ErrorBoundary>,
    );
    getByTestId("error-boundary");
    unmount();
  });

  test("Matches snapshot", () => {
    const { container } = render(<ErrorBoundary children={<BlogList />} />);
    expect(container).toMatchSnapshot();
  });
});
