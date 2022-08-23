import React, {
  ChangeEventHandler,
  memo,
  MouseEventHandler,
  useCallback,
  useEffect,
} from "react";
import Input from "../Input";
import styleNavigation from "../Navigation/navigation.module.css";

interface SearchBoxProps {
  openModal: Function;
  onSearch: ChangeEventHandler<HTMLInputElement>;
  onScroll: MouseEventHandler<HTMLInputElement>;
}
const SearchBox: React.FC<SearchBoxProps> = ({
  openModal,
  onScroll,
  onSearch,
}) => {
  const closeSearchBox = useCallback((event: Event) => {
    if (!(event.target as HTMLInputElement).closest("#searchInput")) {
      openModal(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", closeSearchBox);
    return () => document.removeEventListener("click", closeSearchBox);
  }, []);

  return (
    <div
      id="searchInput"
      data-testid="search-box"
      className={styleNavigation["nav-search"]}>
      <Input
        type="text"
        placeholder="Search the site..."
        onChange={onSearch}
        onClick={onScroll}
      />
    </div>
  );
};

export default memo(SearchBox);
