import React, { useCallback, useContext, useState } from "react";
import Icon, { IconType } from "../Icon";
import { MENU_LIST } from "@constants/menu";
import { MenuTypeProp } from "@common-types/menu";
import { DataContext } from "@context/DataContext";
import { IMAGE } from "@constants/image";
import Logo from "../Logo";
import Menu from "../Menu";
import styleNavigation from "./navigation.module.css";

const Navigation: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { setSearchValue } = useContext(DataContext);

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
          />
        </div>
      )}
    </>
  );
};

export default Navigation;
