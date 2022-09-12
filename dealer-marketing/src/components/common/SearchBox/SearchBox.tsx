import React, {
  lazy,
  memo,
  MouseEventHandler,
  Suspense,
  useCallback,
  useContext,
} from "react";
import { BlogContext } from "@context/BlogContext";
import debounce from "@helpers/debounce";
import styleNavigation from "../Navigation/navigation.module.css";
import Loader from "../Loader";
const Input = lazy(() => import("../Input"));

interface SearchBoxProps {
  openModal: Function;
  onScroll: MouseEventHandler<HTMLInputElement>;
}

const SearchBox = React.forwardRef<HTMLInputElement, SearchBoxProps>(
  ({ onScroll }, ref) => {
    const { setSearchValue } = useContext(BlogContext);

    const handleSearch = useCallback(
      async (event: { target: { value: string } }) => {
        const value = event.target.value;
        debounce(() => setSearchValue(value), 500);
      },
      [],
    );
    return (
      <div data-testid="search-box" className={styleNavigation["nav-search"]}>
        <Suspense fallback={<Loader />}>
          <Input
            type="text"
            ref={ref}
            placeholder="Search the site..."
            onChange={handleSearch}
            onClick={onScroll}
          />
        </Suspense>
      </div>
    );
  },
);

export default memo(SearchBox);
