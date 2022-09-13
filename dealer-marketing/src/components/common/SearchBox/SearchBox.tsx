import React, { memo, MouseEventHandler, useCallback, useContext } from "react";
import { BlogContext } from "@context/BlogContext";
import Input from "../Input";
import debounce from "@helpers/debounce";
import styleNavigation from "../Navigation/navigation.module.css";
interface SearchBoxProps {
  openModal: Function;
  onScroll: MouseEventHandler<HTMLInputElement>;
}

const SearchBox = React.forwardRef<HTMLInputElement, SearchBoxProps>(
  ({ onScroll }, ref) => {
    const { setSearchValue, isLoading, setIsLoading } = useContext(BlogContext);

    const handleSearch = useCallback(
      async (event: { target: { value: string } }) => {
        const value = event.target.value;
        setIsLoading(!isLoading);
        debounce(() => {
          setSearchValue(value);
          setIsLoading(isLoading);
        }, 500);
      },
      [],
    );

    return (
      <div data-testid="search-box" className={styleNavigation["nav-search"]}>
        <Input
          type="text"
          ref={ref}
          placeholder="Search the site..."
          onChange={handleSearch}
          onClick={onScroll}
        />
      </div>
    );
  },
);

export default memo(SearchBox);
