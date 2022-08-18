import React, { useCallback, useContext, useEffect, useState } from "react";
import Icon, { IconType } from "../Icon";
import { MENU_LIST } from "@constants/menu";
import { MenuTypeProp } from "@common-types/menu";
import { IMAGE } from "@constants/image";
import { BlogContext } from "@context/BlogContext";
import Logo from "../Logo";
import Menu from "../Menu";
import styleNavigation from "./navigation.module.css";

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

  const handleToggleModal = useCallback(() => {
    setOpenModal(!openModal);
  }, [openModal]);

  const handleSearch = (event: { target: { value: string } }) => {
    const value = event.target.value;
    setSearchValue(value);
  };

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
        <div className={styleNavigation["nav-search"]}>
          <input
            type="text"
            placeholder="Search the site..."
            onChange={handleSearch}
            onClick={scrollToBlogs}
          />
        </div>
      )}
    </>
  );
};

export default Navigation;
