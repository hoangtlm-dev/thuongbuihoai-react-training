import { render } from "@testing-library/react";
import SearchBox from "../SearchBox";

const openModal = jest.fn();
const searchValue = jest.fn();
const onScroll = jest.fn();
describe("SearchBox component", () => {
  test("Should render SearchBox component", () => {
    const { getByTestId } = render(
      <SearchBox
        openModal={openModal}
        onSearch={searchValue}
        onScroll={onScroll}
      />,
    );
    const searchBox = getByTestId("search-box");
    expect(searchBox).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(
      <SearchBox
        openModal={openModal}
        onSearch={searchValue}
        onScroll={onScroll}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
