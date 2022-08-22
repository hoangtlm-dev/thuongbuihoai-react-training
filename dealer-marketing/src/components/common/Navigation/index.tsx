import React, { useCallback, useContext, useEffect, useState } from "react";
import { debounce } from "lodash";
import Icon, { IconType } from "../Icon";
import { MENU_LIST } from "@constants/menu";
import { MenuTypeProp } from "@common-types/menu";
import { IMAGE } from "@constants/image";
import { BlogContext } from "@context/BlogContext";
import Logo from "../Logo";
import Menu from "../Menu";
import styleNavigation from "./navigation.module.css";
import SearchBox from "../SearchBox/SearchBox";

const Navigation: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { setSearchValue } = useContext(BlogContext);
  const [viewOnBlogs, setViewOnBlogs] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setViewOnBlogs(viewOnBlogs);
    });
  }, []);

  const scrollToBlogs = () => {
    window.scrollTo({
      top: 1300,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  const handleToggleModal = useCallback(
    (event: { stopPropagation: () => void }) => {
      event.stopPropagation();
      setOpenModal(true);
    },
    [],
  );

  const handleSearch = React.useRef(
    debounce(async (event: { target: { value: string } }) => {
      setSearchValue(event.target.value);
    }, 1000),
  ).current;

  const closeSearchBox = useCallback((event: Event) => {
    if (!(event.target as HTMLInputElement).closest("#searchInput")) {
      setOpenModal(false);
    }
  }, []);

  useEffect(() => {
    return () => {
      handleSearch.cancel();
    };
  }, [handleSearch]);

  useEffect(() => {
    document.addEventListener("click", closeSearchBox);
    return () => document.removeEventListener("click", closeSearchBox);
  }, []);

  return (
    <>
      <nav className={styleNavigation.nav}>
        <Logo url={IMAGE.logoUrl} />
        <div className={styleNavigation["nav-info"]}>
          <Menu type={MenuTypeProp.dark} menuList={MENU_LIST} />
          <Icon iconName={IconType.search} onClick={handleToggleModal} />
        </div>
      </nav>
      {openModal && (
        <SearchBox
          openModal={handleToggleModal}
          onSearch={handleSearch}
          onScroll={scrollToBlogs}
        />
      )}
    </>
  );
};

export default Navigation;
