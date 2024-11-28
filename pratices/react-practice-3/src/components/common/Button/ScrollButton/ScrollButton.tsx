import React, { memo, useEffect, useState } from "react";
import "./scrollButton.css";

interface ButtonScroll {
  className?: string;
  children: JSX.Element;
  onClick?: () => void;
}

const ScrollButton: React.FC<ButtonScroll> = memo(({ children, className }) => {
  // create state to handle back to top
  const [btnOnTop, setBtnOnTop] = useState<boolean>(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 500) {
        setBtnOnTop(btnOnTop);
      } else {
        setBtnOnTop(!btnOnTop);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <>
      {btnOnTop && (
        <button
          data-testid="back-to-top"
          className={className}
          onClick={scrollToTop}
        >
          {children}
        </button>
      )}
      <div></div>
    </>
  );
});

export default ScrollButton;
