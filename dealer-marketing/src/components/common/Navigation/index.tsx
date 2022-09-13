import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Icon, { IconType } from "../Icon";
import { ROUTER_LIST } from "@constants/routes";
import { IMAGE } from "@constants/image";
import { RouterTypeProp } from "@self-types/routes";
import Logo from "../Logo";
import Menu from "../Menu";
import SearchBox from "../SearchBox/SearchBox";
import styleNavigation from "./navigation.module.css";
import { BlogContext } from "@context/BlogContext";

const Navigation: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [viewOnBlogs, setViewOnBlogs] = useState<boolean>(true);
  const { setSearchValue } = useContext(BlogContext);

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

  const inputRef = useRef<HTMLInputElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setSearchValue("");
      setOpenModal(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [inputRef]);

  return (
    <>
      <nav data-testid="navigation" className={styleNavigation.nav}>
        <Logo url={IMAGE.logoUrl} />
        <div className={styleNavigation["nav-info"]}>
          <Menu type={RouterTypeProp.dark} menuList={ROUTER_LIST} />
          <Icon iconName={IconType.search} onClick={handleToggleModal} />
        </div>
      </nav>
      {openModal && (
        <SearchBox
          ref={inputRef}
          openModal={handleToggleModal}
          onScroll={scrollToBlogs}
        />
      )}
    </>
  );
};

export default Navigation;
