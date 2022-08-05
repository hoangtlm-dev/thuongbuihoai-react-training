import React, { useCallback, useContext, useState } from "react";
import { MENU_LIST } from "@constants/menu";
import { DataContext } from "@context/DataContext";
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
        <Logo />
        <div className={styleNavigation["nav-info"]}>
          <Menu type="dark" menuList={MENU_LIST} />
          <i
            className="fa-solid fa-magnifying-glass"
            onClick={handleToggleModal}></i>
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
