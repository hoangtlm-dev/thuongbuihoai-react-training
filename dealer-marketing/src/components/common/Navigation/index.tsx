import React, { useCallback, useEffect, useState } from "react";
import Icon, { IconType } from "../Icon";
import { MENU_LIST } from "@constants/menu";
import { MenuTypeProp } from "@common-types/menu";
import { IMAGE } from "@constants/image";
import Logo from "../Logo";
import Menu from "../Menu";
import styleNavigation from "./navigation.module.css";
import SearchBox from "../SearchBox/SearchBox";

const Navigation: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
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

  const closeSearchBox = useCallback((event: Event) => {
    if (!(event.target as HTMLInputElement).closest("#searchInput")) {
      setOpenModal(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", closeSearchBox);
    return () => document.removeEventListener("click", closeSearchBox);
  }, []);

  return (
    <>
      <nav data-testid="navigation" className={styleNavigation.nav}>
        <Logo url={IMAGE.logoUrl} />
        <div className={styleNavigation["nav-info"]}>
          <Menu type={MenuTypeProp.dark} menuList={MENU_LIST} />
          <Icon iconName={IconType.search} onClick={handleToggleModal} />
        </div>
      </nav>
      {openModal && (
        <SearchBox openModal={handleToggleModal} onScroll={scrollToBlogs} />
      )}
    </>
  );
};

export default Navigation;
